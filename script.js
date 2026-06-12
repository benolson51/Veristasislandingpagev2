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

    // ── CMMC Phase 2 deadline countdown ──
    const phase2 = document.getElementById('phase2Days');
    if (phase2) {
        const days = Math.ceil((new Date('2026-11-10T00:00:00') - Date.now()) / 86400000);
        phase2.textContent = days > 0 ? days + ' days away' : 'now in effect';
    }

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

    // ── Live Zero-Knowledge encryption demo ──
    const zkInput = document.getElementById('zkInput');
    const zkCipher = document.getElementById('zkCipher');
    if (zkInput && zkCipher) {
        const HEX = '0123456789abcdef';
        const rand = n => Array.from({ length: n }, () => HEX[(Math.random() * 16) | 0]).join('');

        // Derive a stable-length ciphertext from the input, then continuously
        // re-scramble a slice of it so the "vault" feels alive.
        let bytes = [];
        function rebuild() {
            const text = zkInput.value || ' ';
            // 2 hex chars per logical byte; pad to a tidy block, cap the size
            const len = Math.min(Math.max(text.length, 12), 96);
            bytes = Array.from({ length: len }, () => (Math.random() * 256) | 0);
        }

        function render() {
            // group into bytes of 2 hex chars, space every 2 bytes, newline-ish via wrap
            let out = '';
            for (let i = 0; i < bytes.length; i++) {
                const h = bytes[i].toString(16).padStart(2, '0');
                out += `<span class="${i % 7 === 0 ? 'b' : ''}">${h}</span>`;
                if (i % 2 === 1) out += ' ';
            }
            zkCipher.innerHTML = out + '<span class="d">▍</span>';
        }

        function scramble() {
            // mutate a handful of bytes each frame — looks like live AEAD churn
            const muts = Math.max(2, (bytes.length * 0.12) | 0);
            for (let i = 0; i < muts; i++) {
                bytes[(Math.random() * bytes.length) | 0] = (Math.random() * 256) | 0;
            }
            render();
        }

        rebuild();
        render();
        zkInput.addEventListener('input', rebuild);

        let last = 0;
        (function loop(t) {
            if (t - last > 90) { scramble(); last = t; }
            requestAnimationFrame(loop);
        })(0);
    }
});
