import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
  
  const Mustangs = [
    { src: '/src/assets/portfolio/portfolio-1.jpg', alt: 'Mustang 1' },
    { src: '/src/assets/portfolio/portfolio-2.jpg', alt: 'Mustang 2' },
    { src: '/src/assets/portfolio/portfolio-3.jpg', alt: 'Mustang 3' },
    { src: '/src/assets/portfolio/portfolio-4.jpg', alt: 'Mustang 4' },
    { src: '/src/assets/portfolio/portfolio-5.jpg', alt: 'Mustang 5' },
    { src: '/src/assets/portfolio/portfolio-6.jpg', alt: 'Mustang 6' },
    { src: '/src/assets/portfolio/portfolio-7.jpg', alt: 'Mustang 7' },
    { src: '/src/assets/portfolio/portfolio-8.jpg', alt: 'Mustang 8' },
    { src: '/src/assets/portfolio/portfolio-9.jpg', alt: 'Mustang 9' },
    { src: '/src/assets/portfolio/portfolio-10.jpg', alt: 'Mustang 10' },
    { src: '/src/assets/portfolio/portfolio-11.jpg', alt: 'Mustang 11' },
    { src: '/src/assets/portfolio/portfolio-12.jpg', alt: 'Mustang 12' },
    { src: '/src/assets/portfolio/portfolio-13.jpg', alt: 'Mustang 13' },
    { src: '/src/assets/portfolio/portfolio-14.jpg', alt: 'Mustang 14' },
    { src: '/src/assets/portfolio/portfolio-15.jpg', alt: 'Mustang 15' },
    { src: '/src/assets/portfolio/portfolio-16.jpg', alt: 'Mustang 16' },
    { src: '/src/assets/portfolio/portfolio-17.jpg', alt: 'Mustang 17' },
    { src: '/src/assets/portfolio/portfolio-18.jpg', alt: 'Mustang 18' },
    { src: '/src/assets/portfolio/portfolio-19.jpg', alt: 'Mustang 19' },
  ];
  interface InteractiveCarouselProps {
    nImages: number;
    startImage: number
  }

export function InteractiveCarousel({nImages, startImage}: InteractiveCarouselProps) {
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
                {Mustangs.slice(startImage, startImage + nImages).map((Mustang, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={Mustang.src} alt={Mustang.alt} className="w-full h-full object-cover" />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      )
}
