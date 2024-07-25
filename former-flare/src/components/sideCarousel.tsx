import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
  
  const images = [
    { src: '/src/assets/portfolio/portfolio-1.jpg', alt: 'Image 1' },
    { src: '/src/assets/portfolio/portfolio-2.jpg', alt: 'Image 2' },
    { src: '/src/assets/portfolio/portfolio-3.jpg', alt: 'Image 3' },
    { src: '/src/assets/portfolio/portfolio-4.jpg', alt: 'Image 4' },
    { src: '/src/assets/portfolio/portfolio-5.jpg', alt: 'Image 5' },
    { src: '/src/assets/portfolio/portfolio-6.jpg', alt: 'Image 6' },
    { src: '/src/assets/portfolio/portfolio-7.jpg', alt: 'Image 7' },
    { src: '/src/assets/portfolio/portfolio-8.jpg', alt: 'Image 8' },
    { src: '/src/assets/portfolio/portfolio-9.jpg', alt: 'Image 9' },
    { src: '/src/assets/portfolio/portfolio-10.jpg', alt: 'Image 10' },
    { src: '/src/assets/portfolio/portfolio-11.jpg', alt: 'Image 11' },
    { src: '/src/assets/portfolio/portfolio-12.jpg', alt: 'Image 12' },
    { src: '/src/assets/portfolio/portfolio-13.jpg', alt: 'Image 13' },
    { src: '/src/assets/portfolio/portfolio-14.jpg', alt: 'Image 14' },
  ];

export function InteractiveCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 200, stopOnInteraction: true })
      )
    return (
        <Carousel
            opts={{
                align: "center",
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                axis: "y",
                loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            orientation="vertical"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {images.slice(0, 3).map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      )
}
