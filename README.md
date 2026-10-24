# All Star Roofing of Garland - Redesign & Multi-Page Platform

High-converting, ultra-modern, fully responsive multi-page website redesign for **All Star Roofing of Garland** (Owner-operated by Marvin Rodriguez, 30+ Years Experience in North Texas).

## Features
- **Daylight Architectural Aesthetic:** Bright, sunlit editorial design with crisp typography, layered shadows, and high-resolution Texas residential imagery.
- **Custom Vector Brand Emblem:** Custom multi-layered SVG crest featuring the Texas Lone Star and Gable Roof Chevron with a 2-line horizontal brand lockup.
- **Complete Multi-Page Architecture (17 Routes):**
  - Homepage (`index.html`)
  - Roof Replacement (`roof-replacement.html`)
  - Roof Repair & Leaks (`roof-repair.html`)
  - Storm & Hail Damage Claims (`storm-and-hail-damage.html`)
  - Gutters & Skylights (`gutters-and-skylights.html`)
  - Free Inspection Request (`free-roof-inspection.html`)
  - Reviews Hub with 200+ Google Reviews (`reviews.html`)
  - Roofing & Storm Guides (`guides.html`)
  - Service Areas (`service-areas.html` + 7 localized city pages: Rowlett, Mesquite, Richardson, Sachse, Wylie, Plano, Allen)
  - Full Spanish Localized Page (`es/index.html`)
- **Interactive Tools:**
  - Real-time Texas ZIP Code Coverage Checker with geolocation detection.
  - Project Photo Gallery with full lightbox modal.
  - Interactive single-open FAQ accordions.
  - Lead Generation forms with honeypot spam protection.
  - Mobile bottom sticky conversion bar with direct click-to-call.

## Running Locally
```bash
# Serve with any static web server:
npx serve -l 3000
```
Then open `http://localhost:3000`.

## Rebuilding Pages
```bash
node build_home.js
node build_all_pages.js
```
