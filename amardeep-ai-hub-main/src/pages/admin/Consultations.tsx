import { useEffect, useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Eye, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_interest: string;
  preferred_date: string | null;
  preferred_time: string | null;
  project_details: string | null;
  created_at: string;
}

export default function AdminConsultations() {
  const { isAdmin, isLoading, redirectIfNotAdmin } = useAdminAuth();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);

  useEffect(() => {
    redirectIfNotAdmin();
  }, [isAdmin, isLoading]);

  useEffect(() => {
    fetchConsultations();

    const channel = supabase
      .channel('consultation-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'consultations' }, () => {
        fetchConsultations();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAdmin]);

  async function fetchConsultations() {
    if (!isAdmin) return;

    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching consultations:', error);
      return;
    }

    setConsultations(data || []);
  }

  async function handleDelete(id: string) {
    const { error } = await supabase
      .from('consultations')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete consultation",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Consultation deleted",
    });
    fetchConsultations();
  }

  const filteredConsultations = consultations.filter(consultation =>
    consultation.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    consultation.service_interest?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex h-screen w-full bg-background">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-heading font-bold mb-8">Consultation Requests</h1>
          
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search consultations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Preferred Date</TableHead>
                  <TableHead>Date Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredConsultations.map((consultation) => (
                  <TableRow key={consultation.id}>
                    <TableCell className="font-medium">{consultation.name}</TableCell>
                    <TableCell>{consultation.email}</TableCell>
                    <TableCell>{consultation.service_interest}</TableCell>
                    <TableCell>
                      {consultation.preferred_date 
                        ? new Date(consultation.preferred_date).toLocaleDateString() 
                        : 'N/A'}
                    </TableCell>
                    <TableCell>{new Date(consultation.created_at).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedConsultation(consultation)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(consultation.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedConsultation} onOpenChange={() => setSelectedConsultation(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Consultation Details</DialogTitle>
          </DialogHeader>
          {selectedConsultation && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <p className="text-sm text-muted-foreground">{selectedConsultation.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-sm text-muted-foreground">{selectedConsultation.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p className="text-sm text-muted-foreground">{selectedConsultation.phone || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <p className="text-sm text-muted-foreground">{selectedConsultation.company || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Service Interest</label>
                  <p className="text-sm text-muted-foreground">{selectedConsultation.service_interest}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Preferred Date</label>
                  <p className="text-sm text-muted-foreground">
                    {selectedConsultation.preferred_date 
                      ? new Date(selectedConsultation.preferred_date).toLocaleDateString() 
                      : 'N/A'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium">Preferred Time</label>
                  <p className="text-sm text-muted-foreground">{selectedConsultation.preferred_time || 'N/A'}</p>
                </div>
              </div>
              {selectedConsultation.project_details && (
                <div>
                  <label className="text-sm font-medium">Project Details</label>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">{selectedConsultation.project_details}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
