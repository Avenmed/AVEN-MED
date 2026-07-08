/* AVEN MED — cinematic background video for image slots
 *
 * Drops into any existing Ph slot, e.g.:
 *   <Ph aspect="16/9"><Video src="assets/hero.mp4" poster="assets/hero.jpg" /></Ph>
 *
 * Silent, muted, looping, playsInline → autoplays on every browser (including
 * iOS). Lazy: it only plays while on screen (pauses when scrolled away) to save
 * mobile battery/data. The Ph's clay block + optional poster show until it loads.
 */
import React from 'react';

const Video = ({ src, poster, className = "", style = {} }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.play?.().catch(() => {}); }
      else { el.pause?.(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={"ph-video " + className}
      style={style}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
    />
  );
};

export default Video;
