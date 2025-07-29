import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: "Al Buraq Cargo Delivery Services - Professional Cargo Delivery UAE | Abu Dhabi, Dubai",
  description: "Al Buraq Cargo Delivery Services provides professional cargo delivery services across UAE including Abu Dhabi, Dubai, and Sharjah. Fast, reliable, and secure cargo delivery solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="py-20">
        <About />
      </div>
      <div className="py-20">
        <Brands />
      </div>
      <div className="py-20">
        <Services />
      </div>
      <div className="py-20">
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </main>
  );
}
