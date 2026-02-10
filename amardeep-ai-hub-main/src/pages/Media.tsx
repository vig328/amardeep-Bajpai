import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Media from "@/components/Media";

const MediaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Media />
      </main>
      <Footer />
    </div>
  );
};

export default MediaPage;