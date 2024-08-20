"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface CarScrollerProps {
  lineId: string;
  carImageSrc: string;
}

const CarScroller: React.FC<CarScrollerProps> = ({ lineId, carImageSrc }) => {
  const carRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const carElement = carRef.current;
    const lineElement = document.getElementById(lineId);

    if (carElement && lineElement) {
      const pathLength = lineElement.getBoundingClientRect().height;

      gsap.to(carElement, {
        scrollTrigger: {
          trigger: lineElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const y = progress * pathLength;
            gsap.set(carElement, { y });
            setScrollPosition(Math.round(progress * 100));
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [lineId]);

  return (
    <div className="relative">
      <div
        ref={carRef}
        className="absolute top-0 left-0 w-16 h-16"
        style={{ transform: `translateY(${scrollPosition}px)` }}
      >
        <Image src={carImageSrc} alt="Car" width={100} height={100} className="w-full h-full object-contain" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm rounded-full px-2 py-1">
          {scrollPosition}%
        </div>
      </div>
    </div>
  );
};

export default CarScroller;
