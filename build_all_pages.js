const fs = require('fs');
const path = require('path');
const { getHeader, getFooter } = require('./layout.js');

function buildHtmlShell(title, description, content, activePage, basePath = '.') {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>${title} | All Star Roofing of Garland</title>
  <meta name="description" content="${description}">
  <link rel="icon" type="image/svg+xml" href="${basePath}/images/favicon.svg">
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
  <link rel="stylesheet" href="${basePath}/css/styles.css">
</head>
<body class="bg-white text-slate-800 font-body antialiased selection:bg-red-600 selection:text-white pb-16 lg:pb-0">
  ${getHeader(basePath, activePage)}
  ${content}
  ${getFooter(basePath)}
  <script src="${basePath}/js/app.js"></script>
</body>
</html>`;
}

// -------------------------------------------------------------
// 1. ROOF REPLACEMENT PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildRoofReplacement() {
  const content = `
  <!-- Bright Sunlit Page Hero -->
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85" alt="Roof Replacement in Garland TX" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
        <a href="index.html" class="hover:text-red-600">Home</a>
        <span>/</span>
        <span class="text-slate-400">Services</span>
        <span>/</span>
        <span class="text-red-600">Roof Replacement</span>
      </div>
      <div class="max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-amber-900 shadow-xs">
          <span>★</span> Most Roofs Completed Between Sunrise & Dinner
        </div>
        <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
          Residential Roof Replacement in Garland, TX
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed font-normal">
          Full tear-off and new asphalt shingle roofing installed and cleaned up in a single day by our large, experienced crew. Built to withstand North Texas heat, torrential rain, and brutal hail.
        </p>
        <div class="pt-4 flex flex-wrap gap-4">
          <a href="tel:2146818863" class="btn-red-gradient text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2">
            <span>☎ Call (214) 681-8863</span>
          </a>
          <a href="free-roof-inspection.html" class="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl border border-slate-300 transition-all shadow-xs">
            Book Free Replacement Quote →
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Step-by-Step Process Timeline (Bright) -->
  <section class="py-24 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          THE PROCESS
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl mt-3 tracking-tight">
          From Morning Tear-Off to Spotless Yard
        </h2>
        <p class="text-slate-600 mt-2 font-normal">Zero subcontracting. Marvin Rodriguez inspects every step.</p>
      </div>

      <div class="grid md:grid-cols-5 gap-6">
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">7:00 AM</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">1. Yard Protection</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">Tarps and plywood protect flowerbeds, plants, pool, and AC equipment.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">8:30 AM</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">2. Full Tear-Off</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">Old shingles stripped down to bare decking; rotten plywood replaced.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">11:00 AM</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">3. Underlayment</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">Heavy synthetic waterproof barrier and ice/water shield along all valleys.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">1:30 PM</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">4. Shingles & Vents</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">Class 3/4 architectural shingles installed with upgraded ridge vents.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border-2 border-red-600 shadow-md">
          <div class="text-xs font-black text-red-600 uppercase mb-2">5:00 PM</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">5. Magnetic Sweep</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">Double magnetic yard sweep; Marvin personally walks the roof with you.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Comparison Table (Bright) -->
  <section class="py-24 bg-slate-50 border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="font-heading font-black text-[#0F172A] text-2xl sm:text-3xl text-center mb-10">
        All Star Roofing vs. Typical Door-Knockers
      </h2>
      <div class="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
        <table class="w-full text-left text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-800 border-b border-slate-200">
              <th class="p-4 sm:p-5 font-bold">Standard</th>
              <th class="p-4 sm:p-5 font-black text-red-600">All Star Roofing</th>
              <th class="p-4 sm:p-5 font-bold text-slate-500">Door-Knockers</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr>
              <td class="p-4 sm:p-5 font-bold text-slate-900">Who Quotes & Oversees</td>
              <td class="p-4 sm:p-5 text-emerald-700 font-extrabold">Marvin Rodriguez (Owner)</td>
              <td class="p-4 sm:p-5 text-slate-500">Salesman on commission</td>
            </tr>
            <tr>
              <td class="p-4 sm:p-5 font-bold text-slate-900">Installation Crew</td>
              <td class="p-4 sm:p-5 text-emerald-700 font-extrabold">Large In-House Experienced Crew</td>
              <td class="p-4 sm:p-5 text-slate-500">Lowest bidder subcontract</td>
            </tr>
            <tr>
              <td class="p-4 sm:p-5 font-bold text-slate-900">Completion Time</td>
              <td class="p-4 sm:p-5 text-emerald-700 font-extrabold">Usually 1 Day (Done by Dinner)</td>
              <td class="p-4 sm:p-5 text-slate-500">3 to 5 days of disruption</td>
            </tr>
            <tr>
              <td class="p-4 sm:p-5 font-bold text-slate-900">Cleanup Quality</td>
              <td class="p-4 sm:p-5 text-emerald-700 font-extrabold">Double Magnetic Nail Sweep</td>
              <td class="p-4 sm:p-5 text-slate-500">Nails left in driveway & grass</td>
            </tr>
            <tr>
              <td class="p-4 sm:p-5 font-bold text-slate-900">Reputation</td>
              <td class="p-4 sm:p-5 text-emerald-700 font-extrabold">30+ Yrs Garland · 5.0★ Google</td>
              <td class="p-4 sm:p-5 text-slate-500">Storm-chasing temporary outfit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Roof Replacement Garland TX (Same-Day Install)',
    'Full tear-off and roof replacement in Garland, TX. Usually done in 1 day by Marvin Rodriguez and his large experienced crew.',
    content,
    'roof-replacement'
  );
}

// -------------------------------------------------------------
// 2. ROOF REPAIR PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildRoofRepair() {
  const content = `
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=85" alt="Roof Repairs in Garland TX" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
        <a href="index.html" class="hover:text-red-600">Home</a>
        <span>/</span>
        <span class="text-slate-400">Services</span>
        <span>/</span>
        <span class="text-amber-600">Roof Repair</span>
      </div>
      <div class="max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-emerald-900 shadow-xs">
          <span>✓</span> Our "No Overselling" Pledge
        </div>
        <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
          Fast, Honest Roof Repairs in Garland, TX
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed font-normal">
          Leaks, missing shingles, flashing, vents, decking. Honest repairs — if your roof doesn't need replacing, we'll tell you straight.
        </p>
        <div class="pt-4 flex flex-wrap gap-4">
          <a href="tel:2146818863" class="btn-red-gradient text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2">
            <span>☎ Call for Leak Repair: (214) 681-8863</span>
          </a>
          <a href="free-roof-inspection.html" class="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl border border-slate-300 transition-all shadow-xs">
            Book Inspection Checkup →
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          COMMON REPAIRS
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl mt-3 tracking-tight">
          What We Fix Across North Texas
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl mb-3">💧</div>
          <h3 class="font-heading font-black text-slate-900 text-xl mb-2">Pipe Boot & Vent Collars</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-normal">Texas sun degrades rubber boot gaskets within 5–7 years, causing hidden attic leaks. We install premium lead or heavy-duty silicon boots.</p>
        </div>
        <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl mb-3">💨</div>
          <h3 class="font-heading font-black text-slate-900 text-xl mb-2">Wind-Blown Shingles</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-normal">High North Texas wind gusts rip tabs off older roofs. We hand-nail color-matched replacement shingles and reseal underlying courses.</p>
        </div>
        <div class="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl mb-3">🧱</div>
          <h3 class="font-heading font-black text-slate-900 text-xl mb-2">Chimney & Wall Flashing</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-normal">Loose mortar or rusted step flashing along brick siding is a frequent leak source. We cut and seal custom counter-flashing.</p>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Roof Repair Garland TX (Honest Leak Fixes)',
    'Honest roof repairs in Garland, TX. Pipe boots, flashing, missing shingles, and leaks. No overselling promise.',
    content,
    'roof-repair'
  );
}

// -------------------------------------------------------------
// 3. STORM & HAIL DAMAGE PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildStormHail() {
  const content = `
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=2000&q=85" alt="North Texas Hail Damage" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
        <a href="index.html" class="hover:text-red-600">Home</a>
        <span>/</span>
        <span class="text-slate-400">Services</span>
        <span>/</span>
        <span class="text-blue-600">Storm & Hail Damage</span>
      </div>
      <div class="max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-blue-900 shadow-xs">
          <span>⛈️</span> Full Insurance Claim Walkthrough
        </div>
        <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
          Hail & Storm Damage Restoration in Garland, TX
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed font-normal">
          North Texas hail is brutal. We inspect, document the damage with photos, deal with your insurance adjuster, and restore your roof fast — before the next storm.
        </p>
        <div class="pt-4 flex flex-wrap gap-4">
          <a href="tel:2146818863" class="btn-red-gradient text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2">
            <span>☎ Call Marvin: (214) 681-8863</span>
          </a>
          <a href="free-roof-inspection.html" class="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl border border-slate-300 transition-all shadow-xs">
            Schedule Storm Inspection →
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white border-b border-slate-200" id="insurance">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          INSURANCE CLAIM HELP
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl mt-3 tracking-tight">
          The Part Homeowners Dread, Made Simple
        </h2>
        <p class="text-slate-600 mt-2 font-normal">Walking homeowners through the insurance process is what our reviews praise most.</p>
      </div>

      <div class="grid md:grid-cols-4 gap-6">
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">Step 1</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">Photo Inspection</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">We circle hail impacts, test shingle brittleness, and document soft metal hits.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">Step 2</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">Claim Filing Data</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">We provide exact storm date and photo evidence so you can file with confidence.</p>
        </div>
        <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-xs font-black text-red-600 uppercase mb-2">Step 3</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">Meet Your Adjuster</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">Marvin personally walks the roof with your adjuster to ensure nothing is missed.</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border-2 border-red-600 shadow-md">
          <div class="text-xs font-black text-red-600 uppercase mb-2">Step 4</div>
          <h3 class="font-heading font-black text-slate-900 text-base mb-2">Restoration Done</h3>
          <p class="text-xs text-slate-600 leading-relaxed font-normal">New roof installed in 1 day; final invoices sent to release insurance depreciation.</p>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Hail & Storm Damage Roof Repair Garland TX',
    'North Texas hail damage restoration & insurance claim assistance in Garland, TX. Marvin Rodriguez meets your adjuster directly.',
    content,
    'storm-and-hail-damage'
  );
}

// -------------------------------------------------------------
// 4. GUTTERS & SKYLIGHTS PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildGuttersSkylights() {
  const content = `
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85" alt="Gutters and Skylights in Garland TX" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
        <a href="index.html" class="hover:text-red-600">Home</a>
        <span>/</span>
        <span class="text-slate-400">Services</span>
        <span>/</span>
        <span class="text-emerald-600">Gutters & Skylights</span>
      </div>
      <div class="max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-emerald-900 shadow-xs">
          <span>🌧️</span> Foundation Protection & Natural Lighting
        </div>
        <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
          Seamless Gutters & Leak-Free Skylights
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed font-normal">
          Seamless gutter installation and repair, plus skylight installation — often finished within hours, not days. Protect your Texas foundation from clay soil erosion.
        </p>
        <div class="pt-4 flex flex-wrap gap-4">
          <a href="tel:2146818863" class="btn-red-gradient text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2">
            <span>☎ Call (214) 681-8863</span>
          </a>
          <a href="free-roof-inspection.html" class="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl border border-slate-300 transition-all shadow-xs">
            Get Free Estimate →
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white border-b border-slate-200">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl mb-4">🌧️</div>
          <h3 class="font-heading font-black text-slate-950 text-2xl mb-3">Seamless Aluminum Gutters</h3>
          <p class="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
            Custom-extruded on-site to the exact measurements of your roofline. Heavy-gauge aluminum resists sagging and safely routes stormwater away from your foundation.
          </p>
          <ul class="text-xs text-slate-700 font-bold space-y-2">
            <li>✓ 5-inch & 6-inch seamless K-style profiles</li>
            <li>✓ Baked-on enamel finishes to match your trim</li>
            <li>✓ Leaf guard options to eliminate gutter cleaning</li>
          </ul>
        </div>
        <div class="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <div class="text-3xl mb-4">☀️</div>
          <h3 class="font-heading font-black text-slate-950 text-2xl mb-3">Leak-Free Skylight Replacement</h3>
          <p class="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
            Old bubble acrylic skylights crack and turn yellow under Texas UV heat. We install tempered, energy-efficient glass skylights with triple-sealed step flashing.
          </p>
          <ul class="text-xs text-slate-700 font-bold space-y-2">
            <li>✓ Installed within hours, no interior drywall mess</li>
            <li>✓ Energy Star certified Low-E glass</li>
            <li>✓ 100% leak-free installation guarantee</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Gutters & Skylights Garland TX',
    'Seamless gutter installation and leak-free skylight replacement in Garland, TX. Finished in hours.',
    content,
    'gutters-and-skylights'
  );
}

// -------------------------------------------------------------
// 5. FREE ROOF INSPECTION PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildFreeInspection() {
  const content = `
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1584463699042-3079b76786a3?auto=format&fit=crop&w=2000&q=85" alt="Free Roof Inspection" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <span class="text-amber-900 font-bold text-xs uppercase tracking-widest bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-xs">
        100% Free · No Obligation · No Pressure
      </span>
      <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] mt-4 tracking-tight leading-tight">
        The Free All Star Roof Checkup
      </h1>
      <p class="text-lg text-slate-600 mt-4 leading-relaxed font-normal">
        A straight answer about the condition of your roof from Marvin Rodriguez — even if it's "your roof is fine". You keep the photo report either way.
      </p>
    </div>
  </section>

  <section class="py-24 bg-slate-50 border-b border-slate-200">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-200">
        <form id="lead-form" class="space-y-6">
          <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off">
          
          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name *</label>
              <input type="text" name="name" required placeholder="John Homeowner" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3.5 text-sm outline-none transition-all">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
              <input type="tel" name="phone" required placeholder="(214) 000-0000" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3.5 text-sm outline-none transition-all">
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Street Address</label>
              <input type="text" name="address" placeholder="1234 Texas Star Ln" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3.5 text-sm outline-none transition-all">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">City</label>
              <select name="city" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3.5 text-sm outline-none transition-all font-medium text-slate-700">
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
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">What's going on with your roof?</label>
            <textarea name="notes" rows="3" placeholder="Tell Marvin what you've noticed (leaks, recent hail, age, selling home soon...)" class="w-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-red-600 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"></textarea>
          </div>

          <button type="submit" class="btn-red-gradient w-full text-white font-extrabold text-lg py-4 rounded-xl shadow-xl flex items-center justify-center gap-2">
            <span>Schedule My Free Inspection</span>
            <span>→</span>
          </button>
          <p class="text-xs text-center text-slate-400">
            Marvin Rodriguez personally reviews your request and calls you. Zero sales reps.
          </p>
        </form>

        <div id="form-success" class="hidden text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-200">
          <div class="text-4xl mb-3">✓</div>
          <h3 class="font-heading font-black text-emerald-950 text-2xl">Inspection Request Received!</h3>
          <p class="text-sm text-emerald-700 mt-2">Marvin Rodriguez has received your request and will call you directly.</p>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Book a Free Roof Inspection Garland TX',
    'Schedule your free point-by-point roof checkup with photos. Honest verdict from Marvin Rodriguez, owner-operated.',
    content,
    'free-roof-inspection'
  );
}

// -------------------------------------------------------------
// 6. REVIEWS PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildReviews() {
  const content = `
  <section class="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-amber-500 text-4xl mb-3">★ ★ ★ ★ ★</div>
      <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
        205 Google Reviews. Zero Complaints.
      </h1>
      <p class="text-lg text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
        5.0 ★★★★★ on Google · Zero BBB complaints on file since 2019. Read real reviews from real North Texas homeowners.
      </p>
    </div>
  </section>

  <section class="py-24 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Review 1 -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
              "They have a big crew so it was done in one day… not a single nail was found. Marvin is very professional and honest."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">GR</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Google reviewer</div>
              <div class="text-xs text-slate-400 font-medium">via Google Reviews</div>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
              "Marvin and his team did an excellent job replacing my roof. They arrived on time and finished the job the same day. His team protected my landscaping and they thoroughly cleaned up."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">WJ</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">William J.</div>
              <div class="text-xs text-slate-400 font-medium">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
              "He gave me information about the insurance process that I was completely unsure of. I live overseas and he managed to take care of everything from start to end!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs">RT</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Rosita T.</div>
              <div class="text-xs text-slate-400 font-medium">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 4 -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
              "Marvin has replaced 2 roofs on 2 different homes in a span of 10 years for me. Cleanup was spotless, and the roofs always looked great! I will use him again in a heartbeat!"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs">AG</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Armando G.</div>
              <div class="text-xs text-slate-400 font-medium">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 5 -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
              "Very aggressive roofers came to our door and made big commitments! It was refreshing to meet Mr. Marvin Rodriguez. He was thorough with his inspection and recommended only the needed repairs."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-xs">GJ</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Gwen J.</div>
              <div class="text-xs text-slate-400 font-medium">Verified review, 2023</div>
            </div>
          </div>
        </div>

        <!-- Review 6 -->
        <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <div class="text-amber-500 text-sm mb-3">★★★★★</div>
            <p class="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
              "Replaced our entire roof in just one day, with updated vents. Worked with our insurance. Great job, 5-year guarantee."
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
            <div class="w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">KS</div>
            <div>
              <div class="font-extrabold text-slate-950 text-sm">Kevin S.</div>
              <div class="text-xs text-slate-400 font-medium">Yelp, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Customer Reviews Garland TX (205+ 5.0-Stars)',
    '205+ Google Reviews. Zero BBB Complaints. Read real homeowner stories about Marvin Rodriguez and All Star Roofing.',
    content,
    'reviews'
  );
}

// -------------------------------------------------------------
// 7. GUIDES PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildGuides() {
  const content = `
  <section class="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="text-amber-900 font-bold text-xs uppercase tracking-widest bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-xs">
        ROOFING EDUCATION
      </span>
      <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] mt-4 tracking-tight leading-tight">
        North Texas Roofing Guides
      </h1>
      <p class="text-lg text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
        Straight advice from 30+ years of Texas roofing to help you avoid scams, understand insurance, and make smart home decisions.
      </p>
    </div>
  </section>

  <section class="py-24 bg-slate-50 border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <!-- Guide 1 -->
      <article class="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md" id="hail-guide">
        <span class="text-xs font-black text-red-600 uppercase tracking-wider">HAIL DAMAGE RESTORATION</span>
        <h2 class="font-heading font-black text-slate-950 text-2xl sm:text-3xl mt-2 mb-4">
          What to Do After a North Texas Hail Storm (Before You Call Your Insurance)
        </h2>
        <div class="text-sm text-slate-600 leading-relaxed space-y-4 font-normal">
          <p>
            When hail hits Garland, Rowlett, or Mesquite, the first reaction is often to dial your insurance company right away. However, filing a claim without confirmed functional damage can trigger a claim on your record even with zero payout.
          </p>
          <p>
            <strong>Check ground-level collateral damage first:</strong> Inspect your metal mailbox, window screens, outdoor AC condenser fins, and downspouts. If soft metal shows round dings, hail was likely large enough to bruise shingle mats on your roof.
          </p>
          <p>
            <strong>Call an honest local contractor for a free photo report:</strong> Have Marvin inspect the roof first. He will circle impacts in chalk, photograph the evidence, and tell you whether the damage actually justifies filing a claim.
          </p>
        </div>
      </article>

      <!-- Guide 2 -->
      <article class="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md" id="door-knockers">
        <span class="text-xs font-black text-amber-600 uppercase tracking-wider">CONSUMER PROTECTION</span>
        <h2 class="font-heading font-black text-slate-950 text-2xl sm:text-3xl mt-2 mb-4">
          How to Spot Out-of-Town "Door-Knocker" Roofing Scams in Garland
        </h2>
        <div class="text-sm text-slate-600 leading-relaxed space-y-4 font-normal">
          <p>
            Within 24 hours of a major storm, trucks with out-of-state license plates arrive in residential neighborhoods. These storm-chasers push homeowners to sign contingency agreements, collect insurance checks, subcontract your job to temporary crews, and disappear before the next rain.
          </p>
          <p><strong>Warning Signs:</strong></p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Offering to "waive your deductible" (which is illegal in Texas under Texas Insurance Code HB 2102).</li>
            <li>No permanent physical shop or local Texas history.</li>
            <li>Aggressive pressure to sign contracts on the spot before you can speak directly with the business owner.</li>
          </ul>
        </div>
      </article>

      <!-- Guide 3 -->
      <article class="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md" id="repair-vs-replace">
        <span class="text-xs font-black text-emerald-600 uppercase tracking-wider">REPAIR VS REPLACE CHECKLIST</span>
        <h2 class="font-heading font-black text-slate-950 text-2xl sm:text-3xl mt-2 mb-4">
          Repair vs. Full Replacement: When You Don't Need a New Roof
        </h2>
        <div class="text-sm text-slate-600 leading-relaxed space-y-4 font-normal">
          <p>
            Not every leak means you need a $15,000 replacement. If your shingles are under 15 years old and remain pliable, a focused repair — replacing a pipe boot, reflashing a chimney, or fixing a localized wind-torn patch — can add years of life to your roof.
          </p>
          <p>
            At All Star Roofing, Marvin Rodriguez inspects the attic decking, granule retention, and ventilation before recommending any work. If a simple repair solves your leak, that's all he will quote.
          </p>
        </div>
      </article>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'North Texas Roofing Guides Garland TX',
    'Educational homeowner guides on hail damage, spotting storm-chasing scams, and repair vs replacement checklists.',
    content,
    'guides'
  );
}

// -------------------------------------------------------------
// 8. SERVICE AREAS HUB PAGE (100% LIGHT THEME)
// -------------------------------------------------------------
function buildServiceAreasHub() {
  const content = `
  <section class="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-200 text-center">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="text-amber-900 font-bold text-xs uppercase tracking-widest bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full shadow-xs">
        REGIONAL SERVICE HUB
      </span>
      <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] mt-4 tracking-tight leading-tight">
        Serving Garland & Northeast Dallas Suburbs
      </h1>
      <p class="text-lg text-slate-600 mt-4 max-w-2xl mx-auto font-normal">
        Based in Garland for 30+ years. We answer the phone year-round across the northeast corridor of DFW.
      </p>
    </div>
  </section>

  <section class="py-24 bg-slate-50 border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-8 rounded-3xl border-2 border-red-600 shadow-md flex flex-col justify-between" id="garland">
          <div>
            <span class="text-xs font-black text-red-600 uppercase tracking-wider">HOME BASE</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Garland (HQ)</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Marvin Rodriguez's headquarters. Fast same-day roof replacements and emergency tarping.</p>
          </div>
          <a href="tel:2146818863" class="text-red-600 font-black text-sm hover:underline">Call Marvin: (214) 681-8863 →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">COLLIN / DALLAS</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Rowlett, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Wind and hail restoration for lakeside and suburban Rowlett homes.</p>
          </div>
          <a href="service-areas/rowlett.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Rowlett Services →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">EAST DALLAS</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Mesquite, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Full residential roof replacements and direct insurance adjuster walkthroughs.</p>
          </div>
          <a href="service-areas/mesquite.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Mesquite Services →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">TELECOM CORRIDOR</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Richardson, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Established brick home roof replacements with Class 3/4 impact shingles.</p>
          </div>
          <a href="service-areas/richardson.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Richardson Services →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">HWY 78</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Sachse, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Same-day shingle replacements and magnetic nail sweeps for Sachse families.</p>
          </div>
          <a href="service-areas/sachse.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Sachse Services →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">COLLIN COUNTY</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Wylie, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Hail damage inspections and gutter installations for Wylie properties.</p>
          </div>
          <a href="service-areas/wylie.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Wylie Services →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">COLLIN COUNTY</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Plano, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">Architectural shingle upgrades and high-durability roof repairs in Plano.</p>
          </div>
          <a href="service-areas/plano.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Plano Services →</a>
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between card-light-lift">
          <div>
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">NORTH METRO</span>
            <h3 class="font-heading font-black text-slate-950 text-2xl mt-1 mb-2">Allen, TX</h3>
            <p class="text-xs text-slate-600 leading-relaxed mb-4">High-wind ridge ventilation and full asphalt shingle replacements in Allen.</p>
          </div>
          <a href="service-areas/allen.html" class="text-slate-900 font-extrabold text-sm hover:text-red-600">View Allen Services →</a>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'Service Areas Garland TX & Northeast Dallas',
    'Serving Garland, Rowlett, Mesquite, Richardson, Sachse, Wylie, Plano, and Allen with 5.0-star roofing services.',
    content,
    'area-hub'
  );
}

// -------------------------------------------------------------
// 9. CITY PAGES GENERATOR (100% LIGHT THEME)
// -------------------------------------------------------------
function buildCityPage(cityName, descriptionSnippet) {
  const content = `
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" alt="Roofing in ${cityName} TX" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
        <a href="../index.html" class="hover:text-red-600">Home</a>
        <span>/</span>
        <a href="../service-areas.html" class="hover:text-red-600">Service Areas</a>
        <span>/</span>
        <span class="text-red-600">${cityName}, TX</span>
      </div>
      <div class="max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-amber-900 shadow-xs">
          <span>★</span> 5.0-Star Roofing Contractor Serving ${cityName}
        </div>
        <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
          Roof Replacement & Repairs in ${cityName}, TX
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed font-normal">
          ${descriptionSnippet} Marvin Rodriguez and his large experienced crew replace most roofs in one day, handle the insurance paperwork, and leave your yard spotless.
        </p>
        <div class="pt-4 flex flex-wrap gap-4">
          <a href="tel:2146818863" class="btn-red-gradient text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2">
            <span>☎ Call Marvin: (214) 681-8863</span>
          </a>
          <a href="../free-roof-inspection.html" class="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl border border-slate-300 transition-all shadow-xs">
            Book Free ${cityName} Inspection →
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <h2 class="font-heading font-black text-slate-950 text-2xl sm:text-3xl mb-4">
          Why ${cityName} Homeowners Choose All Star Roofing
        </h2>
        <p class="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
          When severe storms or hail hit ${cityName}, out-of-state storm chasers knock on doors with aggressive sales tactics. All Star Roofing is located minutes away in Garland, owner-operated by Marvin Rodriguez with 30+ years of Texas craftsmanship.
        </p>
        <div class="grid sm:grid-cols-2 gap-4 text-xs font-bold text-slate-800">
          <div class="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-xs">
            <span class="text-emerald-600 font-black">✓</span> Same-Day Installation
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-xs">
            <span class="text-emerald-600 font-black">✓</span> Owner On Every Job
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-xs">
            <span class="text-emerald-600 font-black">✓</span> Double Magnetic Nail Sweeps
          </div>
          <div class="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-xs">
            <span class="text-emerald-600 font-black">✓</span> 5.0 Google Rating (205+ Reviews)
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    `Roof Replacement & Repairs in ${cityName}, TX`,
    `Top-rated roofing contractor serving ${cityName}, TX. Same-day roof replacement, free inspections, and insurance claim help from Marvin Rodriguez.`,
    content,
    'area-' + cityName.toLowerCase(),
    '..'
  );
}

// -------------------------------------------------------------
// 10. SPANISH ROUTE (/es/index.html) (100% LIGHT THEME)
// -------------------------------------------------------------
function buildSpanishPage() {
  const content = `
  <section class="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-200">
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" alt="Techador en Garland TX" class="w-full h-full object-cover object-right opacity-30">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl space-y-6">
        <div class="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-amber-900 shadow-xs">
          <span>★</span> Más de 30 Años de Experiencia · Operado por Marvin Rodriguez
        </div>
        <h1 class="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-tight">
          El Contratista de Techos 5 Estrellas de Garland
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed font-normal">
          Más de 200 reseñas en Google. <strong class="text-slate-900 font-bold">Cada una, cinco estrellas.</strong> Marvin Rodriguez y su equipo reemplazan la mayoría de los techos en un solo día, manejan todo el papeleo del seguro y dejan su patio tan limpio que no encontrará un solo clavo.
        </p>
        <div class="pt-4 flex flex-wrap gap-4">
          <a href="tel:2146818863" class="btn-red-gradient text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center gap-2">
            <span>☎ Llame a Marvin: (214) 681-8863</span>
          </a>
          <a href="../free-roof-inspection.html" class="bg-white hover:bg-slate-50 text-slate-900 font-bold px-7 py-4 rounded-xl border border-slate-300 transition-all shadow-xs">
            Inspección Gratuita de Techo →
          </a>
        </div>
        <p class="text-xs text-slate-500 italic font-medium">
          Hablamos español con orgullo. Abierto todos los días de 6 AM a 10 PM.
        </p>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-red-600 font-black text-xs uppercase tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
          LO QUE HACEMOS
        </span>
        <h2 class="font-heading font-black text-[#0F172A] text-3xl sm:text-4xl mt-3 tracking-tight">
          Techado Residencial Bien Hecho
        </h2>
        <p class="text-slate-600 mt-2 font-normal">Un solo equipo, el mismo dueño, treinta años de experiencia en Texas.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div class="text-3xl mb-4">🏠</div>
          <h3 class="font-heading font-black text-slate-950 text-xl mb-2">Reemplazo de Techo en 1 Día</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-normal">Retiro total e instalación de tejas de asfalto nuevas, terminado y limpio el mismo día por nuestro gran equipo experimentado.</p>
        </div>
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div class="text-3xl mb-4">⛈️</div>
          <h3 class="font-heading font-black text-slate-950 text-xl mb-2">Ayuda con Reclamo de Seguro</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-normal">¿Daños por granizo? Documentamos todo con fotos, nos reunimos directamente con el ajustador y le explicamos cada paso.</p>
        </div>
        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div class="text-3xl mb-4">🔍</div>
          <h3 class="font-heading font-black text-slate-950 text-xl mb-2">Inspecciones 100% Gratis</h3>
          <p class="text-sm text-slate-600 leading-relaxed font-normal">Una respuesta honesta sin presión. Si su techo solo necesita una reparación pequeña, eso es exactamente lo que le diremos.</p>
        </div>
      </div>
    </div>
  </section>
  `;
  return buildHtmlShell(
    'All Star Roofing de Garland | Contratista 5 Estrellas',
    'Más de 200 reseñas de 5 estrellas en Google. Reemplazo de techos en 1 día, inspecciones gratis y ayuda con el seguro. Llame a Marvin Rodriguez.',
    content,
    'es',
    '..'
  );
}

// -------------------------------------------------------------
// EXECUTE ALL PAGE BUILDS
// -------------------------------------------------------------
const pages = [
  { file: 'roof-replacement.html', html: buildRoofReplacement() },
  { file: 'roof-repair.html', html: buildRoofRepair() },
  { file: 'storm-and-hail-damage.html', html: buildStormHail() },
  { file: 'gutters-and-skylights.html', html: buildGuttersSkylights() },
  { file: 'free-roof-inspection.html', html: buildFreeInspection() },
  { file: 'reviews.html', html: buildReviews() },
  { file: 'guides.html', html: buildGuides() },
  { file: 'service-areas.html', html: buildServiceAreasHub() },
  { file: 'es/index.html', html: buildSpanishPage() },
];

const cities = [
  { name: 'Rowlett', desc: 'Serving neighborhoods near Lake Ray Hubbard and Hwy 66 with wind and hail restoration.' },
  { name: 'Mesquite', desc: 'Serving East Dallas and Mesquite homeowners with reliable residential roof replacements.' },
  { name: 'Richardson', desc: 'Serving established brick homes in Richardson with precision ventilation upgrades.' },
  { name: 'Sachse', desc: 'Fast, responsive same-day roof replacements for homeowners across Sachse, TX.' },
  { name: 'Wylie', desc: 'Expert hail damage assessments and insurance claim support in Collin County.' },
  { name: 'Plano', desc: 'Premium architectural shingle installations and gutter repairs in Plano, TX.' },
  { name: 'Allen', desc: 'High-durability impact-resistant roofing installations for Allen homeowners.' },
];

for (const c of cities) {
  pages.push({
    file: path.join('service-areas', `${c.name.toLowerCase()}.html`),
    html: buildCityPage(c.name, c.desc)
  });
}

for (const p of pages) {
  const dest = path.join(__dirname, p.file);
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dest, p.html);
  console.log(`Generated: ${p.file}`);
}

console.log(`All ${pages.length} 100% Bright Light-Theme routes successfully generated!`);
