import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Shield, ArrowLeft } from "lucide-react";
import { z } from "zod";

// --- WARNING: DO NOT USE IN PRODUCTION ---
const ALLOWED_ADMIN_USERS = [
  { email: "admin@gmail.com", password: "admin@123" },
  { email: "atharv@gmail.com", password: "atharv@123" },
  { email: "amardeep@gmail.com", password: "amardeep@123" },
];

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password cannot be empty"),
});

const resetSchema = z.object({
  email: z.string().email("Invalid email address"),
});


export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Check for hardcoded admin session on load to redirect if already logged in
  useEffect(() => {
    const checkSessionAndRedirect = async () => {
      const isHardcodedAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
      const adminUserEmail = localStorage.getItem('adminUserEmail');

      if (isHardcodedAdminLoggedIn && adminUserEmail) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user?.email === adminUserEmail) {
          // If hardcoded flag is true AND Supabase session matches, redirect
          navigate('/admin', { replace: true });
        } else {
          // If hardcoded flag is true but Supabase session is missing or wrong, clear flag
          console.log("AdminLogin useEffect: Hardcoded flag exists but Supabase session is invalid. Clearing local storage.");
          localStorage.removeItem('isAdminLoggedIn');
          localStorage.removeItem('adminUserEmail');
        }
      }
    };
    checkSessionAndRedirect();
  }, [navigate]); // navigate is the only dependency here

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validated = loginSchema.parse(loginData);

      const foundAdmin = ALLOWED_ADMIN_USERS.find(
        (admin) => admin.email === validated.email && admin.password === validated.password
      );

      if (!foundAdmin) {
        throw new Error("Invalid email or password.");
      }

      // --- CRITICAL CHANGE: If hardcoded matches, then sign in with Supabase ---
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: validated.email,
        password: validated.password,
      });

      if (authError) {
        console.error("Supabase signInWithPassword error:", authError.message);
        throw new Error(`Authentication failed: ${authError.message}. Make sure user exists in Supabase with matching password.`);
      }
      if (!authData.session || !authData.user) {
        throw new Error("Supabase sign-in succeeded but no session/user returned.");
      }

      // Set a flag in localStorage for the custom admin authentication hook to pick up
      localStorage.setItem('isAdminLoggedIn', 'true');
      localStorage.setItem('adminUserEmail', validated.email); // Store the email

      toast({
        title: "Success",
        description: "Welcome back, Admin!",
      });

      navigate('/admin', { replace: true });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Login Failed",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      throw new Error("Password reset is not available through this admin login panel.");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center font-heading">Admin Panel</CardTitle>
          <CardDescription className="text-center">
            Secure access for administrators only
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="admin@gmail.com"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="admin@123"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}