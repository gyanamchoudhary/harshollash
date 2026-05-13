import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (
  element: HTMLElement | string,
  options: { y?: number; duration?: number; delay?: number; ease?: string } = {}
) => {
  const { y = 30, duration = 0.6, delay = 0, ease = 'power2.out' } = options;
  return gsap.fromTo(
    element,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, delay, ease }
  );
};

export const fadeIn = (
  element: HTMLElement | string,
  options: { duration?: number; delay?: number } = {}
) => {
  const { duration = 0.6, delay = 0 } = options;
  return gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration, delay });
};

export const slideInLeft = (
  element: HTMLElement | string,
  options: { x?: number; duration?: number; delay?: number } = {}
) => {
  const { x = -40, duration = 0.8, delay = 0 } = options;
  return gsap.fromTo(
    element,
    { opacity: 0, x },
    { opacity: 1, x: 0, duration, delay, ease: 'power2.out' }
  );
};

export const slideInRight = (
  element: HTMLElement | string,
  options: { x?: number; duration?: number; delay?: number } = {}
) => {
  const { x = 40, duration = 0.8, delay = 0 } = options;
  return gsap.fromTo(
    element,
    { opacity: 0, x },
    { opacity: 1, x: 0, duration, delay, ease: 'power2.out' }
  );
};

export const scaleIn = (
  element: HTMLElement | string,
  options: { scale?: number; duration?: number; delay?: number } = {}
) => {
  const { scale = 0.9, duration = 0.6, delay = 0 } = options;
  return gsap.fromTo(
    element,
    { opacity: 0, scale },
    { opacity: 1, scale: 1, duration, delay, ease: 'power2.out' }
  );
};

export const staggerFadeUp = (
  elements: HTMLElement[] | string,
  options: { y?: number; duration?: number; stagger?: number; delay?: number } = {}
) => {
  const { y = 30, duration = 0.6, stagger = 0.1, delay = 0 } = options;
  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, stagger, delay, ease: 'power2.out' }
  );
};

export const createScrollTrigger = (
  element: HTMLElement | string,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options: { start?: string; toggleActions?: string } = {}
) => {
  const { start = 'top 85%', toggleActions = 'play none none none' } = options;
  return ScrollTrigger.create({
    trigger: element,
    start,
    toggleActions,
    animation,
  });
};
