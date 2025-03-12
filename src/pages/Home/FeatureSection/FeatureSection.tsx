import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const FeatureSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium">Featured categories</h1>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/4H2MF75/96838ce217bb1ddd5e568fbb82dc41cf.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">Signs</h1>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/4RwNbJcj/e05c141995064af01a4fe5264080d456.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">
                    Digital Prints
                  </h1>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/HD86mbGv/image-4.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">
                    Wall Decor
                  </h1>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/1tT08cdS/image-2.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">Signs</h1>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/d057Brn9/image-4-1.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">
                    Wall Decor
                  </h1>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/PsVYg4Kg/image-2-1.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">Signs</h1>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 lg:basis-1/6">
                <div className="flex flex-col rounded-md aspect-square gap-2">
                  <img
                    src="https://i.ibb.co.com/HDx1ZJ7c/image-3-1.png"
                    alt=""
                    className="rounded-md h-56 object-cover"
                  />
                  <h1 className="text-left font-medium text-base">
                    Digital Prints
                  </h1>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
