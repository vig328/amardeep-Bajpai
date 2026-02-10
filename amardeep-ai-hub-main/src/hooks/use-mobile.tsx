// src/hooks/useAdminAuth.ts
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";

interface AdminAuthResult {
  user: any | null;
  isAdmin: boolean;
  isLoading: boolean;
  redirectIfNotAdmin: () => void;
  logout: () => void;
}

export const useAdminAuth = (): AdminAuthResult => {
  const [user, setUser] = useState<any | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start as true
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    console.log("Logout initiated.");
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUserEmail');

    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Error signing out from Supabase:", error.message);
    }

    setUser(null);
    setIsAdmin(false);
    setIsLoading(false); // Ensure loading is false after logout
    navigate('/admin/login', { replace: true });
  }, [navigate]);

  const checkAdminStatus = useCallback(async () => {
    setIsLoading(true); // Always set loading to true at the start of status check

    const isHardcodedAdminFlag = localStorage.getItem('isAdminLoggedIn') === 'true';
    const adminEmail = localStorage.getItem('adminUserEmail');

    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (sessionError) {
        console.error("Error fetching Supabase session:", sessionError.message);
        setUser(null);
        setIsAdmin(false);
        setIsLoading(false);
        return;
    }

    if (session?.user && isHardcodedAdminFlag && session.user.email === adminEmail) {
      // We have a Supabase session AND our hardcoded flag matches. This is a valid admin login.
      setUser(session.user);
      setIsAdmin(true);
    } else {
      // If any of these conditions fail, not an admin via our system.
      setUser(null);
      setIsAdmin(false);
      // Clean up localStorage if session is invalid but flag was set
      if (isHardcodedAdminFlag) {
        console.log("useAdminAuth: Supabase session invalid or mismatch with hardcoded flag. Clearing localStorage.");
        localStorage.removeItem('isAdminLoggedIn');
        localStorage.removeItem('adminUserEmail');
      }
    }
    setIsLoading(false); // Set to false once all checks are complete
  }, []); // No external dependencies needed for this core logic

  const redirectIfNotAdmin = useCallback(() => {
    // This is called by Dashboard when it thinks it's not admin.
    // Ensure we are not currently loading before initiating a redirect,
    // to give checkAdminStatus a chance to complete.
    // If it resolves to not being admin, then logout.
    if (!isLoading && !isAdmin) { // Only redirect if we've finished loading and determined not admin
        logout();
    }
  }, [isLoading, isAdmin, logout]);


  useEffect(() => {
    // Initial check when the hook mounts
    checkAdminStatus();

    // Listen for Supabase auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        console.log("Supabase Auth State Change:", event, session?.user?.email);
        await checkAdminStatus(); // Re-run the comprehensive check on any auth state change
      }
    );

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [checkAdminStatus]); // Only checkAdminStatus is a dependency here, it encapsulates everything else.


  return { user, isAdmin, isLoading, redirectIfNotAdmin, logout };
};