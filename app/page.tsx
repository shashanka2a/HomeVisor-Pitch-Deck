"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 12;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EBE9FF] to-[#DAD7FF] flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-5xl">
        {/* Slide Container */}
        <div className="relative">
          {/* Slide 1: Title */}
          {currentSlide === 0 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="space-y-8">
                <h1 className="text-[#0B0E19] text-7xl">
                  HomeVisor
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] mx-auto rounded-full"></div>
                <h2 className="text-[#0B0E19] text-4xl">
                  Your Home, Managed
                </h2>
                <p className="text-[#0B0E19]/70 text-2xl max-w-2xl mx-auto">
                  The 24/7 Home Manager for Every Homeowner
                </p>
              </div>
            </div>
          )}

          {/* Slide 2: Introduction */}
          {currentSlide === 1 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-[#0B0E19] text-5xl text-center">
                  The Challenge
                </h2>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-10">
                  <p className="text-[#0B0E19] text-2xl leading-relaxed">
                    Owning a home should not feel like running a small company. HomeVisor gives every homeowner a single point of contact who handles maintenance, planning, and contractors.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="bg-white border-2 border-[#EBE9FF] rounded-2xl p-6 text-center shadow-md">
                    <p className="text-[#0B0E19] text-2xl">No directories</p>
                  </div>
                  <div className="bg-white border-2 border-[#EBE9FF] rounded-2xl p-6 text-center shadow-md">
                    <p className="text-[#0B0E19] text-2xl">No guesswork</p>
                  </div>
                  <div className="bg-white border-2 border-[#EBE9FF] rounded-2xl p-6 text-center shadow-md">
                    <p className="text-[#0B0E19] text-2xl">No emergencies</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 3: Problem 1 */}
          {currentSlide === 2 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="inline-block px-6 py-2 bg-[#0B0E19] rounded-full mb-4">
                  <p className="text-white">Problem #1</p>
                </div>
                <h2 className="text-[#0B0E19] text-5xl">
                  Too many contractors,<br />zero coordination
                </h2>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-10">
                  <p className="text-[#0B0E19] text-2xl leading-relaxed">
                    Homeowners spend hours finding, vetting, and scheduling help. You act like your own general contractor for everything.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 4: Problem 2 */}
          {currentSlide === 3 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="inline-block px-6 py-2 bg-[#0B0E19] rounded-full mb-4">
                  <p className="text-white">Problem #2</p>
                </div>
                <h2 className="text-[#0B0E19] text-5xl">
                  Homeownership feels like<br />a financial trap
                </h2>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-10">
                  <p className="text-[#0B0E19] text-2xl leading-relaxed">
                    Major failures like HVAC, roofs, and water heaters strike without warning. Most people cannot predict lifespans or budget properly.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 5: Solution Introduction */}
          {currentSlide === 4 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8 text-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-full">
                  <p className="text-[#0B0E19]">The HomeVisor Solution</p>
                </div>
                <h2 className="text-[#0B0E19] text-6xl">
                  A unified Home<br />Operating System
                </h2>
                <p className="text-[#0B0E19]/70 text-2xl max-w-2xl mx-auto">
                  This turns ownership from reactive and stressful into predictable and managed.
                </p>
              </div>
            </div>
          )}

          {/* Slide 6: Proactive Asset Management */}
          {currentSlide === 5 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-[#0B0E19] text-5xl">
                  Proactive Asset Management
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Track age & lifespan of major systems
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Predict upcoming replacements
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Smart "Sinking Fund" calculations
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Avoid surprise expenses with monthly saving targets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 7: Managed Services Marketplace */}
          {currentSlide === 6 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-[#0B0E19] text-5xl">
                  Managed Services<br />Marketplace
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Not a directory. Full service coordination.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Book vetted professionals for routine + technical jobs
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Centralized billing and scheduling
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <p className="text-[#0B0E19] text-xl">
                      Annual home inspections feed data into the lifecycle tracker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 8: Comparison Table */}
          {currentSlide === 7 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-[#0B0E19] text-5xl text-center mb-8">
                  Why HomeVisor Wins
                </h2>
                <div className="overflow-hidden rounded-2xl border-2 border-[#EBE9FF]">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#0B0E19] text-white">
                        <th className="p-4 text-left text-xl">Feature</th>
                        <th className="p-4 text-left text-xl">Legacy Platforms</th>
                        <th className="p-4 text-left text-xl bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] text-[#0B0E19]">HomeVisor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#EBE9FF]">
                        <td className="p-4 text-[#0B0E19]">User Role</td>
                        <td className="p-4 text-[#0B0E19]/70">DIY manager</td>
                        <td className="p-4 text-[#0B0E19]">Delegator</td>
                      </tr>
                      <tr className="border-b border-[#EBE9FF]">
                        <td className="p-4 text-[#0B0E19]">Model</td>
                        <td className="p-4 text-[#0B0E19]/70">Lead directory</td>
                        <td className="p-4 text-[#0B0E19]">Fully managed service</td>
                      </tr>
                      <tr className="border-b border-[#EBE9FF]">
                        <td className="p-4 text-[#0B0E19]">Pricing</td>
                        <td className="p-4 text-[#0B0E19]/70">Unpredictable</td>
                        <td className="p-4 text-[#0B0E19]">Centralized billing</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-[#0B0E19]">Approach</td>
                        <td className="p-4 text-[#0B0E19]/70">Fix when broken</td>
                        <td className="p-4 text-[#0B0E19]">Plan, save, maintain</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[#0B0E19] text-xl text-center">
                  HomeVisor bridges property management + on-demand services.<br />
                  <span className="text-2xl">A category-defining position.</span>
                </p>
              </div>
            </div>
          )}

          {/* Slide 9: Revenue Model Introduction */}
          {currentSlide === 8 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-8 text-center">
                <h2 className="text-[#0B0E19] text-6xl">
                  Revenue Model
                </h2>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-10">
                  <p className="text-[#0B0E19] text-3xl">
                    Hybrid Recurring + Transactional
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 10: Revenue Streams */}
          {currentSlide === 9 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-[#0B0E19] text-4xl mb-8">
                  Three Revenue Streams
                </h2>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-8">
                  <p className="text-[#0B0E19] text-2xl mb-2">1. Subscription (SaaS)</p>
                  <p className="text-[#0B0E19]/80 text-lg">
                    Access the Home Manager, maintenance planning, and priority scheduling.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-8">
                  <p className="text-[#0B0E19] text-2xl mb-2">2. Service Commission (30–40%)</p>
                  <p className="text-[#0B0E19]/80 text-lg">
                    Commission on every coordinated job. Similar to Urban Company but tuned for U.S. homeowners.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-8">
                  <p className="text-[#0B0E19] text-2xl mb-2">3. High-Intent Lead Sales</p>
                  <p className="text-[#0B0E19]/80 text-lg">
                    Verified leads for big-ticket contractors (roofing, HVAC, remodels).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Slide 11: Roadmap */}
          {currentSlide === 10 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col justify-center">
              <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-[#0B0E19] text-5xl text-center mb-8">
                  Roadmap
                </h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <div className="bg-[#0B0E19] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl">1</div>
                    <p className="text-[#0B0E19] text-2xl mb-4">Phase 1 — MVP</p>
                    <p className="text-[#0B0E19]/70 mb-2">By Christmas</p>
                    <ul className="space-y-2 text-[#0B0E19]">
                      <li>• Urban Company–style interface for the U.S.</li>
                      <li>• Asset entry + financial visualization</li>
                      <li>• Manual concierge for booking</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <div className="bg-[#0B0E19] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl">2</div>
                    <p className="text-[#0B0E19] text-2xl mb-4">Phase 2 — Pilot</p>
                    <p className="text-[#0B0E19]/70 mb-2">Local Launch</p>
                    <ul className="space-y-2 text-[#0B0E19]">
                      <li>• Launch in markets with trusted contractor networks</li>
                      <li>• Vertically integrated partners</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] rounded-2xl p-6">
                    <div className="bg-[#0B0E19] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl">3</div>
                    <p className="text-[#0B0E19] text-2xl mb-4">Phase 3 — Scale</p>
                    <p className="text-[#0B0E19]/70 mb-2">National Expansion</p>
                    <ul className="space-y-2 text-[#0B0E19]">
                      <li>• AI-driven asset ingestion</li>
                      <li>• Wide contractor marketplace</li>
                      <li>• Automated planning + alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Slide 12: CTA */}
          {currentSlide === 11 && (
            <div className="bg-white rounded-3xl shadow-2xl p-16 min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="space-y-10">
                <h2 className="text-[#0B0E19] text-6xl max-w-3xl">
                  Bring Peace of Mind to Homeownership
                </h2>
                <p className="text-[#0B0E19]/70 text-2xl max-w-2xl mx-auto">
                  Join the early access list for the first managed homeownership platform.
                </p>
                <button className="bg-[#0B0E19] text-white px-12 py-6 rounded-full text-2xl hover:bg-[#0B0E19]/90 transition-colors inline-flex items-center gap-3 shadow-xl">
                  Get Early Access
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="bg-white text-[#0B0E19] p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-all shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-[#0B0E19]'
                    : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="bg-white text-[#0B0E19] p-4 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/90 transition-all shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Keyboard hint */}
        <div className="mt-6 text-center">
          <p className="text-[#0B0E19]/50">
            Use arrow keys ← → to navigate
          </p>
        </div>
      </div>
    </div>
  );
}

