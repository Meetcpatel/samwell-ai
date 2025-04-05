import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import AIStudy from "@/components/home/AIStudy";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 md:px-12 py-12">
        <Hero />
        <AIStudy />
      </main>

      <Testimonials />
    </div>
  );
}
