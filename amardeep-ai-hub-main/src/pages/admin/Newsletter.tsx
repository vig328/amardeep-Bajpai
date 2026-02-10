import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, CheckCircle, XCircle } from "lucide-react";
import { format } from "date-fns";

interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

export default function Newsletter() {
  const { isAdmin, isLoading } = useAdminAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [subscriptions, setSubscriptions] = useState<NewsletterSubscription[]>([]);

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      navigate("/admin/login");
    }
  }, [isAdmin, isLoading, navigate]);

  useEffect(() => {
    fetchSubscriptions();

    const channel = supabase
      .channel('newsletter-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'newsletter_subscriptions' }, () => {
        fetchSubscriptions();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAdmin]);

  async function fetchSubscriptions() {
    if (!isAdmin) return;

    try {
      const { data, error } = await supabase
        .from("newsletter_subscriptions")
        .select("*")
        .order("subscribed_at", { ascending: false });

      if (error) throw error;
      setSubscriptions(data || []);
    } catch (error) {
      console.error("Error fetching newsletter subscriptions:", error);
      toast({
        title: "Error",
        description: "Failed to fetch newsletter subscriptions",
        variant: "destructive",
      });
    }
  }

  async function toggleActive(id: string, currentStatus: boolean) {
    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .update({ is_active: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Subscription ${!currentStatus ? "activated" : "deactivated"} successfully`,
      });
    } catch (error) {
      console.error("Error updating subscription:", error);
      toast({
        title: "Error",
        description: "Failed to update subscription",
        variant: "destructive",
      });
    }
  }

  async function deleteSubscription(id: string) {
    if (!confirm("Are you sure you want to delete this subscription?")) return;

    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Subscription deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting subscription:", error);
      toast({
        title: "Error",
        description: "Failed to delete subscription",
        variant: "destructive",
      });
    }
  }

  if (isLoading || !isAdmin) {
    return null;
  }

  const activeCount = subscriptions.filter(s => s.is_active).length;
  const totalCount = subscriptions.length;

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold mb-2">Newsletter Subscriptions</h1>
            <p className="text-muted-foreground">
              Manage all newsletter subscribers ({activeCount} active out of {totalCount} total)
            </p>
          </div>

          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Subscribed Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                      No newsletter subscriptions yet
                    </TableCell>
                  </TableRow>
                ) : (
                  subscriptions.map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell className="font-medium">{subscription.email}</TableCell>
                      <TableCell>
                        {format(new Date(subscription.subscribed_at), "MMM dd, yyyy 'at' hh:mm a")}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {subscription.is_active ? (
                            <>
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-green-500">Active</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-muted-foreground" />
                              <span className="text-muted-foreground">Inactive</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleActive(subscription.id, subscription.is_active)}
                          >
                            {subscription.is_active ? "Deactivate" : "Activate"}
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteSubscription(subscription.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
}
