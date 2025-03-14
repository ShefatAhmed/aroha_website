import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Review = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Review spotlight
            </h2>
            <p className="max-w-lg text-muted-foreground">
              Here is a selection of four-star and five-star reviews from customers who were delighted with the products they found in this category.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {/* Hardcoded Review 1 */}
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm mb-2">
                  'These are the most adorable accessories to add to your car. They make me so happy each time I get in now! Perfectly made, and...'
                </p>
                <p className="text-xs text-gray-600">Summer Bryla</p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Car Accessories | Car Air Diffuser | Car...</p>
                </div>
              </div>
            </CarouselItem>

            {/* Hardcoded Review 2 */}
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm mb-2">
                  'I have very thick hair and find it difficult to find accessories to help secure it. However, due to the way this accessory is designed...'
                </p>
                <p className="text-xs text-gray-600">Cyndy</p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Best Hair Accessory for Thick Hair | Updo Hair Clips...</p>
                </div>
              </div>
            </CarouselItem>

            {/* Hardcoded Review 3 */}
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm mb-2">
                  'Very cute coasters and cute accessories.'
                </p>
                <p className="text-xs text-gray-600">Sign in with Apple user</p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Set of 2 Cute Car Coasters, Women Car Accessories...</p>
                </div>
              </div>
            </CarouselItem>

            {/* Hardcoded Review 4 */}
            <CarouselItem className="max-w-[320px] pl-[20px] lg:max-w-[360px]">
              <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl bg-white p-6 shadow-md">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm mb-2">
                  'Perfect! Great addition to my car accessories.'
                </p>
                <p className="text-xs text-gray-600">Jo Bennett</p>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">CarChap Junior Up Palm Holder (The Original, Natural Blending)...</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;