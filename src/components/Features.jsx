import React from 'react';
import { Camera, Wand2, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Crystal-clear edits',
    desc: 'High-fidelity adjustments that preserve detail and texture while enhancing your visuals.'
  },
  {
    icon: Wand2,
    title: 'One-click magic',
    desc: 'Smart presets and AI suggestions help you nail the look instantly.'
  },
  {
    icon: Sparkles,
    title: 'Creative controls',
    desc: 'Fine-tune with granular sliders for color, tone, and effects—without the clutter.'
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'Your images stay secure. Local edits by default with export-ready results.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-background via-background to-background/60">
      <div className="absolute inset-0 -z-[0] pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Designed for photographers and creators</h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to move fast and create your signature look.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
