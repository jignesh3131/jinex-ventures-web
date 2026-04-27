import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Product />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
