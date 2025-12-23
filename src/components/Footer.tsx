import { BookOpen, Heart, Github } from 'lucide-react';

/**
 * Footer component
 * Contains project information, college credits, and links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl">Smart Notes</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Your intelligent note-taking companion. Built to help students 
              organize their studies and learn more effectively.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#notes" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Notes
                </a>
              </li>
              <li>
                <a href="#ai-helper" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  AI Helper
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-semibold mb-4">Project Information</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Project:</strong> Smart Notes - Note Taking Website</p>
              <p><strong className="text-foreground">Type:</strong> College Web Development Project</p>
              <p><strong className="text-foreground">Year:</strong> {currentYear}</p>
              <p><strong className="text-foreground">Tech Stack:</strong> React, TypeScript, Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Smart Notes. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-destructive fill-destructive" /> for College Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
