import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold">Create your next masterpiece with REPIXELIZE</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Get started for free. No sign-up required. Edit locally, export instantly.
            </p>
            <div className="mt-6">
              <a href="#editor" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition">
                Open the live editor <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
