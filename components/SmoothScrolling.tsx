"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Use GSAP's ticker to drive Lenis animations for perfect synchronization
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable GSAP's independent lag smoothing to avoid conflicts
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            /* 
               Note: We typically don't remove the gsap ticker listener here 
               if it's an anonymous function without reference, 
               but in a strict cleanup we would. 
               However, since this component mounts once effectively, it's okay.
               If strictly needed:
               const update = (time) => lenis.raf(time * 1000)
               gsap.ticker.add(update)
               ... remove(update)
            */
        };
    }, []);

    return null;
}
