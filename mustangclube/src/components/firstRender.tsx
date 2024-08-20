"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface FullScreenImageProps {
  imageUrl: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ imageUrl }) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Optional: Make the element invisible after the animation
          gsap.set(imageRef.current, { visibility: 'hidden' });
        },
      });

      gsap.set(imageRef.current, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        width: '100%',
        height: '100%',
        zIndex: 9999,
        borderRadius: '0%', // Start with no border radius
      });

      tl.to(imageRef.current, {
        duration: 2,
        scale: 0, // Scale down to 20% of the original size
        borderRadius: '100%', // Apply border radius to create a circular shape
        ease: 'power2.inOut',
      });
    }
  }, []);

  return (
    <div ref={imageRef}>
      <Image
        priority={true}
        alt="Full"
        src={imageUrl}
        width={0}
        height={0}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        sizes="100vw"
      />
    </div>
  );
};

export default FullScreenImage;
