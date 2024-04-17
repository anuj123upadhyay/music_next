import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChoseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
       
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChoseUs/>
       <MusicSchoolTestimonials/>
       <UpcomingWebinar/>
       <Instructors/>
       <Footer/>
    </main>
  
  );
}
