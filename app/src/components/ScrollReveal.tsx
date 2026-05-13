import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 40,
  className = '',
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (direction === 'up') fromVars.y = distance;
    if (direction === 'down') fromVars.y = -distance;
    if (direction === 'left') fromVars.x = distance;
    if (direction === 'right') fromVars.x = -distance;

    const toVars: gsap.TweenVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power2.out',
    };

    if (stagger > 0) {
      const children = el.children;
      gsap.set(children, fromVars);
      const tween = gsap.to(children, { ...toVars, stagger });
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        animation: tween,
      });
    } else {
      gsap.set(el, fromVars);
      const tween = gsap.to(el, toVars);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        animation: tween,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [direction, delay, duration, distance, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
