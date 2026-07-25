/* AVEN MED — cinematic background video for image slots
 *
 * Drops into any existing Ph slot, e.g.:
 *   <Ph aspect="16/9"><Video src="assets/hero.mp4" poster="assets/hero.jpg" /></Ph>
 *
 * Mobile-first, data-conscious:
 *  - preload="none" + play driven by IntersectionObserver → nothing is fetched
 *    until a clip is actually near the viewport (big saving with many videos).
 *  - Pauses when scrolled away (saves battery/data/CPU on phones).
 *  - Skips autoplay entirely on Data-Saver, slow (2g) connections, or when the
 *    user prefers reduced motion — the clay Ph block (and poster) stay instead.
 *  - Silent, muted, looping, playsInline → autoplays on iOS when it does play.
 */
import React from 'react';

const Video = ({ src, poster, className = "", style = {} }) => {
  const ref = React.useRef(null);
  // Fade the clip in once it's actually playing, so it glides out of the clay
  // placeholder instead of popping. If autoplay is blocked (reduced-motion,
  // data-saver, slow net), it never plays → stays hidden and the placeholder
  // remains, exactly as intended.
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect device + user constraints before we ever autoplay.
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = conn?.saveData === true;
    const slowNet = conn ? /(^|-)2g$/.test(conn.effectiveType || '') : false;
    const allowAutoplay = !reduceMotion && !saveData && !slowNet;

    if (!allowAutoplay) return; // leave the clay placeholder / poster in place

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        // preload="none" → this first play() is what triggers the download,
        // so we only ever pull bytes for clips the visitor actually reaches.
        el.play?.().catch(() => {});
      } else {
        el.pause?.();
      }
    }, { threshold: 0.25, rootMargin: '150px 0px' });

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={"ph-video " + className}
      style={{ opacity: playing ? 1 : 0, transition: "opacity 900ms ease", ...style }}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      disableRemotePlayback
      aria-hidden="true"
      onPlaying={() => setPlaying(true)}
    />
  );
};

export default Video;
