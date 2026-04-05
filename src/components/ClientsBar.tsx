"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface ClientLogo {
  id: string;
  name: string;
}

const clients: ClientLogo[] = [
  { id: "1", name: "Artel Electronics" },
  { id: "2", name: "UzAuto Motors" },
  { id: "3", name: "Hamkorbank" },
  { id: "4", name: "Ucell" },
  { id: "5", name: "Orient Group" },
  { id: "6", name: "Coca-Cola Uzbekistan" },
  { id: "7", name: "Nestlé Central Asia" },
  { id: "8", name: "Hilton Tashkent" },
  { id: "9", name: "PwC Uzbekistan" },
  { id: "10", name: "Deloitte Central Asia" },
  { id: "11", name: "EBRD" },
  { id: "12", name: "IFC" },
];

export default function ClientsBar() {
  return (
    <section className="py-14 md:py-20 bg-surface border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="tracking-luxury text-muted-dark text-center mb-10">
          Trusted by leading organizations
        </p>
      </div>
      <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
        <Carousel
          opts={{ loop: true, dragFree: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 0.5, stopOnInteraction: false })]}
        >
          <CarouselContent className="ml-0">
            {clients.map((client) => (
              <CarouselItem
                key={client.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="mx-6 md:mx-10 flex shrink-0 items-center justify-center">
                  <span className="text-sm md:text-base font-light tracking-[0.1em] text-muted-dark whitespace-nowrap uppercase select-none">
                    {client.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
