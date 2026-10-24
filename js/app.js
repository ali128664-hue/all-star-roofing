/* ============================================================
   ALL STAR ROOFING — Global Interactive Engine
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Hamburger Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');

    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      if (hamburgerIcon) hamburgerIcon.classList.toggle('hidden', isHidden);
      if (closeIcon) closeIcon.classList.toggle('hidden', !isHidden);
      document.body.style.overflow = isHidden ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }

  // 2. Interactive FAQ Accordion
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const chevron = btn.querySelector('.accordion-chevron');
      const isOpen = body.classList.contains('open');

      // Close all accordions first
      document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.accordion-chevron').forEach(c => c.style.transform = '');

      // If clicked one wasn't open, open it
      if (!isOpen) {
        body.classList.add('open');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  // 3. Lead Form Client-Side Validation & Handler
  const leadForms = document.querySelectorAll('#lead-form');
  leadForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      // Honeypot anti-spam check
      const honeypot = form.querySelector('[name="website"]');
      if (honeypot && honeypot.value) {
        e.preventDefault();
        return;
      }

      const name = form.querySelector('[name="name"]')?.value?.trim();
      const phone = form.querySelector('[name="phone"]')?.value?.trim();

      if (!name || !phone) {
        e.preventDefault();
        alert('Please fill out your name and phone number so Marvin can contact you.');
        return;
      }

      // If on free-roof-inspection.html, show inline success message
      const successMsg = document.getElementById('form-success');
      if (successMsg) {
        e.preventDefault();
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
      }
    });
  });

  // 4. Interactive ZIP Code & Geolocation Checker
  const validZips = ['75040','75041','75042','75043','75044','75088','75089','75149','75150','75181','75080','75081','75082','75048','75098','75023','75024','75025','75074','75075','75002','75013'];
  const zipInput = document.getElementById('zip-input');
  const zipBtn = document.getElementById('zip-check-btn');
  const zipResult = document.getElementById('zip-result');
  const geoBtn = document.getElementById('geo-btn');

  function renderZipResult(zip) {
    if (!zipResult) return;
    zipResult.classList.remove('hidden');
    if (validZips.includes(zip)) {
      zipResult.innerHTML = `
        <div class="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl p-4 text-xs sm:text-sm font-semibold flex items-start gap-3">
          <span class="text-emerald-600 text-lg font-black shrink-0">✓</span>
          <div>
            <strong>Yes! We actively serve ${zip}.</strong> Marvin Rodriguez and his crew work in your area daily.
            <div class="mt-2">
              <a href="tel:2146818863" class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-3 py-1.5 rounded-lg text-xs transition-colors">
                Call Marvin: (214) 681-8863
              </a>
            </div>
          </div>
        </div>
      `;
    } else {
      zipResult.innerHTML = `
        <div class="bg-amber-50 border border-amber-300 text-amber-900 rounded-xl p-4 text-xs sm:text-sm font-semibold">
          We primarily serve Garland & NE Dallas suburbs. Give Marvin a quick call at <a href="tel:2146818863" class="underline font-extrabold">(214) 681-8863</a> — we may still be able to help you!
        </div>
      `;
    }
  }

  if (zipBtn && zipInput) {
    zipBtn.addEventListener('click', () => {
      const val = zipInput.value.trim();
      if (/^\\d{5}$/.test(val)) {
        renderZipResult(val);
      } else {
        if (zipResult) {
          zipResult.classList.remove('hidden');
          zipResult.innerHTML = '<div class="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-xs font-bold">Please enter a valid 5-digit US ZIP code.</div>';
        }
      }
    });

    zipInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        zipBtn.click();
      }
    });
  }

  if (geoBtn && zipInput) {
    geoBtn.addEventListener('click', () => {
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
      }
      geoBtn.textContent = 'Locating…';
      geoBtn.disabled = true;

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json&addressdetails=1`)
            .then(res => res.json())
            .then(data => {
              const zip = data?.address?.postcode?.substring(0, 5) || '';
              if (zip) {
                zipInput.value = zip;
                renderZipResult(zip);
              } else {
                alert('Could not detect postal code automatically. Please type it in.');
              }
            })
            .catch(() => alert('Location lookup failed. Please type your ZIP code.'))
            .finally(() => {
              geoBtn.innerHTML = '<span>📍</span><span>Use my location</span>';
              geoBtn.disabled = false;
            });
        },
        () => {
          alert('Location access denied. Please type your ZIP code.');
          geoBtn.innerHTML = '<span>📍</span><span>Use my location</span>';
          geoBtn.disabled = false;
        }
      );
    });
  }

  // 5. Lightbox Modal Gallery
  const lightbox = document.getElementById('lightbox-modal');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-full');
      const caption = card.getAttribute('data-caption');
      if (lbImg) lbImg.src = src;
      if (lbCaption) lbCaption.textContent = caption;
      if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
