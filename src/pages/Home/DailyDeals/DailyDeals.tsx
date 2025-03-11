import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/components/ui/carousel";
import { GiRoundStar } from "react-icons/gi";

const DailyDeals = () => {
  return (
    <div className="relative w-full px-4 mt-5">
      <Carousel>
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-2xl font-semibold">
            Amazing deals, updated daily
          </h1>
          <CarouselNavigation
            className="absolute -top-0 left-auto w-full justify-end gap-2 padding-top: 20px;
"
            classNameButton="bg-white shadow-xl *:stroke-black-500 dark:bg-zinc-200 dark:*:stroke-zinc-800 w-[48px] h-[48px] flex items-center justify-center"
            alwaysShow
          />
        </div>
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-1/2 md:basis-1/6  pl-4">
            <div className="">
              <img
                src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                alt=""
                className="w-full rounded-2xl"
              />
              <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#D98E73] font-semibold text-base">
                  $14.99
                </h1>
                <h2 className="text-sm">
                  <span className="line-through">$29.99</span> (30% off)
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">4.9</p>
                <p>
                  <GiRoundStar />
                </p>
                <p>(747)</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/6 pl-4">
            <div className="">
              <img
                src="https://i.ibb.co.com/8DLbBbNV/il-600x600-5909852224-5xm4-jpg.png"
                alt=""
                className="w-full rounded-2xl"
              />
              <h1 className="mt-1">Personlaized Pet Mug Custom Your …</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#D98E73] font-semibold text-base">
                  $46.01
                </h1>
                <h2 className="text-sm">
                  <span className="line-through">$61.34</span> (25% off)
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">5.0</p>
                <p>
                  <GiRoundStar />
                </p>
                <p>(201)</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/6 pl-4">
            <div className="">
              <img
                src="https://i.ibb.co.com/fzBnzF14/il-600x600-5505587490-d68e-jpg.png"
                alt=""
                className="w-full rounded-2xl"
              />
              <h1 className="mt-1">Christmas Stocking Name Tags, Chr…</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#D98E73] font-semibold text-base">
                  $7.56
                </h1>
                <h2 className="text-sm">
                  <span className="line-through">$12.60</span> (40% off)
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">4.9</p>
                <p>
                  <GiRoundStar />
                </p>
                <p>(14,719)</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/6 pl-4">
            <div className="">
              <img
                src="https://i.ibb.co.com/yr9rH5F/Background.png"
                alt=""
                className="w-full rounded-2xl"
              />
              <h1 className="mt-1">Christmas Stocking Name Tags, Chr…</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#D98E73] font-semibold text-base">
                  $4.74
                </h1>
                <h2 className="text-sm">
                  <span className="line-through">$9.49</span> (50% off)
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">4.8</p>
                <p>
                  <GiRoundStar />
                </p>
                <p>(7,874)</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/6 pl-4">
            <div className="">
              <img
                src="https://i.ibb.co.com/1GLYPwJy/il-600x600-3461592166-63nr-jpg.png"
                alt=""
                className="w-full rounded-2xl"
              />
              <h1 className="mt-1">November Birthstone Necklace Citri…</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#D98E73] font-semibold text-base">
                  $31.50
                </h1>
                <h2 className="text-sm">
                  <span className="line-through">$42.00</span> (25% off)
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">4.6</p>
                <p>
                  <GiRoundStar />
                </p>
                <p>(4,740)</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/6 pl-4">
            <div className="">
              <img
                src="https://i.ibb.co.com/gbsT3kFm/ddfe504f7c89efec6ea98ba3735167be.png"
                alt=""
                className="w-full rounded-2xl"
              />
              <h1 className="mt-1">Citrine Birthstone Ring by Caitlyn M</h1>
              <div className="flex items-center gap-2">
                <h1 className="text-[#D98E73] font-semibold text-base">
                  $24.50
                </h1>
                <h2 className="text-sm">
                  <span className="line-through">$35.00</span> (25% off)
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">4.8</p>
                <p>
                  <GiRoundStar />
                </p>
                <p>(650,366)</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default DailyDeals;
