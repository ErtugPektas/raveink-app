"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

type Splat = { id: number; x: number; y: number };

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [splats, setSplats] = useState<Splat[]>([]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth cursor trailing
  const springConfig = { damping: 45, stiffness: 450, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch screens (mobile/tablets)
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia("(max-width: 1023px)").matches);

    if (isTouchDevice) return;

    setEnabled(true);

    const moveCursor = (e: MouseEvent) => {
      // Hotspot (0,0) matches needle tip
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setClicked(true);
      const newSplat = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setSplats((prev) => [...prev.slice(-15), newSplat]);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Hide browser default cursor
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  // Auto-remove splats after animation completes
  useEffect(() => {
    if (splats.length === 0) return;
    const timer = setTimeout(() => {
      setSplats((prev) => prev.slice(1));
    }, 1200);
    return () => clearTimeout(timer);
  }, [splats]);

  if (!enabled) return null;

  return (
    <>
      {/* Ink Splats (Click effects) */}
      <AnimatePresence>
        {splats.map((splat) => (
          <motion.div
            key={splat.id}
            initial={{ scale: 0, opacity: 0.9 }}
            animate={{ scale: [1, 1.8], opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed rounded-full pointer-events-none bg-[#C41E3A] z-[99999]"
            style={{
              left: splat.x,
              top: splat.y,
              width: "8px",
              height: "8px",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(196, 30, 58, 0.8), 0 0 20px rgba(196, 30, 58, 0.4)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Tattoo Machine Cursor */}
      <motion.div
        className="fixed left-0 top-0 z-[999999] pointer-events-none hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div
          className={`relative transition-all duration-100 ${
            clicked ? "animate-tattoo-buzz scale-90" : ""
          }`}
          style={{
            transformOrigin: "0% 0%",
          }}
        >
          {/* Custom vector tattoo machine pointing to 0,0 */}
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(196,30,58,0.5)]"
          >
            {/* Needle shaft pointing to (0,0) */}
            <path
              d="M0 0 L15 15 M2 0 L15 13"
              stroke="#D1D5DB"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Red blood/ink on active tip */}
            {clicked && (
              <circle cx="0" cy="0" r="2" fill="#C41E3A" />
            )}

            {/* Grip / Metal Tube */}
            <rect
              x="12"
              y="6"
              width="8"
              height="20"
              rx="1.5"
              transform="rotate(45 12 6)"
              fill="#1F2937"
              stroke="#4B5563"
              strokeWidth="1"
            />

            {/* Red Coil 1 */}
            <rect
              x="22"
              y="16"
              width="9"
              height="14"
              rx="1"
              transform="rotate(45 22 16)"
              fill="#C41E3A"
              stroke="#8B0000"
              strokeWidth="0.75"
            />
            {/* Black Coil 2 */}
            <rect
              x="29"
              y="23"
              width="9"
              height="14"
              rx="1"
              transform="rotate(45 29 23)"
              fill="#111827"
              stroke="#374151"
              strokeWidth="0.75"
            />

            {/* Machine Metal Frame */}
            <path
              d="M23 27 L42 46 L45 43 L26 24 Z"
              fill="#374151"
              stroke="#4B5563"
              strokeWidth="0.75"
            />
            <path
              d="M32 18 L46 32"
              stroke="#4B5563"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Brass binding post */}
            <circle cx="43" cy="43" r="2.5" fill="#D97706" stroke="#B45309" strokeWidth="0.5" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
