import React, { useMemo, useRef, useState } from 'react';
import { Upload, SlidersHorizontal, RefreshCcw } from 'lucide-react';

export default function InteractiveShowcase() {
  const [imageUrl, setImageUrl] = useState('');
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturate: 110,
    blur: 0,
    grayscale: 0,
  });

  const fileInputRef = useRef(null);

  const filterStyle = useMemo(() => {
    const { brightness, contrast, saturate, blur, grayscale } = filters;
    return {
      filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) blur(${blur}px) grayscale(${grayscale}%)`,
    };
  }, [filters]);

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: Number(e.target.value) }));
  };

  const applyPreset = (preset) => {
    const presets = {
      vivid: { brightness: 110, contrast: 110, saturate: 140, blur: 0, grayscale: 0 },
      film: { brightness: 95, contrast: 120, saturate: 90, blur: 0.5, grayscale: 10 },
      mono: { brightness: 105, contrast: 115, saturate: 0, blur: 0, grayscale: 100 },
      clean: { brightness: 105, contrast: 102, saturate: 110, blur: 0, grayscale: 0 },
    };
    setFilters(presets[preset]);
  };

  const resetAll = () => setFilters({ brightness: 100, contrast: 100, saturate: 110, blur: 0, grayscale: 0 });

  return (
    <section id="editor" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Try the interactive editor</h3>
            <p className="mt-2 text-muted-foreground">
              Upload an image and experiment with creative adjustments. Everything runs in your browser.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium shadow hover:bg-white/90"
              >
                <Upload className="h-4 w-4" /> Upload image
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={onUpload} />

              <button onClick={() => applyPreset('vivid')} className="rounded-full px-4 py-2 bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">Vivid</button>
              <button onClick={() => applyPreset('film')} className="rounded-full px-4 py-2 bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">Film</button>
              <button onClick={() => applyPreset('mono')} className="rounded-full px-4 py-2 bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">Mono</button>
              <button onClick={() => applyPreset('clean')} className="rounded-full px-4 py-2 bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">Clean</button>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-medium">
                <SlidersHorizontal className="h-4 w-4" /> Adjustments
                <button onClick={resetAll} className="ml-auto inline-flex items-center gap-1 text-xs rounded-full px-3 py-1 bg-white/10 hover:bg-white/20">
                  <RefreshCcw className="h-3.5 w-3.5" /> Reset
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <Slider label="Brightness" min={50} max={150} value={filters.brightness} onChange={handleChange('brightness')} />
                <Slider label="Contrast" min={50} max={150} value={filters.contrast} onChange={handleChange('contrast')} />
                <Slider label="Saturation" min={0} max={200} value={filters.saturate} onChange={handleChange('saturate')} />
                <Slider label="Blur" min={0} max={5} step={0.5} value={filters.blur} onChange={handleChange('blur')} />
                <Slider label="Grayscale" min={0} max={100} value={filters.grayscale} onChange={handleChange('grayscale')} />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Uploaded preview"
                  className="h-full w-full object-contain"
                  style={filterStyle}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                  Upload an image to get started
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, min, max, step = 1, value, onChange }) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-white/80 font-medium">{typeof value === 'number' ? value.toFixed(0) : value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full accent-emerald-500"
      />
    </label>
  );
}
