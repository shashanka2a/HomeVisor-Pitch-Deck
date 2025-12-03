"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  HomeIcon,
  LineChart,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SLIDES = [
  { id: 0, label: "Title", short: "Intro" },
  { id: 1, label: "Challenge", short: "Challenge" },
  { id: 2, label: "Problem #1", short: "Contractors" },
  { id: 3, label: "Problem #2", short: "Financial Trap" },
  { id: 4, label: "Solution", short: "Solution" },
  { id: 5, label: "Proactive Assets", short: "Assets" },
  { id: 6, label: "Marketplace", short: "Marketplace" },
  { id: 7, label: "Comparison", short: "Why Us" },
  { id: 8, label: "Revenue Model", short: "Model" },
  { id: 9, label: "Revenue Streams", short: "Streams" },
  { id: 10, label: "Roadmap", short: "Roadmap" },
  { id: 11, label: "CTA", short: "CTA" },
] as const;

const TOTAL_SLIDES = SLIDES.length;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 24 : -24,
    scale: 0.97,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -24 : 24,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        setDirection(1);
        setCurrentSlide((prev) =>
          prev < TOTAL_SLIDES - 1 ? prev + 1 : prev,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const progress = useMemo(
    () => ((currentSlide + 1) / TOTAL_SLIDES) * 100,
    [currentSlide],
  );

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) =>
      prev < TOTAL_SLIDES - 1 ? prev + 1 : 0,
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const activeMeta = SLIDES[currentSlide];

  return (
    <main className="flex min-h-screen flex-col px-4 pb-8 pt-6 sm:px-6 md:px-10 lg:px-16">
      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 pb-4 md:pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-black/90 text-white shadow-md shadow-black/20">
            <HomeIcon className="h-4 w-4" />
          </div>
          <div className="space-y-0.5">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
              HomeVisor Pitch Deck
            </p>
            <p className="text-sm font-medium md:text-base">
              Your Home, Managed like an asset class
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-3 text-xs md:flex">
          <span className="rounded-full bg-white/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground shadow-sm shadow-black/5 backdrop-blur">
            {String(currentSlide + 1).padStart(2, "0")} ·{" "}
            {String(TOTAL_SLIDES).padStart(2, "0")}
          </span>
          <span className="hidden text-[0.7rem] text-muted-foreground md:inline">
            Use ← and → to navigate
          </span>
        </div>
      </header>

      {/* Main content shell */}
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 md:gap-6">
        <div className="flex flex-1 flex-col gap-4 md:gap-6">
          {/* Overline + title row */}
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground shadow-sm shadow-black/5 backdrop-blur">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Live narrative</span>
              </p>
              <h1 className="font-display text-2xl tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                {activeMeta.id === 0
                  ? "HomeVisor – A Home Operating System"
                  : activeMeta.label}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1.5 text-xs text-muted-foreground shadow-sm shadow-black/5 backdrop-blur md:inline-flex">
                <LineChart className="h-3.5 w-3.5 text-emerald-500" />
                <span>Recurring · Transactional · Trusted</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-black/5 bg-black px-3 py-1.5 text-[0.7rem] text-white shadow-lg shadow-black/40">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Awwwards‑ready prototype</span>
              </div>
            </div>
          </div>

          {/* Slide container */}
          <div className="relative flex flex-1 items-stretch">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative flex w-full flex-1"
              >
                <div className="relative w-full overflow-hidden rounded-3xl border border-black/5 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />

                  <div className="relative z-10 flex min-h-[520px] flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                    {currentSlide === 0 && <HeroSlide />}
                    {currentSlide === 1 && <ChallengeSlide />}
                    {currentSlide === 2 && <ProblemOneSlide />}
                    {currentSlide === 3 && <ProblemTwoSlide />}
                    {currentSlide === 4 && <SolutionIntroSlide />}
                    {currentSlide === 5 && <ProactiveAssetsSlide />}
                    {currentSlide === 6 && <MarketplaceSlide />}
                    {currentSlide === 7 && <ComparisonSlide />}
                    {currentSlide === 8 && <RevenueIntroSlide />}
                    {currentSlide === 9 && <RevenueStreamsSlide />}
                    {currentSlide === 10 && <RoadmapSlide />}
                    {currentSlide === 11 && <CtaSlide />}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom nav shell */}
          <footer className="space-y-4 md:space-y-3">
            {/* Progress bar */}
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/60 shadow-inner shadow-black/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0B0E19] via-[#3b82f6] to-[#22c55e] transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* Slide chips with tooltips */}
              <div className="flex flex-wrap items-center gap-2">
                {SLIDES.map((slide, index) => (
                  <Tooltip key={slide.id}>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={[
                          "group inline-flex items-center gap-1 rounded-full border border-transparent px-1.5 py-1 text-[0.7rem] transition-all",
                          index === currentSlide
                            ? "bg-black text-white shadow-sm shadow-black/30"
                            : "border-black/5 bg-white/80 text-slate-700 hover:bg-white",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "flex h-4 w-4 items-center justify-center rounded-full border text-[0.6rem] font-medium",
                            index === currentSlide
                              ? "border-white/30 bg-white/20"
                              : "border-black/10 bg-white",
                          ].join(" ")}
                        >
                          {String(slide.id + 1).padStart(2, "0")}
                        </span>
                        <span className="hidden sm:inline">
                          {slide.short}
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={8}>
                      <span className="font-medium">
                        {String(slide.id + 1).padStart(2, "0")}
                      </span>
                      <span className="mx-1.5 opacity-60">·</span>
                      <span>{slide.label}</span>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>

              {/* Primary controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-slate-900 shadow-sm shadow-black/10 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={currentSlide === TOTAL_SLIDES - 1}
                  className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/40 transition-all hover:-translate-y-0.5 hover:bg-black/95 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-black/40 disabled:shadow-none"
                >
                  <span>
                    {currentSlide === TOTAL_SLIDES - 1
                      ? "Restart story"
                      : "Next slide"}
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                    <ChevronRight className="h-3 w-3" />
                  </span>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}

// Slides

function HeroSlide() {
  return (
    <div className="grid h-full gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] md:items-center">
      <div className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-500">
          Introducing
        </p>
        <div className="space-y-4">
          <div className="font-display text-4xl leading-[1.05] text-slate-900 sm:text-5xl md:text-6xl">
            <span className="inline-flex items-center gap-2">
              <span>HomeVisor</span>
              <span className="inline-flex items-center rounded-full bg-black px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white shadow-sm shadow-black/30">
                Beta
              </span>
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-900 via-sky-600 to-emerald-500 bg-clip-text text-transparent">
              Your Home, Managed
            </span>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            A 24/7 home manager that tracks assets, coordinates contractors,
            and makes homeownership feel like a managed portfolio instead of
            a never‑ending to‑do list.
          </p>
        </div>

        <div className="grid gap-3 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-slate-900 px-4 py-3 text-slate-50 shadow-sm shadow-slate-900/40">
            <p className="text-xs text-slate-300">For</p>
            <p className="mt-1 font-medium">Time‑poor homeowners</p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm shadow-slate-900/10">
            <p className="text-xs text-slate-500">Problem</p>
            <p className="mt-1 font-medium">
              Chaos across contractors, budgets, and failures
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-sm shadow-slate-900/10">
            <p className="text-xs text-slate-500">Positioning</p>
            <p className="mt-1 font-medium">
              Home Operating System, not a lead directory
            </p>
          </div>
        </div>
      </div>

      <div className="relative hidden h-full md:block">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 shadow-xl shadow-slate-900/60" />
        <div className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(148,163,253,0.25)_0,_transparent_55%)] p-5 text-slate-50">
          <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Live home status</span>
            </span>
            <span className="text-[0.7rem] text-slate-400">
              3 systems at risk · 18 tasks scheduled
            </span>
          </div>

          <div className="grid flex-1 grid-rows-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Maintenance runway</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] text-emerald-300">
                  Healthy
                </span>
              </div>
              <p className="mt-2 text-xl font-semibold">
                18 months
                <span className="ml-1 text-xs font-normal text-slate-400">
                  until major risk event
                </span>
              </p>
              <div className="mt-3 h-1.5 rounded-full bg-slate-800">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-3 text-xs">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                  HVAC
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  9 years old · 3 years to plan
                </p>
                <p className="mt-2 text-[0.75rem] text-emerald-300">
                  On track · savings matched
                </p>
              </div>
              <div className="rounded-2xl border border-amber-400/40 bg-amber-500/10 p-3 text-xs">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-amber-200">
                  Roof
                </p>
                <p className="mt-1 text-sm text-amber-50">
                  18 years old · 2 years to act
                </p>
                <p className="mt-2 text-[0.75rem] text-amber-200">
                  Underfunded · attention needed
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-3 text-xs text-slate-200">
              <p className="mb-2 text-[0.7rem] font-medium text-slate-100">
                Concierge queue
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-center justify-between gap-2">
                  <span className="truncate">
                    Winterization checklist ·{" "}
                    <span className="text-slate-400">scheduled</span>
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.6rem] text-slate-200">
                    Nov 18
                  </span>
                </li>
                <li className="flex items-center justify-between gap-2">
                  <span className="truncate">
                    Gutter cleaning ·{" "}
                    <span className="text-slate-400">awaiting quote</span>
                  </span>
                  <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.6rem] text-slate-200">
                    3 bids
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChallengeSlide() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 md:flex-row md:items-stretch">
      <div className="flex-1 space-y-5">
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-500">
          The challenge
        </p>
        <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
          Homeownership feels like running a small company—with no COO.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Discovery calls with homeowners all sound the same: dozens of
          contractors, no shared memory of the property, and emergencies that
          arrive right when cash is tight. There&apos;s no single source of
          truth, and certainly no single point of accountability.
        </p>

        <div className="rounded-2xl bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] p-6 shadow-sm shadow-slate-900/10">
          <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
            HomeVisor gives every homeowner{" "}
            <span className="font-semibold">one manager</span> who knows the
            home as an asset—tracking systems, planning lifecycle spend, and
            coordinating vetted pros.
          </p>
        </div>
      </div>

      <div className="mt-6 flex-1 space-y-4 md:mt-0 md:pl-6">
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
          Today&apos;s reality
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <ProblemPill
            title="No directories"
            body="Homeowners don’t want more leads—they want outcomes. Infinite choice creates paralysis and risk."
          />
          <ProblemPill
            title="No guesswork"
            body="People can’t estimate system lifespans or budgets. Every failure feels like bad luck instead of bad planning."
          />
          <ProblemPill
            title="No emergencies"
            body="The dream state: a calendar, a fund, and a concierge that make ‘surprises’ extremely rare."
            highlight
          />
        </div>
      </div>
    </div>
  );
}

function ProblemPill({
  title,
  body,
  highlight,
}: {
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "flex flex-col justify-between rounded-2xl border px-4 py-4 text-sm shadow-sm",
        highlight
          ? "border-emerald-300/70 bg-emerald-50/80 shadow-emerald-200/50"
          : "border-[#EBE9FF] bg-white/90 shadow-slate-900/5",
      ].join(" ")}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
          {title}
        </p>
        <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-600">
          {body}
        </p>
      </div>
    </div>
  );
}

function ProblemOneSlide() {
  return (
    <div className="grid h-full gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.2fr)] md:items-center">
      <div className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span>Problem 01</span>
        </p>
        <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
          Too many contractors.{" "}
          <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
            Zero coordination.
          </span>
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Homeowners are acting as their own general contractors: sourcing,
          vetting, scheduling, and paying dozens of different providers—none
          of whom share data or incentives.
        </p>

        <ul className="mt-2 space-y-2 text-sm text-slate-600">
          <li>· No persistent memory of the property or its history.</li>
          <li>· Every job is a cold start, with new vendors each time.</li>
          <li>· No one optimizes for lifetime value of the home.</li>
        </ul>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-500/25 to-amber-400/25 blur-2xl" />
        <div className="relative grid gap-3 rounded-3xl border border-rose-100/70 bg-white/95 p-4 shadow-lg shadow-rose-100/90 sm:grid-cols-2">
          <div className="space-y-2 rounded-2xl bg-rose-50/80 p-3 text-xs">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-rose-500">
              Today
            </p>
            <p className="mt-1 font-medium text-slate-900">
              12+ vendors across email, SMS, and random apps
            </p>
            <p className="mt-1 text-[0.75rem] text-slate-600">
              No shared schedule, no shared notes, no shared incentives.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl bg-slate-900 p-3 text-xs text-slate-50">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-emerald-300">
              With HomeVisor
            </p>
            <p className="mt-1 font-medium">
              One concierge orchestrates a vetted, data‑driven network.
            </p>
            <p className="mt-1 text-[0.75rem] text-slate-300">
              Every visit and system check feeds the asset model behind the
              scenes.
            </p>
          </div>
          <div className="col-span-full mt-1 rounded-2xl border border-dashed border-slate-200/80 bg-slate-50 px-3 py-2.5 text-[0.75rem] text-slate-600">
            HomeVisor isn&apos;t another directory. It&apos;s a{" "}
            <span className="font-semibold">single operating layer</span> on
            top of a curated contractor graph.
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemTwoSlide() {
  return (
    <div className="grid h-full gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] md:items-center">
      <div className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          <span>Problem 02</span>
        </p>
        <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
          Homeownership feels like a financial trap.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Roofs, HVACs, and water heaters never fail on spreadsheets—they fail
          on random Tuesdays. Most families have no idea what is aging, what
          it will cost, or when it will go.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/30 via-orange-400/20 to-rose-400/25 blur-2xl" />
        <div className="relative flex flex-col gap-4 rounded-3xl border border-amber-100 bg-white/95 p-4 shadow-lg shadow-amber-100/80">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-amber-50/90 p-3 text-xs">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-amber-700">
                Reality
              </p>
              <p className="mt-1 font-medium text-slate-900">
                $8–20k events with 0 days notice
              </p>
              <p className="mt-1 text-[0.75rem] text-slate-700">
                Most failures show up as emergencies, not planned line items.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-3 text-xs text-slate-50">
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-emerald-300">
                Desired state
              </p>
              <p className="mt-1 font-medium">
                A sinking fund, not a surprise
              </p>
              <p className="mt-1 text-[0.75rem] text-slate-300">
                Each system has a projected lifespan, cost, and monthly
                contribution target.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-amber-200 bg-gradient-to-r from-amber-50 to-rose-50 px-4 py-3 text-xs text-slate-700">
            <p className="font-medium text-amber-900">
              Our insight: homeowners don&apos;t need more tips; they need a{" "}
              predictable cash flow model for their home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionIntroSlide() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
      <div className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white shadow-sm shadow-black/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>The HomeVisor solution</span>
        </p>
        <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          HomeVisor is a{" "}
          <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
            Home Operating System
          </span>
          .
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          One concierge, one interface, one financial brain. We turn a messy
          collection of systems, vendors, and invoices into a single, cohesive
          asset strategy.
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-4 text-left sm:grid-cols-3">
        <SolutionPill
          title="Single source of truth"
          body="Every major system—age, condition, and projected replacement cost—lives in one place."
        />
        <SolutionPill
          title="Proactive planning"
          body="We design a 3–5 year roadmap so replacements feel expected, not catastrophic."
        />
        <SolutionPill
          title="Managed execution"
          body="Your concierge coordinates vetted pros, schedules jobs, and handles complexity."
        />
      </div>
    </div>
  );
}

function SolutionPill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm shadow-sm shadow-slate-900/10">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-600">
        {body}
      </p>
    </div>
  );
}

function ProactiveAssetsSlide() {
  return (
    <div className="flex h-full flex-col justify-center">
      <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
        Proactive Asset Management
      </h2>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
        We track the age, health, and cost profile of every major system—and
        translate it into a monthly plan instead of surprise invoices.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          "Track age & lifespan of major systems",
          "Predict upcoming replacements",
          "Smart “sinking fund” calculations",
          "Avoid surprise expenses with monthly saving targets",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] p-4 text-sm text-slate-900 shadow-sm shadow-slate-900/10"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketplaceSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
        Managed Services Marketplace
      </h2>
      <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
        Not a directory. A fully managed network where HomeVisor owns the
        relationship with both homeowner and provider.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          "Full service coordination instead of just leads.",
          "Book vetted professionals for routine and complex jobs.",
          "Centralized billing, quality control, and feedback loops.",
          "Annual home inspections feed lifecycle models automatically.",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] p-4 text-sm text-slate-900 shadow-sm shadow-slate-900/10"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-8">
      <h2 className="font-display text-3xl text-center text-slate-900 sm:text-4xl">
        Why HomeVisor wins
      </h2>
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm shadow-slate-900/10">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Legacy platforms
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>· User role: DIY manager.</li>
            <li>· Model: lead directory with no ownership of outcomes.</li>
            <li>· Pricing: unpredictable, vendor by vendor.</li>
            <li>· Approach: fix when broken.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-emerald-300/70 bg-gradient-to-br from-emerald-50 to-sky-50 p-5 shadow-md shadow-emerald-100/80">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-700">
            HomeVisor
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-800">
            <li>· User role: delegator with a trusted manager.</li>
            <li>· Model: fully managed service plus curated marketplace.</li>
            <li>· Pricing: centralized, transparent, and predictable.</li>
            <li>· Approach: plan, save, maintain.</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm text-slate-600 sm:text-base">
        HomeVisor sits between property management and on‑demand services—a{" "}
        <span className="font-semibold">
          category‑defining position for modern homeowners.
        </span>
      </p>
    </div>
  );
}

function RevenueIntroSlide() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
      <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
        Revenue model
      </h2>
      <div className="max-w-xl rounded-3xl bg-gradient-to-r from-[#EBE9FF] to-[#DAD7FF] px-8 py-6 text-slate-900 shadow-md shadow-slate-900/15">
        <p className="text-lg font-medium sm:text-2xl">
          Hybrid recurring + transactional
        </p>
        <p className="mt-2 text-sm text-slate-700 sm:text-base">
          A high‑margin SaaS subscription layered with service commissions and
          high‑intent lead deals on major projects.
        </p>
      </div>
    </div>
  );
}

function RevenueStreamsSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
        Three revenue streams
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        <RevenueCard
          label="01 · Subscription (SaaS)"
          body="Access to the Home Manager, lifecycle planning, and priority scheduling."
        />
        <RevenueCard
          label="02 · Service commission"
          tag="30–40% take rate"
          body="Commission on every coordinated job, tuned for U.S. homeowners."
        />
        <RevenueCard
          label="03 · High‑intent leads"
          body="Verified, warm leads for big‑ticket contractors (roofing, HVAC, remodels)."
        />
      </div>
    </div>
  );
}

function RevenueCard({
  label,
  body,
  tag,
}: {
  label: string;
  body: string;
  tag?: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/95 p-4 text-sm shadow-sm shadow-slate-900/10">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <p className="mt-2 text-[0.85rem] leading-relaxed text-slate-600">
          {body}
        </p>
      </div>
      {tag && (
        <p className="mt-3 inline-flex items-center self-start rounded-full bg-slate-900 px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-slate-50">
          {tag}
        </p>
      )}
    </div>
  );
}

function RoadmapSlide() {
  return (
    <div className="flex h-full flex-col justify-center gap-6">
      <h2 className="font-display text-3xl text-center text-slate-900 sm:text-4xl">
        Roadmap
      </h2>
      <div className="relative mt-2">
        <div className="absolute left-4 right-4 top-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
        <div className="relative grid gap-4 md:grid-cols-3">
          <RoadmapCard
            step="01"
            title="Phase 1 — MVP"
            meta="By Christmas"
            bullets={[
              "Urban Company–style interface for the U.S.",
              "Asset entry + financial visualization.",
              "Manual concierge for booking.",
            ]}
          />
          <RoadmapCard
            step="02"
            title="Phase 2 — Pilot"
            meta="Local launch"
            bullets={[
              "Launch in markets with trusted networks.",
              "Deep integration with select partners.",
            ]}
          />
          <RoadmapCard
            step="03"
            title="Phase 3 — Scale"
            meta="National expansion"
            bullets={[
              "AI-driven asset ingestion.",
              "Wide contractor marketplace.",
              "Automated planning + alerts.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function RoadmapCard({
  step,
  title,
  meta,
  bullets,
}: {
  step: string;
  title: string;
  meta: string;
  bullets: string[];
}) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#EBE9FF] to-[#DAD7FF] p-4 text-sm shadow-md shadow-slate-900/10">
      <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[0.7rem] font-medium text-white shadow-md shadow-slate-900/50">
        {step}
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-600">
        {meta}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-900">{title}</p>
      <ul className="mt-2 space-y-1.5 text-[0.8rem] text-slate-700">
        {bullets.map((b) => (
          <li key={b}>· {b}</li>
        ))}
      </ul>
    </div>
  );
}

function CtaSlide() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
      <div className="space-y-4">
        <h2 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          Bring peace of mind to homeownership.
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          We&apos;re assembling the first managed homeownership platform.
          Join the early access list to help shape the product and get
          white‑glove onboarding.
        </p>
      </div>

      <form
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="you@example.com"
          className="h-11 flex-1 rounded-full border border-slate-200 bg-white/90 px-4 text-sm text-slate-900 shadow-sm shadow-slate-900/10 outline-none ring-0 transition focus:border-sky-400 focus:ring-[3px] focus:ring-sky-100"
        />
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white shadow-lg shadow-black/40 transition hover:-translate-y-0.5 hover:bg-black/95 hover:shadow-xl"
        >
          Get early access
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="text-[0.75rem] text-slate-500">
        No spam, ever. We&apos;ll reach out only for early access and launch
        updates.
      </p>
    </div>
  );
}


