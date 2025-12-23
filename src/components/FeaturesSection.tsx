import { 
  FileText, 
  Search, 
  Sparkles, 
  Download, 
  Moon, 
  Lock,
  Zap,
  Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/**
 * FeaturesSection componentt
 * Displays the key features of the Smart Notes application
 */
const FeaturesSection = () => {
  // Feature list with icons and descriptions
  const features = [
    {
      icon: FileText,
      title: 'Create & Organize Notes',
      description: 'Easily create, edit, and delete notes. Keep all your study materials organized in one place.',
    },
    {
      icon: Search,
      title: 'Instant Search',
      description: 'Quickly find any note with our powerful search functionality. Filter by title or content.',
    },
    {
      icon: Sparkles,
      title: 'AI Study Helper',
      description: 'Get AI-powered summaries, explanations, and revision points to boost your learning.',
    },
    {
      icon: Download,
      title: 'Export Notes',
      description: 'Download all your notes as a text file. Take your study materials anywhere.',
    },
    {
      icon: Moon,
      title: 'Dark Mode',
      description: 'Easy on your eyes with dark mode support. Perfect for late-night study sessions.',
    },
    {
      icon: Lock,
      title: 'Local Storage',
      description: 'Your notes are stored securely in your browser. No account required, complete privacy.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant load times with no server delays. Your notes are always ready when you are.',
    },
    {
      icon: Clock,
      title: 'Word Counter',
      description: 'Track your note length with real-time word counting. Perfect for assignments.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Students
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take notes effectively and study smarter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="elevated"
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
