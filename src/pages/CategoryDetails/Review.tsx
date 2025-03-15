import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlineQuestionCircle } from "react-icons/ai";
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

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
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
            <h2 className="text-2xl font-medium flex items-center gap-2">
              Review spotlight{" "}
              <span className="text-[16px]">
                <AiOutlineQuestionCircle />
              </span>
            </h2>
            <p className="text-sm font-normal">
              Here is a selection of four-star and five-star reviews from
              customers who were delighted with the products they found in this
              category.
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
              className="disabled:pointer-events-auto rounded-full shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 p-2"
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
              className="disabled:pointer-events-auto rounded-full shadow- hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 p-2"
            >
              <ArrowRight className="size-5 text-gray-700 dark:text-white" />
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
          <CarouselContent className="ml-0 2xl:ml-[max(0rem)] 2xl:mr-[max(0rem)]">
            <CarouselItem className="w-[324px] max-w-[324px] min-h-[167px] rounded-xl">
              <div className="group relative h-full w-full overflow-hidden rounded-xl bg-white p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-[23px] h-[23px] rounded-full mr-3"
                    src="https://i.postimg.cc/QN7J8hNB/iusa-50x50-65765085-e3ad-jpg.png"
                    alt="User"
                  />
                  <div className="flex items-center gap-1">
                    <div className="font-medium text-[12.49px]">
                      Summer Bryla,{" "}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[12.49px] mb-4 font-normal">
                  "These are the most adorable accessories to add to your car.
                  They make me so happy each time I get in now! Perfectly made,
                  and…
                </p>
                <div className="flex gap-1 items-start">
                  <img
                    className="w-6 h-6 rounded"
                    src="https://i.postimg.cc/zf3T91PG/26999f0184343b7fc391f7ee528dd84c.png"
                    alt="Product"
                  />
                  <div>
                    <div className="text-[12.7px] font-normal">
                      CAR AIR FRESHENER | Plant Vent Clip | Car Accessories |
                      Car Oil Diffuser | Car…
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-[324px] max-w-[324px] min-h-[167px] rounded-xl">
              <div className="group relative h-full w-full overflow-hidden rounded-xl bg-white p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-[23px] h-[23px] rounded-full mr-3"
                    src="https://i.postimg.cc/NfshmNzx/default-avatar-png.png"
                    alt="User"
                  />
                  <div className="flex items-center gap-1">
                    <div className="font-medium text-[12.49px]">Cyndy, </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[12.49px] mb-4 font-normal">
                  "I have very thick hair and find it difficult to find
                  accessories to help secure it. However, due the the way this
                  accessory is designed,…
                </p>
                <div className="flex gap-1 items-start">
                  <img
                    className="w-6 h-6 rounded"
                    src="https://i.postimg.cc/dVMJZmGy/il-50x50-6405867993-rewd-jpg.png"
                    alt="Product"
                  />
                  <div>
                    <div className="text-[12.7px] font-normal">
                    Best Hair Accessory for Updos, hair clip,
                    fork, hair pin, hair accessory, stick, com…
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-[324px] max-w-[324px] min-h-[167px] rounded-xl">
              <div className="group relative h-full w-full overflow-hidden rounded-xl bg-white p-6 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    className="w-[23px] h-[23px] rounded-full mr-3"
                    src="https://i.postimg.cc/NfshmNzx/default-avatar-png.png"
                    alt="User"
                  />
                  <div className="flex items-center gap-1">
                    <div className="font-medium text-[12.49px]">
                    Sign in with Apple user,
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[12.49px] mb-4 font-normal">
                "very cute coasters cute accessories"
                </p>
                <div className="flex gap-1 items-start">
                  <img
                    className="w-6 h-6 rounded"
                    src="https://i.postimg.cc/nh0ZS86v/il-50x50-5324413579-auiw-jpg-1.png"
                    alt="Product"
                  />
                  <div>
                    <div className="text-[12.7px] font-normal">
                    Set of 2 Punch Needle Car Coasters,Cute
                    Women Car Accessories,Car Decor…
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-[324px] max-w-[324px] min-h-[167px] rounded-xl">
              <div className="group relative h-full w-full overflow-hidden rounded-xl bg-white p-6 flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <img
                    className="w-[23px] h-[23px] rounded-full mr-3"
                    src="https://i.postimg.cc/jqQ0WVZ5/iusa-50x50-95777512-568j-jpg.png"
                    alt="User"
                  />
                  <div className="flex items-center gap-1">
                    <div className="font-medium text-[12.49px]">
                    Jo Bennett,{" "}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[12.49px] mb-4 font-normal">
                "Perfect! Great addition to my car
                accessories"
                </p>
                <div className="flex gap-1 items-start">
                  <img
                    className="w-6 h-6 rounded"
                    src="https://i.postimg.cc/1RWB7JzB/il-50x50-5160696174-ltaf-jpg.png"
                    alt="Product"
                  />
                  <div>
                    <div className="text-[12.7px] font-normal">
                    CarChap upright Lip Balm Holder (the
                      Original, PatentPending) Chapstick…
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
