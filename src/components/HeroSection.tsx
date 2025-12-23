import { PenLine, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * HeroSection component
 * Main landing section with CTA buttons
 */
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decorative elements  hiiiiiiiiii*/}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Note Takings</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up">
            Your Intelligent{' '}
            <span className="gradient-text">Note-Taking</span>
            {' '}Companion
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Create, organize, and manage your notes effortlessly. 
            Get AI-powered summaries, explanations, and revision points to boost your studies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button size="xl" asChild>
              <a href="#notes" className="gap-2">
                <PenLine className="h-5 w-5" />
                Create Note
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href="#ai-helper" className="gap-2">
                <Sparkles className="h-5 w-5" />
                Ask AI Helper
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Free to Use</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Local</div>
              <div className="text-sm text-muted-foreground">Storage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">AI</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <a href="#notes" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
