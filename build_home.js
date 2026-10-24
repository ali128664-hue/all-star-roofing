const fs = require('fs');
const path = require('path');
const { getHeader, getFooter } = require('./layout.js');

function buildHomePage() {
  const html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>All Star Roofing of Garland | 5-Star Roof Replacement & Repair · Garland TX</title>
  <meta name="description" content="Garland's top-rated roofing contractor. 200+ five-star Google reviews. Marvin Rodriguez and his crew replace most roofs in one day, handle insurance claims, and leave your yard spotless.">
  <meta property="og:title" content="All Star Roofing of Garland | 5-Star Roofing Contractor">
  <meta property="og:description" content="Over 200 Google reviews. Every single one, five stars. Same-day replacement, honest inspections, zero nail cleanup.">
  <meta property="og:image" content="images/og-cover.jpg">
  <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brandNavy: '#0F172A',
            brandRed: '#DC2626',
            brandGold: '#F59E0B',
          },
          fontFamily: {
            heading: ['"Plus Jakarta Sans"', 'sans-serif'],
            body: ['"Inter"', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="bg-white text-slate-800 font-body antialiased selection:bg-red-600 selection:text-white pb-16 lg:pb-0">

  ${getHeader('.', 'home')}

  <!-- ============================================================ -->
  <!-- 3. BRIGHT DAYLIGHT ARCHITECTURAL HERO SECTION                 -->
  <!-- ============================================================ -->
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden py-12 lg:py-18 border-b border-slate-200">
    <!-- Sunlit Texas Home Photography Background with Daylight Fade -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" alt="Sunlit Texas Brick Home Roof" class="w-full h-full object-cover object-right opacity-35">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Left Column: High-Contrast Editorial Copy on Bright Canvas (7 Cols) -->
        <div class="lg:col-span-7 space-y-6">
          <!-- Warm Amber/Gold Trust Pill -->
          <div class="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <span class="text-amber-500 text-sm">★</span>
            <span>30+ Years · Owner-Operated · Garland, Texas</span>
          </div>

          <!-- Headline -->
          <h1 class="font-heading font-black tracking-tight leading-[1.06]">
            <span class="text-4xl sm:text-5xl lg:text-[56px] text-[#0F172A] block">
              Garland's 5-Star
            </span>
            <span class="text-4xl sm:text-5xl lg:text-[56px] text-[#DC2626] block relative">
              Roofing Contractor
              <!-- Subtle Gold Roof Pitch SVG Underline -->
              <svg class="w-48 h-3 text-amber-500 mt-1" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L100 2L198 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </span>
          </h1>

          <!-- Lead Paragraph -->
          <p class="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            Over 200 Google reviews. <strong class="text-slate-900 font-bold">Every single one, five stars.</strong> Marvin Rodriguez and his crew replace most roofs in one day, handle the insurance paperwork, and leave your yard so clean you won't find a nail.
          </p>

          <!-- 4 Trust Badges (2x2 Grid of Elevated White Cards) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 max-w-xl">
            <!-- Badge 1 -->
            <div class="bg-white border border-slate-200 shadow-sm rounded-xl p-4 flex items-center gap-3.5 hover:border-red-300 transition-colors">
              <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center font-black text-sm shrink-0 border border-amber-200">
                ★
              </div>
              <div>
                <div class="font-extrabold text-slate-900 text-sm">5.0 · 200+ Google Reviews</div>
                <div class="text-xs text-slate-500 font-medium">Verified 5-Star Rating</div>
              </div>
            </div>

            <!-- Badge 2 -->
            <div class="bg-white border border-slate-200 shadow-sm rounded-xl p-4 flex items-center gap-3.5 hover:border-red-300 transition-colors">
              <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm shrink-0 border border-emerald-200">
                ✓
              </div>
              <div>
                <div class="font-extrabold text-slate-900 text-sm">Same-Day Replacement</div>
                <div class="text-xs text-slate-500 font-medium">Torn off & installed in 1 day</div>
              </div>
            </div>

            <!-- Badge 3 -->
            <div class="bg-white border border-slate-200 shadow-sm rounded-xl p-4 flex items-center gap-3.5 hover:border-red-300 transition-colors">
              <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm shrink-0 border border-blue-200">
                🛡️
              </div>
              <div>
                <div class="font-extrabold text-slate-900 text-sm">Insurance Claim Help</div>
                <div class="text-xs text-slate-500 font-medium">Full adjuster walkthrough</div>
              </div>
            </div>

            <!-- Badge 4 -->
            <div class="bg-white border border-slate-200 shadow-sm rounded-xl p-4 flex items-center gap-3.5 hover:border-red-300 transition-colors">
              <div class="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-black text-sm shrink-0 border border-red-200">
                🔍
              </div>
              <div>
                <div class="font-extrabold text-slate-900 text-sm">Free Inspections</div>
                <div class="text-xs text-slate-500 font-medium">Honest photo report included</div>
              </div>
            </div>
          </div>

          <!-- Featured Live Photo Strip + Direct Phone Action -->
          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div class="flex items-center -space-x-2 shrink-0">
              <img src="images/roof-replacement-complete-yard-sign-1.jpg" alt="Garland Job 1" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
              <img src="images/underlayment-install-crew-1.jpg" alt="Garland Job 2" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
              <img src="images/completed-roof-brick-home.jpg" alt="Garland Job 3" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm">
            </div>
            <div>
              <a href="tel:2146818863" class="font-black text-slate-950 hover:text-red-600 text-lg sm:text-xl flex items-center gap-2 transition-colors">
                <span>☎ (214) 681-8863</span>
                <span class="text-xs font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">Call Marvin</span>
              </a>
              <p class="text-xs text-slate-500 font-medium">
                Open every day, 6 AM – 10 PM. Talk to Marvin, not a call center.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: "The Free All Star Roof Checkup" White Card (5 Cols) -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/90 overflow-hidden">
            <!-- Card Top Banner -->
            <div class="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-5">
              <span class="text-[11px] font-extrabold tracking-widest uppercase text-red-100">
                ZERO-PRESSURE EVALUATION
              </span>
              <h3 class="text-2xl font-black text-white mt-0.5">
                The Free All Star Roof Checkup
              </h3>
            </div>

            <!-- Card Body -->
            <div class="p-7 sm:p-8">
              <!-- Warm Mint/Emerald Guarantee Box -->
              <div class="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 mb-6 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div class="flex items-start gap-2.5">
                  <span class="text-emerald-700 font-black mt-0.5">✓</span>
                  <span>Point-by-point inspection with photos — you keep the photo report either way</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="text-emerald-700 font-black mt-0.5">✓</span>
                  <span>An honest verdict — even if it's "your roof is fine"</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="text-emerald-700 font-black mt-0.5">✓</span>
                  <span>Insurance-claim walkthrough: what's covered, what to expect</span>
                </div>
                <div class="flex items-start gap-2.5">
                  <span class="text-emerald-700 font-black mt-0.5">✓</span>
                  <span>No obligation. No door-knocker pressure.</span>
                </div>
              </div>

              <!-- Form -->
              <form id="lead-form" class="space-y-3.5" action="free-roof-inspection.html" method="GET">
                <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off">
                
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Name *</label>
                  <input type="text" name="name" required placeholder="John Homeowner" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3 text-sm outline-none transition-all">
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="(214) 000-0000" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3 text-sm outline-none transition-all">
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your City</label>
                    <select name="city" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3 text-sm outline-none transition-all font-medium text-slate-700">
                      <option value="Garland">Garland (HQ)</option>
                      <option value="Rowlett">Rowlett</option>
                      <option value="Mesquite">Mesquite</option>
                      <option value="Richardson">Richardson</option>
                      <option value="Sachse">Sachse</option>
                      <option value="Wylie">Wylie</option>
                      <option value="Plano">Plano</option>
                      <option value="Allen">Allen</option>
                      <option value="Other">Other North Texas</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">What's going on with your roof?</label>
                  <textarea name="notes" rows="2" placeholder="e.g. Recent hail storm, leak around chimney, or aged shingles..." class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-2.5 text-sm outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black rounded-xl shadow-lg shadow-red-600/25 text-base transition-all">
                  Request My Free Inspection →
                </button>
                <p class="text-[11px] text-center text-slate-400">
                  🔒 Your info is private. Marvin personally contacts you. Zero sales reps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.1. BRIGHT AUTHORITY STATS RIBBON (100% LIGHT THEME)         -->
  <!-- ============================================================ -->
  <section class="bg-white border-y border-slate-200 py-8 shadow-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-200">
        <div class="px-2">
          <div class="text-3xl lg:text-4xl font-heading font-black text-amber-500">5.0 ★★★★★</div>
          <div class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">205+ Google Reviews</div>
        </div>
        <div class="px-2">
          <div class="text-3xl lg:text-4xl font-heading font-black text-[#0F172A]">30+ Years</div>
          <div class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Owner-Operated in Garland</div>
        </div>
        <div class="px-2">
          <div class="text-3xl lg:text-4xl font-heading font-black text-emerald-600">1 Single Day</div>
          <div class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Average Roof Replacement</div>
        </div>
        <div class="px-2">
          <div class="text-3xl lg:text-4xl font-heading font-black text-[#DC2626]">0 Complaints</div>
          <div class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">Spotless BBB Record Since 2019</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.2. "WHAT WE DO" PHOTO-RICH BENTO GRID (BRIGHT THEME)       -->
  <!-- ============================================================ -->
  <section class="py-24 bg-slate-50 border-b border-slate-200" id="services">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          WHAT WE DO
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight">
          Residential Roofing, Done Right
        </h2>
        <p class="text-slate-600 text-lg mt-3 leading-relaxed font-normal">
          One crew, one owner, thirty years of Texas roofs. No subcontracting your job to strangers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1: Roof Replacement -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-md card-light-lift overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" alt="Roof Replacement in Garland TX" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-black text-red-600 shadow-sm border border-slate-200">
                ★ 1-Day Completion
              </div>
            </div>
            <div class="p-7">
              <h3 class="font-heading font-black text-[#0F172A] text-xl mb-2">
                Roof Replacement
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Full tear-off and new asphalt shingle roof — usually installed and cleaned up in a single day by our large, experienced crew.
              </p>
            </div>
          </div>
          <div class="p-7 pt-0">
            <a href="roof-replacement.html" class="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm hover:gap-3 transition-all">
              <span>Explore Service Details</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service 2: Roof Repair -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-md card-light-lift overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80" alt="Roof Repair in Garland TX" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-black text-emerald-700 shadow-sm border border-slate-200">
                ✓ No Overselling Pledge
              </div>
            </div>
            <div class="p-7">
              <h3 class="font-heading font-black text-[#0F172A] text-xl mb-2">
                Roof Repair
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Leaks, missing shingles, flashing, vents, decking. Honest repairs — if it doesn't need replacing, we'll tell you.
              </p>
            </div>
          </div>
          <div class="p-7 pt-0">
            <a href="roof-repair.html" class="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm hover:gap-3 transition-all">
              <span>Explore Service Details</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service 3: Hail & Storm Damage -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-md card-light-lift overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80" alt="Hail & Storm Damage in Garland TX" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-black text-blue-700 shadow-sm border border-slate-200">
                ⛈️ Storm Alert
              </div>
            </div>
            <div class="p-7">
              <h3 class="font-heading font-black text-[#0F172A] text-xl mb-2">
                Hail & Storm Damage
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                North Texas hail is brutal. We inspect, document the damage, and restore your roof fast — before the next storm hits.
              </p>
            </div>
          </div>
          <div class="p-7 pt-0">
            <a href="storm-and-hail-damage.html" class="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm hover:gap-3 transition-all">
              <span>Explore Service Details</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service 4: Insurance Claim Help -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-md card-light-lift overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80" alt="Insurance Claim Help in Garland TX" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-black text-purple-700 shadow-sm border border-slate-200">
                📋 We Meet The Adjuster
              </div>
            </div>
            <div class="p-7">
              <h3 class="font-heading font-black text-[#0F172A] text-xl mb-2">
                Insurance Claim Help
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                The part homeowners dread, and the thing our reviews praise most. We document everything and deal directly with your adjuster.
              </p>
            </div>
          </div>
          <div class="p-7 pt-0">
            <a href="storm-and-hail-damage.html#insurance" class="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm hover:gap-3 transition-all">
              <span>Explore Service Details</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service 5: Free Inspections -->
        <div class="bg-white rounded-2xl border border-red-200 shadow-md card-light-lift overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1584463699042-3079b76786a3?auto=format&fit=crop&w=800&q=80" alt="Free Roof Inspections" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full text-xs font-black text-white shadow-sm">
                🔍 100% Free · No Obligation
              </div>
            </div>
            <div class="p-7">
              <h3 class="font-heading font-black text-[#0F172A] text-xl mb-2">
                Free Inspections
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                A straight answer about the condition of your roof, at no cost. Several reviewers chose us because we didn't oversell.
              </p>
            </div>
          </div>
          <div class="p-7 pt-0">
            <a href="free-roof-inspection.html" class="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm hover:gap-3 transition-all">
              <span>Explore Service Details</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- Service 6: Gutters & Skylights -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-md card-light-lift overflow-hidden flex flex-col justify-between group">
          <div>
            <div class="h-52 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Gutters & Skylights in Garland TX" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-black text-emerald-700 shadow-sm border border-slate-200">
                🌧️ Extruded On-Site
              </div>
            </div>
            <div class="p-7">
              <h3 class="font-heading font-black text-[#0F172A] text-xl mb-2">
                Gutters & Skylights
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Seamless gutter installation and repair, plus skylight installation — often finished within hours, not days.
              </p>
            </div>
          </div>
          <div class="p-7 pt-0">
            <a href="gutters-and-skylights.html" class="inline-flex items-center gap-2 text-red-600 font-extrabold text-sm hover:gap-3 transition-all">
              <span>Explore Service Details</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.3. "WHY ALL STAR" BRIGHT SPLIT LAYOUT (NO DARK SECTION!)   -->
  <!-- ============================================================ -->
  <section class="py-24 bg-white border-y border-slate-200" id="why">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Left: Marvin's Guarantee & 5 Pillars -->
        <div class="lg:col-span-6 space-y-6">
          <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            WHY ALL STAR
          </span>
          <h2 class="font-heading font-black text-3xl sm:text-5xl text-[#0F172A] tracking-tight leading-tight">
            The Owner Shows Up.<br>
            <span class="text-red-600">Every Single Job.</span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Most roofing companies send a salesman, then a subcontractor you've never met. At All Star Roofing, <strong class="text-slate-900 font-bold">Marvin Rodriguez inspects your roof himself, quotes it himself, runs his own crew, and comes back after the job to walk it with you.</strong>
          </p>

          <div class="space-y-3.5 pt-2">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3.5">
              <span class="text-amber-500 text-lg font-black shrink-0 mt-0.5">★</span>
              <div>
                <h4 class="font-bold text-slate-900 text-sm">30+ years on Texas roofs</h4>
                <p class="text-xs text-slate-600 mt-0.5">Serving Garland-area homeowners for three decades — with repeat customers going back ten years and more.</p>
              </div>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3.5">
              <span class="text-amber-500 text-lg font-black shrink-0 mt-0.5">★</span>
              <div>
                <h4 class="font-bold text-slate-900 text-sm">Most roofs done in one day</h4>
                <p class="text-xs text-slate-600 mt-0.5">A large, experienced crew means tear-off, install, and cleanup between sunrise and dinner.</p>
              </div>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3.5">
              <span class="text-amber-500 text-lg font-black shrink-0 mt-0.5">★</span>
              <div>
                <h4 class="font-bold text-slate-900 text-sm">Insurance handled for you</h4>
                <p class="text-xs text-slate-600 mt-0.5">Hail claim? We document, meet the adjuster, and walk you through every step.</p>
              </div>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3.5">
              <span class="text-amber-500 text-lg font-black shrink-0 mt-0.5">★</span>
              <div>
                <h4 class="font-bold text-slate-900 text-sm">"Not a single nail" cleanup</h4>
                <p class="text-xs text-slate-600 mt-0.5">Magnetic sweeps of your yard and driveway. It's the detail reviewers can't stop mentioning.</p>
              </div>
            </div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3.5">
              <span class="text-amber-500 text-lg font-black shrink-0 mt-0.5">★</span>
              <div>
                <h4 class="font-bold text-slate-900 text-sm">Honest inspections</h4>
                <p class="text-xs text-slate-600 mt-0.5">If your roof doesn't need replacing, we say so. That honesty is why we have a 5.0 rating.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Bright Comparison Table Card -->
        <div class="lg:col-span-6">
          <div class="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 class="font-heading font-black text-2xl text-slate-900 mb-6 text-center">
              Contractor Reality Check
            </h3>
            <div class="space-y-4">
              <!-- Row 1 -->
              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 gap-4">
                <div>
                  <div class="text-[11px] font-black text-red-600 uppercase">ALL STAR ROOFING</div>
                  <div class="text-sm font-black text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <span class="text-emerald-600 font-bold">✓</span> Owner On-Site (Marvin)
                  </div>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase">DOOR-KNOCKERS</div>
                  <div class="text-sm font-semibold text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <span class="text-red-500 font-bold">✕</span> Commissioned Salesman
                  </div>
                </div>
              </div>

              <!-- Row 2 -->
              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 gap-4">
                <div>
                  <div class="text-[11px] font-black text-red-600 uppercase">ALL STAR ROOFING</div>
                  <div class="text-sm font-black text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <span class="text-emerald-600 font-bold">✓</span> Large In-House Crew
                  </div>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase">DOOR-KNOCKERS</div>
                  <div class="text-sm font-semibold text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <span class="text-red-500 font-bold">✕</span> Subcontracted Strangers
                  </div>
                </div>
              </div>

              <!-- Row 3 -->
              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 gap-4">
                <div>
                  <div class="text-[11px] font-black text-red-600 uppercase">ALL STAR ROOFING</div>
                  <div class="text-sm font-black text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <span class="text-emerald-600 font-bold">✓</span> Done in 1 Day (By Dinner)
                  </div>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase">DOOR-KNOCKERS</div>
                  <div class="text-sm font-semibold text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <span class="text-red-500 font-bold">✕</span> 3 to 5 Days of Noise
                  </div>
                </div>
              </div>

              <!-- Row 4 -->
              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 gap-4">
                <div>
                  <div class="text-[11px] font-black text-red-600 uppercase">ALL STAR ROOFING</div>
                  <div class="text-sm font-black text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <span class="text-emerald-600 font-bold">✓</span> Double Magnetic Sweep
                  </div>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase">DOOR-KNOCKERS</div>
                  <div class="text-sm font-semibold text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <span class="text-red-500 font-bold">✕</span> Nails in Grass & Tires
                  </div>
                </div>
              </div>

              <!-- Row 5 -->
              <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 gap-4">
                <div>
                  <div class="text-[11px] font-black text-red-600 uppercase">ALL STAR ROOFING</div>
                  <div class="text-sm font-black text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <span class="text-emerald-600 font-bold">✓</span> 30+ Yrs Garland · 5.0★
                  </div>
                </div>
                <div>
                  <div class="text-[11px] font-bold text-slate-400 uppercase">DOOR-KNOCKERS</div>
                  <div class="text-sm font-semibold text-slate-500 mt-0.5 flex items-center gap-1.5">
                    <span class="text-red-500 font-bold">✕</span> Out-of-State Plates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.4. "RECENT JOBS" BRIGHT PORTFOLIO SHOWCASE                 -->
  <!-- ============================================================ -->
  <section class="py-24 bg-slate-50 border-b border-slate-200" id="portfolio">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            RECENT JOBS
          </span>
          <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight">
            Our Work Around Garland
          </h2>
          <p class="text-slate-600 text-lg mt-2">
            Real roofs, real North Texas brick homes, photographed on site.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <span class="text-xs text-slate-600 font-bold bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
            Click any photo to zoom full resolution
          </span>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Photo 1 -->
        <div class="gallery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-md card-light-lift cursor-pointer" data-caption="Completed replacement — sign in the yard" data-full="images/roof-replacement-complete-yard-sign-1.jpg">
          <img src="images/roof-replacement-complete-yard-sign-1.jpg" alt="Completed asphalt shingle roof replacement on a brick home in Garland, TX with All Star" class="w-full h-60 object-cover rounded-xl">
          <div class="p-3">
            <span class="text-[10px] font-black uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">Garland, TX · Verified Job</span>
            <h4 class="font-extrabold text-slate-900 text-sm mt-2">Completed replacement — sign in the yard</h4>
            <p class="text-xs text-slate-500 mt-1">Completed asphalt shingle roof replacement on a brick home in Garland, TX with All Star</p>
          </div>
        </div>

        <!-- Photo 2 -->
        <div class="gallery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-md card-light-lift cursor-pointer" data-caption="Dry-in underway — crew on the roof" data-full="images/underlayment-install-crew-1.jpg">
          <img src="images/underlayment-install-crew-1.jpg" alt="All Star Roofing crew installing synthetic underlayment on a two-story brick home" class="w-full h-60 object-cover rounded-xl">
          <div class="p-3">
            <span class="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Garland, TX · Verified Job</span>
            <h4 class="font-extrabold text-slate-900 text-sm mt-2">Dry-in underway — crew on the roof</h4>
            <p class="text-xs text-slate-500 mt-1">All Star Roofing crew installing synthetic underlayment on a two-story brick home</p>
          </div>
        </div>

        <!-- Photo 3 -->
        <div class="gallery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-md card-light-lift cursor-pointer" data-caption="Tear-off to dry-in, same morning" data-full="images/underlayment-install-progress-2.jpg">
          <img src="images/underlayment-install-progress-2.jpg" alt="Roof deck covered in underlayment mid-replacement" class="w-full h-60 object-cover rounded-xl">
          <div class="p-3">
            <span class="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">Garland, TX · Verified Job</span>
            <h4 class="font-extrabold text-slate-900 text-sm mt-2">Tear-off to dry-in, same morning</h4>
            <p class="text-xs text-slate-500 mt-1">Roof deck covered in underlayment mid-replacement</p>
          </div>
        </div>

        <!-- Photo 4 -->
        <div class="gallery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-md card-light-lift cursor-pointer" data-caption="Another one done by dinner" data-full="images/roof-replacement-complete-yard-sign-2.jpg">
          <img src="images/roof-replacement-complete-yard-sign-2.jpg" alt="Finished shingle roof by All Star Roofing Of Garland" class="w-full h-60 object-cover rounded-xl">
          <div class="p-3">
            <span class="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Garland, TX · Verified Job</span>
            <h4 class="font-extrabold text-slate-900 text-sm mt-2">Another one done by dinner</h4>
            <p class="text-xs text-slate-500 mt-1">Finished shingle roof by All Star Roofing Of Garland</p>
          </div>
        </div>

        <!-- Photo 5 -->
        <div class="gallery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-md card-light-lift cursor-pointer" data-caption="New shingles, updated vents" data-full="images/shingle-roof-vents-detail.jpg">
          <img src="images/shingle-roof-vents-detail.jpg" alt="Close-up of new shingles and updated roof vents" class="w-full h-60 object-cover rounded-xl">
          <div class="p-3">
            <span class="text-[10px] font-black uppercase text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">Garland, TX · Verified Job</span>
            <h4 class="font-extrabold text-slate-900 text-sm mt-2">New shingles, updated vents</h4>
            <p class="text-xs text-slate-500 mt-1">Close-up of new shingles and updated roof vents</p>
          </div>
        </div>

        <!-- Photo 6 -->
        <div class="gallery-card bg-white rounded-2xl p-3 border border-slate-200 shadow-md card-light-lift cursor-pointer" data-caption="Clean lines on a Garland brick home" data-full="images/completed-roof-brick-home.jpg">
          <img src="images/completed-roof-brick-home.jpg" alt="Completed roof on a brick home in the Garland area" class="w-full h-60 object-cover rounded-xl">
          <div class="p-3">
            <span class="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">Garland, TX · Verified Job</span>
            <h4 class="font-extrabold text-slate-900 text-sm mt-2">Clean lines on a Garland brick home</h4>
            <p class="text-xs text-slate-500 mt-1">Completed roof on a brick home in the Garland area</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.5. "205 GOOGLE REVIEWS" (BRIGHT PROFILE HEADER + CARDS)    -->
  <!-- ============================================================ -->
  <section class="py-24 bg-white border-b border-slate-200" id="reviews">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Google Business Summary Header in Daylight Theme -->
      <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-wrap items-center justify-between gap-6 mb-16">
        <div class="flex items-center gap-4">
          <!-- Google Official Multi-Color "G" Icon -->
          <div class="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center font-black text-2xl shrink-0">
            <span class="text-blue-500">G</span>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-slate-950 font-black text-2xl">5.0</span>
              <span class="text-amber-500 text-lg">★★★★★</span>
              <span class="text-xs text-slate-500 font-bold">(205+ Reviews)</span>
            </div>
            <div class="text-xs text-slate-600 font-semibold uppercase tracking-wider mt-0.5">
              Verified on Google · Zero BBB Complaints on file since 2019
            </div>
          </div>
        </div>
        <a href="reviews.html" class="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-black uppercase tracking-wider px-6 py-3 rounded-xl shadow-xs transition-colors">
          Read All 205 Reviews →
        </a>
      </div>

      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          205 Google Reviews. Zero Complaints.
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Review 1 -->
        <div class="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6">
              "They have a big crew so it was done in one day… not a single nail was found. Marvin is very professional and honest."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">GR</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Google reviewer</div>
              <div class="text-xs text-slate-400">via Google Reviews</div>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6">
              "Marvin and his team did an excellent job replacing my roof. They arrived on time and finished the job the same day. His team protected my landscaping and they thoroughly cleaned up."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">WJ</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">William J.</div>
              <div class="text-xs text-slate-400">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6">
              "He gave me information about the insurance process that I was completely unsure of. I live overseas and he managed to take care of everything from start to end!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">RT</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Rosita T.</div>
              <div class="text-xs text-slate-400">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 4 -->
        <div class="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6">
              "Marvin has replaced 2 roofs on 2 different homes in a span of 10 years for me. Cleanup was spotless, and the roofs always looked great! I will use him again in a heartbeat!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs">AG</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Armando G.</div>
              <div class="text-xs text-slate-400">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 5 -->
        <div class="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6">
              "Very aggressive roofers came to our door and made big commitments! It was refreshing to meet Mr. Marvin Rodriguez. He was thorough with his inspection and recommended only the needed repairs."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs">GJ</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Gwen J.</div>
              <div class="text-xs text-slate-400">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 6 -->
        <div class="bg-white rounded-2xl p-7 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6">
              "Replaced our entire roof in just one day, with updated vents. Worked with our insurance. Great job, 5-year guarantee."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">KS</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Kevin S.</div>
              <div class="text-xs text-slate-400">Yelp, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.6. "STORM JUST HIT?" BRIGHT AMBER/CRIMSON CALLOUT BANNER   -->
  <!-- ============================================================ -->
  <section class="py-20 bg-white border-b border-slate-200" id="storm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border-2 border-red-200 rounded-3xl p-10 lg:p-14 text-slate-900 shadow-lg">
        <div class="max-w-3xl space-y-6">
          <span class="text-red-700 font-extrabold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-red-200 shadow-xs">
            North Texas Hail Season Alert
          </span>
          <h2 class="font-heading font-black text-3xl sm:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Storm Just Hit?
          </h2>
          <p class="text-lg text-slate-700 leading-relaxed font-normal">
            Don't sign with the first door-knocker. Get a free, honest inspection from a local roofer your neighbors already trust.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="tel:2146818863" class="btn-red-gradient text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-3">
              <span>☎ Call (214) 681-8863</span>
            </a>
            <span class="text-sm text-slate-600 font-bold text-center sm:text-left">
              Open every day 6 AM – 10 PM
            </span>
          </div>

          <div class="pt-6 grid sm:grid-cols-3 gap-4 border-t border-red-200 mt-6">
            <div class="bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <div class="text-amber-500 font-bold text-sm">★ Owner Inspects</div>
              <div class="text-xs text-slate-600 mt-0.5">Marvin — not a salesman on commission.</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <div class="text-emerald-600 font-bold text-sm">✓ Honest Verdict</div>
              <div class="text-xs text-slate-600 mt-0.5">If you don't need work, we'll tell you straight.</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-red-100 shadow-xs">
              <div class="text-blue-600 font-bold text-sm">🧲 Spotless Cleanup</div>
              <div class="text-xs text-slate-600 mt-0.5">Magnetic sweep — not a single nail left.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.7. "WHERE WE WORK" & LIVE ZIP CHECKER (BRIGHT THEME)       -->
  <!-- ============================================================ -->
  <section class="py-24 bg-slate-50 border-b border-slate-200" id="area">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          WHERE WE WORK
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight">
          Serving Garland & Northeast Dallas Suburbs
        </h2>
        <p class="text-slate-600 text-lg mt-3 leading-relaxed font-normal">
          Based right here in Garland — not a storm-chasing outfit with out-of-state plates. We answer the phone year-round, long after the storm crews leave town.
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-10 items-center">
        <!-- Left: Interactive City Cards -->
        <div class="lg:col-span-7 space-y-4">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <a href="service-areas.html#garland" class="bg-white border-2 border-red-600 text-red-600 font-black text-xs sm:text-sm p-4 rounded-xl text-center shadow-xs hover:bg-red-50 transition-colors">
              ★ Garland (HQ)
            </a>
            <a href="service-areas/rowlett.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Rowlett, TX
            </a>
            <a href="service-areas/mesquite.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Mesquite, TX
            </a>
            <a href="service-areas/richardson.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Richardson, TX
            </a>
            <a href="service-areas/sachse.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Sachse, TX
            </a>
            <a href="service-areas/wylie.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Wylie, TX
            </a>
            <a href="service-areas/plano.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Plano, TX
            </a>
            <a href="service-areas/allen.html" class="bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm p-4 rounded-xl text-center hover:border-red-600 transition-colors shadow-xs">
              Allen, TX
            </a>
          </div>

          <div class="bg-white p-6 rounded-2xl border border-slate-200 flex items-center justify-between shadow-xs">
            <div>
              <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">Extended DFW Metro Coverage</div>
              <div class="text-sm font-extrabold text-slate-800 mt-0.5">Dallas · Carrollton · Frisco · McKinney</div>
            </div>
            <a href="service-areas.html" class="text-red-600 font-bold text-xs hover:underline">View Map Hub →</a>
          </div>
        </div>

        <!-- Right: Working ZIP Checker Widget Card -->
        <div class="lg:col-span-5">
          <div class="bg-white rounded-2xl p-7 sm:p-9 shadow-xl border border-slate-200">
            <h3 class="font-heading font-black text-[#0F172A] text-2xl mb-1">
              Do we cover your address?
            </h3>
            <p class="text-xs text-slate-500 mb-6">
              Instant answer. Nothing is saved or tracked — your location never leaves your browser.
            </p>

            <div class="space-y-3">
              <div class="flex gap-2">
                <input type="text" id="zip-input" placeholder="Enter 5-digit ZIP (e.g. 75040)" maxlength="5" class="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none">
                <button id="zip-check-btn" class="bg-[#0F172A] hover:bg-slate-800 text-white font-extrabold text-sm px-6 py-3 rounded-xl transition-colors shrink-0">
                  Check
                </button>
              </div>
              <button id="geo-btn" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors">
                <span>📍</span>
                <span>Use my location</span>
              </button>
            </div>
            <div id="zip-result" class="mt-4 hidden"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.8. "QUESTIONS — STRAIGHT ANSWERS" (ACCORDION FAQ)         -->
  <!-- ============================================================ -->
  <section class="py-24 bg-white" id="faq">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          QUESTIONS
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl lg:text-5xl mt-3 tracking-tight">
          Straight Answers
        </h2>
        <p class="text-slate-600 mt-2">Honest advice from 30+ years of Texas roofing experience.</p>
      </div>

      <div class="space-y-4">
        <!-- FAQ 1 -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          <button class="accordion-header w-full px-6 py-5 text-left font-heading font-extrabold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4">
            <span>Do you really replace a roof in one day?</span>
            <span class="accordion-chevron text-slate-400 text-xl font-bold transition-transform duration-300">▾</span>
          </button>
          <div class="accordion-body px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
            <div class="py-4">
              In most cases, yes. We run a large, experienced crew, so a typical residential asphalt-shingle replacement is torn off, installed, and cleaned up the same day. Larger or complex roofs can take longer — you'll get an honest timeline during your free inspection.
            </div>
          </div>
        </div>

        <!-- FAQ 2 -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          <button class="accordion-header w-full px-6 py-5 text-left font-heading font-extrabold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4">
            <span>Will you help with my insurance claim after hail or storm damage?</span>
            <span class="accordion-chevron text-slate-400 text-xl font-bold transition-transform duration-300">▾</span>
          </button>
          <div class="accordion-body px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
            <div class="py-4">
              Yes. It's the thing customers mention most in our reviews. We document the damage, explain what your policy covers, and work directly with your adjuster so you only pay for what insurance doesn't cover.
            </div>
          </div>
        </div>

        <!-- FAQ 3 -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          <button class="accordion-header w-full px-6 py-5 text-left font-heading font-extrabold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4">
            <span>Is the roof inspection really free?</span>
            <span class="accordion-chevron text-slate-400 text-xl font-bold transition-transform duration-300">▾</span>
          </button>
          <div class="accordion-body px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
            <div class="py-4">
              Yes — free, no obligation. We tell you honestly whether you need a repair, a full replacement, or nothing at all. Several reviews mention we recommended only the repairs that were actually needed.
            </div>
          </div>
        </div>

        <!-- FAQ 4 -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          <button class="accordion-header w-full px-6 py-5 text-left font-heading font-extrabold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4">
            <span>What areas do you serve?</span>
            <span class="accordion-chevron text-slate-400 text-xl font-bold transition-transform duration-300">▾</span>
          </button>
          <div class="accordion-body px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
            <div class="py-4">
              We're based in Garland and serve the surrounding Dallas-area communities including Rowlett, Mesquite, Richardson, Sachse, Wylie, Plano, and Allen.
            </div>
          </div>
        </div>

        <!-- FAQ 5 -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          <button class="accordion-header w-full px-6 py-5 text-left font-heading font-extrabold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4">
            <span>How long have you been in business?</span>
            <span class="accordion-chevron text-slate-400 text-xl font-bold transition-transform duration-300">▾</span>
          </button>
          <div class="accordion-body px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
            <div class="py-4">
              All Star Roofing is owner-operated by Marvin Rodriguez, with over 30 years of roofing experience serving Garland-area homeowners — and a perfect 5.0-star Google rating across 200+ reviews to show for it.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================ -->
  <!-- 4.9. PRE-FOOTER FINAL CTA (BRIGHT CRIMSON GRADIENT)          -->
  <!-- ============================================================ -->
  <section class="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-20">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
      <h2 class="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white">
        Get Your Free Roof Inspection
      </h2>
      <p class="text-base sm:text-lg text-red-100 max-w-2xl mx-auto font-normal">
        No salesmen, no pushy tactics. Just Marvin Rodriguez giving you straight answers about your Texas roof.
      </p>
      <div class="pt-2">
        <a href="tel:2146818863" class="inline-block text-white hover:text-amber-300 font-heading font-black text-4xl sm:text-6xl transition-colors tracking-tight">
          (214) 681-8863
        </a>
      </div>
      <div class="pt-2">
        <a href="free-roof-inspection.html" class="inline-flex items-center gap-2 text-white hover:underline underline-offset-8 text-base sm:text-lg font-bold">
          <span>Or request your free checkup online</span>
          <span>→</span>
        </a>
      </div>
    </div>
  </section>

  ${getFooter('.')}

  <script src="js/app.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(__dirname, 'index.html'), html);
  console.log('Rebuilt 100% Bright, Sunlit index.html with Custom SVG Emblem!');
}

buildHomePage();
