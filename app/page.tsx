import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import NewsUpdates from "@/components/NewsUpdates";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <NewsUpdates />
    </div>
  );
}
