import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Count up from 0 to 100
    const obj = { val: 0 };
    const counterAnim = gsap.to(obj, {
      val: 100,
      duration: 1.6,
      ease: 'power2.out',
      onUpdate: () => {
        setCounter(Math.floor(obj.val));
      },
      onComplete: () => {
        // Slide up the loader panel
        const tl = gsap.timeline({
          onComplete: onComplete
        });

        tl.to(counterRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.in'
        });

        tl.to(textRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in'
        }, '-=0.4');

        tl.to(containerRef.current, {
          yPercent: -100,
          duration: 1.0,
          ease: 'power4.inOut'
        }, '-=0.2');
      }
    });

    return () => {
      counterAnim.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#030303] z-[9999] flex flex-col justify-between p-6 md:p-12 text-[#ffffff] select-none"
    >
      {/* Top row */}
      <div className="flex justify-between items-center text-[10px] tracking-[0.3em] font-semibold text-[#888888]">
        <div>HET LADANI // PORTFOLIO</div>
        <div>INDIA</div>
      </div>

      {/* Giant Central Counter */}
      <div className="flex flex-col items-start justify-center max-w-7xl mx-auto w-full flex-grow">
        <div 
          ref={counterRef}
          className="font-display font-bold text-[20vw] leading-none tracking-tighter select-none flex items-baseline"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {String(counter).padStart(3, '0')}
          <span className="text-4xl md:text-6xl font-light text-[#888888]/40 ml-4">%</span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 border-t border-[#1e1e1e] pt-6">
        <p 
          ref={textRef}
          className="text-xs tracking-[0.2em] font-medium text-[#ffffff] animate-pulse"
        >
          THE SPARK FOR ALL THINGS HET LADANI
        </p>
        <div className="text-[10px] tracking-widest text-[#888888] font-mono">
          ESTABLISHING CONTEXT ENGINE
        </div>
      </div>
    </div>
  );
}
