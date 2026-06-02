/* AVEN MED — Cinematic homepage intro (ink-drawn growth → real logo bloom, ~10s)
   Seed falls, root + stem draw as brass ink strokes, then the REAL AVEN MED
   logo image fades in with a gentle scale + glow at the bloom moment.
   Wordmark fades in beneath; cross-fade to bone homepage. */
import React from 'react';

const Intro = ({ onDone }) => {
  const introRef = React.useRef(null);
  const seedRef = React.useRef(null);
  const rootLineRef = React.useRef(null);
  const stemLineRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const haloRef = React.useRef(null);
  const wordmarkRef = React.useRef(null);
  const chimeRef = React.useRef(null);
  const timersRef = React.useRef([]);
  const endedRef = React.useRef(false);

  const endIntro = React.useCallback(() => {
    if (endedRef.current) return;
    endedRef.current = true;
    const intro = introRef.current;
    if (intro) intro.classList.add("fading");
    try { sessionStorage.setItem("aven-intro-played", "true"); } catch (e) {}
    const chime = chimeRef.current;
    if (chime && !chime.paused) {
      try { chime.pause(); chime.currentTime = 0; } catch (e) {}
    }
    timersRef.current.forEach((id) => clearTimeout(id));
    setTimeout(() => { onDone && onDone(); }, 700);
  }, [onDone]);

  React.useEffect(() => {
    const t = timersRef.current;

    // 1.1s — seed begins to fall
    t.push(setTimeout(() => {
      const s = seedRef.current;
      if (s) s.classList.add("falling");
    }, 1100));

    // 1.85s — root draws downward
    t.push(setTimeout(() => {
      const r = rootLineRef.current;
      if (r) r.classList.add("draw-line");
    }, 1850));

    // 2.6s — stem draws upward
    t.push(setTimeout(() => {
      const s = stemLineRef.current;
      if (s) s.classList.add("draw-line");
    }, 2600));

    // 3.3s — real logo blooms (extended 2.4s)
    t.push(setTimeout(() => {
      const l = logoRef.current;
      if (l) l.classList.add("blooming");
    }, 3300));

    // 5.7s — bloom halo + chime
    t.push(setTimeout(() => {
      const h = haloRef.current;
      if (h) h.classList.add("glowing");
      const chime = chimeRef.current;
      if (chime) {
        chime.volume = 0.35;
        const p = chime.play();
        if (p && p.catch) p.catch(() => {});
      }
    }, 5700));

    // 6.7s — wordmark (quicker 500ms fade)
    t.push(setTimeout(() => {
      const w = wordmarkRef.current;
      if (w) w.classList.add("show");
    }, 6700));

    // 7.5s — cross-dissolve to home
    t.push(setTimeout(endIntro, 7500));

    // Aggressive skip
    const skip = () => endIntro();
    const opts = { once: true, passive: true };
    window.addEventListener("click", skip, opts);
    window.addEventListener("touchstart", skip, opts);
    window.addEventListener("keydown", skip, opts);
    window.addEventListener("wheel", skip, opts);

    return () => {
      t.forEach((id) => clearTimeout(id));
      window.removeEventListener("click", skip);
      window.removeEventListener("touchstart", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
    };
  }, [endIntro]);

  return (
    <div id="aven-intro" className="aven-intro" ref={introRef} aria-hidden="true">
      <div className="intro-stage">
        {/* Ink-drawn growth layer */}
        <svg className="intro-canvas" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
          <circle
            id="seed-particle"
            ref={seedRef}
            cx="200" cy="-30" r="2.5"
            fill="#b08f5b" opacity="0"
          />
          {/* root: extends from anchor (y=300) downward into earth */}
          <line
            ref={rootLineRef}
            x1="200" y1="300" x2="200" y2="335"
            stroke="#b08f5b" strokeWidth="1.2" strokeLinecap="round"
            strokeDasharray="35" strokeDashoffset="35"
          />
          {/* stem: extends from anchor upward (will be overlaid by logo's own stem) */}
          <line
            ref={stemLineRef}
            x1="200" y1="300" x2="200" y2="170"
            stroke="#b08f5b" strokeWidth="1.4" strokeLinecap="round"
            strokeDasharray="130" strokeDashoffset="130"
          />
          {/* Bloom halo (centered behind the logo's body) */}
          <circle
            id="bloom-halo"
            ref={haloRef}
            cx="200" cy="215" r="80"
            fill="none" stroke="#b08f5b" strokeWidth="0" opacity="0"
          />
        </svg>

        {/* Real AVEN MED brass logo — fades in at bloom moment */}
        <img
          ref={logoRef}
          className="intro-logo-real"
          src="assets/logo.png"
          alt=""
        />
      </div>

      <div className="aven-intro-wordmark" ref={wordmarkRef}>
        <span className="intro-mark">AVEN MED</span>
      </div>

      <audio ref={chimeRef} id="bloom-chime" preload="auto">
        <source src="assets/bloom-chime.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Intro;
