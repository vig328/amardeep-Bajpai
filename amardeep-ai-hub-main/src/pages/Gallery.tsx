import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;