import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import SpecialtyCards from './components/SpecialtyCards';
import ProductsCarousel from './components/ProductsCarousel';
import AboutSection from './components/AboutSection';
import Certifications from './components/Certifications';
import USPSection from './components/USPSection';
import InstagramFeed from './components/InstagramFeed';
import ContactSection from './components/ContactSection';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroCarousel />
      <SpecialtyCards />
      <ProductsCarousel />
      <AboutSection />
      <Certifications />
      <USPSection />
      <InstagramFeed />
      <ContactSection />
      <ChatWidget />
      <Footer />
    </div>
  );
}
