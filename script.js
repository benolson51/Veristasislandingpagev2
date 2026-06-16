document.addEventListener('DOMContentLoaded', () => {

    // ── Scroll Reveal ──
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Trigger immediately visible elements
    requestAnimationFrame(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('vis');
        });
    });

    // ── Navbar scroll effect + scroll progress bar ──
    const topbar = document.getElementById('topbar');
    const progress = document.getElementById('scrollProgress');
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const y = window.scrollY;
            if (topbar) topbar.classList.toggle('scrolled', y > 40);
            if (progress) {
                const h = document.documentElement.scrollHeight - window.innerHeight;
                progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
            }
            ticking = false;
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ── Cursor-following glow ──
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;
        window.addEventListener('mousemove', e => {
            tx = e.clientX; ty = e.clientY;
            cursorGlow.style.opacity = '1';
            if (!raf) raf = requestAnimationFrame(follow);
        });
        function follow() {
            cx += (tx - cx) * 0.12;
            cy += (ty - cy) * 0.12;
            cursorGlow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
            if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
                raf = requestAnimationFrame(follow);
            } else { raf = null; }
        }
    }

    // ── Mouse tracking spotlight on grid cells ──
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('mousemove', e => {
            const r = cell.getBoundingClientRect();
            cell.style.setProperty('--mx', `${e.clientX - r.left}px`);
            cell.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
    });

    // ── Magnetic hero buttons ──
    if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.btn-hero-primary, .btn-hero-ghost, .btn-solid').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const mx = e.clientX - r.left - r.width / 2;
                const my = e.clientY - r.top - r.height / 2;
                btn.style.transform = `translate(${mx * 0.18}px, ${my * 0.28}px)`;
            });
            btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
        });
    }

    // ── Animate metric numbers ──
    const metricIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const text = el.textContent.trim();
            const num = parseInt(text);
            if (isNaN(num) || num === 0) { metricIO.unobserve(el); return; }

            const dur = 1400;
            const start = performance.now();
            const html = el.innerHTML;

            (function tick(now) {
                const p = Math.min((now - start) / dur, 1);
                const eased = 1 - Math.pow(1 - p, 4);
                el.innerHTML = html.replace(String(num), String(Math.round(num * eased)));
                if (p < 1) requestAnimationFrame(tick);
            })(start);

            metricIO.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.metric-val').forEach(el => metricIO.observe(el));

    // ── FAQ accordion ──
    // (Hero panels are static markup; no client-side crypto runs here.)
    document.querySelectorAll('.faq-item .faq-q').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.closest('.faq-item');
            const ans = item.querySelector('.faq-a');
            const isOpen = item.classList.contains('open');

            // close others
            document.querySelectorAll('.faq-item.open').forEach(other => {
                if (other !== item) {
                    other.classList.remove('open');
                    other.querySelector('.faq-a').style.maxHeight = null;
                    other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
                }
            });

            if (isOpen) {
                item.classList.remove('open');
                ans.style.maxHeight = null;
            } else {
                item.classList.add('open');
                ans.style.maxHeight = ans.scrollHeight + 'px';
            }
            q.setAttribute('aria-expanded', String(!isOpen));
        });
    });
});
