import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image'
import { BorderBeam } from "./magicui/border-beam";
 
const reviews = [
  {
    img: "/portfolio/portfolio-1.jpg",
  },
  {
    img: "/portfolio/portfolio-2.jpg",
  },
  {
    img: "/portfolio/portfolio-3.jpg",
  },
  {
    img: "/portfolio/portfolio-4.jpg",
  },
  {
    img: "/portfolio/portfolio-5.jpg",
  },
  {
    img: "/portfolio/portfolio-6.jpg",
  },
  {
    img: "/portfolio/portfolio-7.jpg",
  },
  {
    img: "/portfolio/portfolio-8.jpg",
  },
  {
    img: "/portfolio/portfolio-9.jpg",
  },
  {
    img: "/portfolio/portfolio-10.jpg",
  },
  {
    img: "/portfolio/portfolio-11.jpg",
  },
  {
    img: "/portfolio/portfolio-12.jpg",
  },
  {
    img: "/portfolio/portfolio-13.jpg",
  },
  {
    img: "/portfolio/portfolio-14.jpg",
  },
  {
    img: "/portfolio/portfolio-15.jpg",
  },
  {
    img: "/portfolio/portfolio-16.jpg",
  },
  {
    img: "/portfolio/portfolio-17.jpg",
  },
  {
    img: "/portfolio/portfolio-18.jpg",
  },
  {
    img: "/portfolio/portfolio-19.jpg",
  },
  {
    img: "/portfolio/portfolio-20.jpg",
  },
  {
    img: "/portfolio/portfolio-21.jpg",
  },
  {
    img: "/portfolio/portfolio-22.jpg",
  },
  {
    img: "/portfolio/portfolio-23.jpg",
  },
  {
    img: "/portfolio/portfolio-24.jpg",
  },
  {
    img: "/portfolio/portfolio-25.jpg",
  },
  {
    img: "/portfolio/portfolio-26.jpg",
  },
  {
    img: "/portfolio/portfolio-27.jpg",
  },
  {
    img: "/portfolio/portfolio-28.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative w-34 h-32 cursor-pointer overflow-hidden rounded-lg border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <Image alt="Portfolio" src={img} width={200} height={300} className="w-full h-full object-cover object-center"/>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <BorderBeam />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
