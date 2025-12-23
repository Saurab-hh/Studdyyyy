import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import NotesSection from '@/components/NotesSection';
import AIHelperSection from '@/components/AIHelperSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

/**
 * Index Page - Main entry point for Smart Notes
 * A modern note-taking application for students
 * 
 * Features:
 * - Create, edit, delete notes with localStorage
 * - AI Helper for summaries, explanations, and revision
 * - Search and filter functionality
 * - Dark mode toggle
 * - Export notes as text file
 * - Word counter
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Landing area with CTAs */}
        <HeroSection />
        
        {/* Notes Section - CRUD operations for notes */}
        <NotesSection />
        
        {/* AI Helper Section - Chat interface */}
        <AIHelperSection />
        
        {/* Features Section - Highlights of the app */}
        <FeaturesSection />
        
        {/* About Section - Project information */}
        <AboutSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
