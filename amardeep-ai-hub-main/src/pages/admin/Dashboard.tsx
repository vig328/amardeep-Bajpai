// pages/admin/Dashboard.tsx - NO CHANGES NEEDED
import { useEffect, useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { StatsCard } from "@/components/admin/StatsCard";
import { Users, MessageSquare, Package, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const { user, isAdmin, isLoading, redirectIfNotAdmin, logout } = useAdminAuth();
  const [stats, setStats] = useState({
    users: 0,
    contacts: 0,
    consultations: 0,
    products: 0,
  });

  useEffect(() => {
    // This effectively acts as a guard. If not loading and not admin, it calls redirect.
    // The redirectIfNotAdmin in the hook now respects the isLoading/isAdmin state.
    if (!isLoading && !isAdmin) {
      redirectIfNotAdmin();
    }
  }, [isLoading, isAdmin, redirectIfNotAdmin]);

  useEffect(() => {
    async function fetchStats() {
      // Ensure the supabase client is authenticated before fetching.
      // This happens automatically because AdminLogin now signs into Supabase.
      const [usersRes, contactsRes, consultationsRes, productsRes] = await Promise.all([
        supabase.from('profiles').select('id', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('id', { count: 'exact', head: true }),
        supabase.from('consultations').select('id', { count: 'exact', head: true }),
        supabase.from('products').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        users: usersRes.count || 0,
        contacts: contactsRes.count || 0,
        consultations: consultationsRes.count || 0,
        products: productsRes.count || 0,
      });
    }

    if (isAdmin && !isLoading) {
      fetchStats();
    }
  }, [isAdmin, isLoading]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center bg-background">Loading...</div>;
  }

  if (!isAdmin) {
    // This return null prevents rendering content if we're not an admin,
    // while the useEffect above handles the redirect.
    return null;
  }

  return (
    <div className="flex h-screen w-full bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
             <h1 className="text-3xl font-heading font-bold">Dashboard Overview</h1>
             <Button onClick={logout} variant="destructive">Logout</Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Users"
              value={stats.users}
              icon={Users}
              description="Registered users"
            />
            <StatsCard
              title="Contact Messages"
              value={stats.contacts}
              icon={MessageSquare}
              description="Form submissions"
            />
            <StatsCard
              title="Consultations"
              value={stats.consultations}
              icon={Calendar}
              description="Booking requests"
            />
            <StatsCard
              title="Products"
              value={stats.products}
              icon={Package}
              description="Total products"
            />
          </div>
        </div>
      </main>
    </div>
  );
}