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

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string | null;
  subject: string | null;
  message: string;
  created_at: string;
}

export default function AdminContactMessages() {
  const { isAdmin, isLoading, redirectIfNotAdmin } = useAdminAuth();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    redirectIfNotAdmin();
  }, [isAdmin, isLoading]);

  useEffect(() => {
    fetchContacts();

    const channel = supabase
      .channel('contact-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_submissions' }, () => {
        fetchContacts();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [isAdmin]);

  async function fetchContacts() {
    if (!isAdmin) return;

    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contacts:', error);
      return;
    }

    setContacts(data || []);
  }

  async function handleDelete(id: string) {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete contact message",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Contact message deleted",
    });
    fetchContacts();
  }

  const filteredContacts = contacts.filter(contact =>
    contact.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message?.toLowerCase().includes(searchTerm.toLowerCase())
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
          <h1 className="text-3xl font-heading font-bold mb-8">Contact Messages</h1>
          
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search contacts..."
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
                  <TableHead>Company</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">{contact.first_name} {contact.last_name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.company || 'N/A'}</TableCell>
                    <TableCell>{contact.subject || 'N/A'}</TableCell>
                    <TableCell>{new Date(contact.created_at).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedContact(contact)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(contact.id)}
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

      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Message Details</DialogTitle>
          </DialogHeader>
          {selectedContact && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <p className="text-sm text-muted-foreground">{selectedContact.first_name} {selectedContact.last_name}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <p className="text-sm text-muted-foreground">{selectedContact.email}</p>
              </div>
              {selectedContact.company && (
                <div>
                  <label className="text-sm font-medium">Company</label>
                  <p className="text-sm text-muted-foreground">{selectedContact.company}</p>
                </div>
              )}
              {selectedContact.subject && (
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <p className="text-sm text-muted-foreground">{selectedContact.subject}</p>
                </div>
              )}
              <div>
                <label className="text-sm font-medium">Message</label>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div>
                <label className="text-sm font-medium">Received</label>
                <p className="text-sm text-muted-foreground">{new Date(selectedContact.created_at).toLocaleString()}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
