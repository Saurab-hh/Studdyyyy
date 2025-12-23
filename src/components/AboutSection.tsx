import { BookOpen, Target, Users, Lightbulb } from 'lucide-react';

/**
 * AboutSection component
 * Describes the purpose and goals of the Smart Notes project
 */
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Smart Notes</h2>
            <p className="text-muted-foreground">
              A modern solution for student note-taking and study management
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Left - Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-primary">Smart Notes</span> is designed 
                to help students create, organize, and manage their study materials efficiently. 
                Built with modern web technologies, it provides a seamless note-taking experience 
                with AI-powered assistance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This project demonstrates the power of front-end web development, featuring 
                local storage for data persistence, a simulated AI helper for study assistance, 
                and a beautiful, responsive interface that works on all devices.
              </p>
            </div>

            {/* Right - Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Easy to Use</div>
                <div className="text-sm text-muted-foreground">Intuitive interface</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Focused</div>
                <div className="text-sm text-muted-foreground">Built for students</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Accessible</div>
                <div className="text-sm text-muted-foreground">Works everywhere</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border text-center">
                <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">AI Powered</div>
                <div className="text-sm text-muted-foreground">Smart assistance</div>
              </div>
            </div>
          </div>

          {/* Project Goals */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Project Goals</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">01</div>
                <div className="font-medium mb-1">Simplify Note-Taking</div>
                <div className="text-sm text-muted-foreground">
                  Make creating and managing notes effortless for students
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">02</div>
                <div className="font-medium mb-1">Enhance Learning</div>
                <div className="text-sm text-muted-foreground">
                  Provide AI tools to help summarize and understand content
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">03</div>
                <div className="font-medium mb-1">Ensure Privacy</div>
                <div className="text-sm text-muted-foreground">
                  Keep all data local with no server dependencies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
