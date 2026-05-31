import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import LocationHours from './components/LocationHours';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Smooth scroll helper
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-x-hidden antialiased select-none selection:bg-cafe-taupe selection:text-cafe-dark-espresso">
      
      {/* 1. Header Navigation Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. Impactful Hero Presentation */}
      <Hero 
        onOpenBooking={() => setIsBookingOpen(true)} 
        onExploreMenu={() => handleScrollToSection('menu')} 
      />

      {/* 3. The Culinary Story & Technique Pillars (About) */}
      <About />

      {/* 4. Tab-filtered Menu Grid */}
      <MenuSection />

      {/* 5. Star-rated Customer Social Testimonials */}
      <Testimonials />

      {/* 6. Pinterest-style Lookbook Bento Gallery & Lightbox */}
      <Gallery />

      {/* 7. Working schedules & Address Locator Spot */}
      <LocationHours />

      {/* 8. Footer branding, sitemaps, and newsletter sub */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 9. Floating Reservation scheduler Modal form Overlay */}
      <ReservationForm 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />

    </div>
  );
}
