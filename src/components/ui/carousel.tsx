"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  className?: string;
}

function Carousel({
  opts,
  plugins,
  orientation = "horizontal",
  children,
  className,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );

  return (
    <div className={cn("overflow-hidden", className)} ref={emblaRef}>
      {children}
    </div>
  );
}

function CarouselContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("flex", className)}>{children}</div>;
}

function CarouselItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0", className)}>{children}</div>
  );
}

export { Carousel, CarouselContent, CarouselItem };
