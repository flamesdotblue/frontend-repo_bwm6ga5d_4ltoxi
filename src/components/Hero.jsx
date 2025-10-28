import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/90" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium shadow-sm ring-1 ring-white/20">
            <Rocket className="h-3.5 w-3.5 text-emerald-300" />
            <span>Introducing REPIXELIZE</span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Reinvent your images with precision, speed, and style
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80">
            REPIXELIZE is a modern image editing experience built for creators. Explore AI-powered tools, seamless workflows, and a crisp, minimalist interface.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#editor"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-white font-semibold shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition"
            >
              Try the live demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
