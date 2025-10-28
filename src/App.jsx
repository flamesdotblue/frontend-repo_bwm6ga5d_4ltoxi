import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveShowcase from './components/InteractiveShowcase';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400" />
            REPIXELIZE
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#editor" className="text-muted-foreground hover:text-foreground">Live demo</a>
            <a href="#" className="rounded-full bg-white text-black px-4 py-1.5 font-medium hover:bg-white/90">Get started</a>
          </nav>
        </div>
      </header>

      {/* Main sections */}
      <main className="pt-16">
        <Hero />
        <Features />
        <InteractiveShowcase />
        <FooterCTA />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} REPIXELIZE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
