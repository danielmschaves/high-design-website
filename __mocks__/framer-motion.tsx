/**
 * Framer Motion mock for Jest / jsdom.
 *
 * Strips animation props before forwarding to real DOM elements so tests can
 * assert on content and behaviour without needing IntersectionObserver,
 * requestAnimationFrame, or CSS animation support.
 *
 * AnimatePresence is replaced by a plain fragment so children are removed from
 * the DOM immediately when the parent stops rendering them (no exit-animation delay).
 */

import React from "react";

const MOTION_PROPS = new Set([
  "initial", "animate", "exit", "variants", "transition",
  "whileHover", "whileInView", "whileTap", "whileFocus", "whileDrag",
  "viewport", "layout", "layoutId", "drag", "dragConstraints",
  "onHoverStart", "onHoverEnd", "onTap", "onDragStart", "onDragEnd",
  "onAnimationStart", "onAnimationComplete", "transformTemplate",
  "custom", "inherit",
]);

function filterMotionProps(props: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (!MOTION_PROPS.has(k)) out[k] = v;
  }
  return out;
}

function createMotionComponent(tag: string) {
  const Component = React.forwardRef<Element, Record<string, unknown>>(
    ({ children, ...props }, ref) =>
      React.createElement(tag, { ref, ...filterMotionProps(props) }, children)
  );
  Component.displayName = `motion.${tag}`;
  return Component;
}

/**
 * Any HTML tag, resolved on first access and cached — a fixed tag list meant
 * that using a new element (motion.dd, motion.figure, …) failed at render time
 * with an opaque "element type is invalid" error instead of just working.
 */
const motionCache = new Map<string, React.ComponentType<Record<string, unknown>>>();

export const motion: Record<string, React.ComponentType<Record<string, unknown>>> =
  new Proxy({} as Record<string, React.ComponentType<Record<string, unknown>>>, {
    get(_target, prop: string) {
      if (!motionCache.has(prop)) {
        motionCache.set(prop, createMotionComponent(prop) as React.ComponentType<Record<string, unknown>>);
      }
      return motionCache.get(prop);
    },
  });

export function AnimatePresence({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export function MotionConfig({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export function LazyMotion({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}

export const useAnimation = () => ({ start: jest.fn(), stop: jest.fn(), set: jest.fn() });
export const useMotionValue = (init: unknown) => ({ get: () => init, set: jest.fn() });
export const useTransform = (v: unknown, fn?: (x: unknown) => unknown) => ({ get: () => (fn ? fn(v) : v) });
export const useScroll = () => ({ scrollY: { get: () => 0 }, scrollX: { get: () => 0 } });
export const domAnimation = {};
