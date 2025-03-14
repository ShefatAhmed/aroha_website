import { FaStar } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdStars } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Review from "./Review";

const CategoryDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div>
        <div className="flex justify-between items-center w-full px-4 py-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black text-sm font-medium transition">
            <HiOutlineAdjustmentsHorizontal />
            All Filters
          </button>
          <div className="relative flex items-center gap-2">
            <span className="text-sm text-gray-700 hidden sm:block">
              (1,000+ results)
            </span>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-black text-sm font-medium transition">
              Sort by: Relevancy
              <TiArrowSortedDown />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-12 md:px-0 px-4">
          <div className="max-w-[327px] max-h-[355px] bg-white flex flex-col justify-between">
            <img
              src="https://i.ibb.co.com/Mxg0hCc4/il-340x270-6455162641-p7ev-jpg.png"
              alt=""
              className="w-full"
            />
            <div className="mb-1">
              <h1 className="text-sm">
                Personalized Pet Name Keychain with Paw, Cu…
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$9.37</p>
                <p className="text-xs font-normal text-[#D98E73]">
                  <span className="line-through">$16.43 </span>(43% off)
                </p>
              </div>
              <p className="text-xs font-normal">ad by Puppyhug</p>
              <p className="font-medium text-[11px] bg-[#FFD1C1] inline-block rounded-full px-2">
                FREE shipping
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/mFN6vsTw/Overlay-Shadow.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                British Tan Leather Belt With Square Brass Buc…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(166)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$59.95</p>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/JwXL2xf0/il-340x270-5835335975-gpov-jpg.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Shotgun Key Chain - Shotgun Beer Can - Mad…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(173)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$6.99</p>
              </div>
              <p className="font-medium text-[11px] bg-[#FFD1C1] inline-block rounded-full px-2">
                FREE shipping
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/G4MFBwGc/il-340x270-5854409293-m2nr-jpg.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Personalised Crystal Keyring | Rose Quartz Ke…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(3,683)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$6.38</p>
                <p className="text-xs font-normal text-[#D98E73]">
                  <span className="line-through">$7.16 </span>(11% off)
                </p>
              </div>
              <p className="text-xs font-normal">NeveleOfficial</p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px]  rounded-lg">
            <img
              src="https://i.ibb.co.com/nMyf8V10/Background-3.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Personalised Letter Flower Resin Keychain, Ch…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(3,713)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$10.14</p>
              </div>
              <p className="text-xs font-normal">ResinDesignsbyEmma</p>
              <p className="font-medium text-[11px] bg-[#D2B48C] inline-block rounded-full px-2">
                Aroha’s Pick
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px]  rounded-lg">
            <img
              src="https://i.ibb.co.com/cXJgTq2t/Background-1.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">Teddy Sherpa Baseball Cap Ultra Soft</h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(76)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$36.00</p>
              </div>
              <p className="text-xs font-normal mb-1">TrickiApparel</p>
              <div className="inline-block">
                <p className="font-medium text-[11px] bg-[#FFD1C1]  rounded-full px-2">
                  FREE shipping
                </p>
                <p className="font-medium text-[11px] bg-[#D2B48C] rounded-full px-2 mt-1">
                  Aroha’s Pick
                </p>
              </div>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px]  rounded-lg">
            <img
              src="https://i.ibb.co.com/pjwf6Vtc/Background-4.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Charm Keychain, Custom Charm Car Keychain…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(510)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$16.00</p>
                <p className="text-xs font-normal text-[#D98E73]">
                  <span className="line-through">$16.43 </span>(43% off)
                </p>
              </div>
              <p className="text-xs font-normal">JoLynnByBrandy</p>
              <p className="font-medium text-[11px] bg-[#D2B48C] inline-block rounded-full px-2">
                Aroha’s Pick
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/JjyGn98T/Background-2.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Pop on pen holder, Pen holder for lanyard - Fa…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(5,704)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$5.42</p>
              </div>
              <p className="text-xs font-normal">LittlehmakesShop</p>
              <p className="font-medium text-[11px] bg-[#D2B48C] inline-block rounded-full px-2">
                Aroha’s Pick
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/7x940MH6/Background.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Custom Chemistry Name Keychain Gift, Perio…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(833)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$6.93</p>
                <p className="text-xs font-normal text-[#0F743B]">
                  <span className="line-through">$9.90 </span>(30% off)
                </p>
              </div>
              <p className="text-xs font-normal">DearDiaryGifts</p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/1tYPSYn1/Background-1.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Custom Embroidered 3D Text Hat，Embroider…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(161)</span>
                <span className="flex items-center text-[#9560B8] text-xs font-medium">
                  <MdStars /> Star Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$10.80</p>
                <p className="text-xs font-normal text-[#0F743B]">
                  <span className="line-through">$21.60 </span>(50% off)
                </p>
              </div>
              <p className="text-xs font-normal">CeramiccoFDIY</p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px]  rounded-lg">
            <img
              src="https://i.ibb.co.com/C3zPH4Vr/Overlay-Shadow.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                One More Game vs. Go to Sleep, Flip Coin, De…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(8,485)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$11.99</p>
                <p className="text-xs font-normal text-[#0F743B]">
                  <span className="line-through">$19.99 </span>(40% off)
                </p>
              </div>
              <p className="text-xs font-normal">SchepperDesign</p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/1Gynmh66/Background-2.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Custom hand punched brass tag - hand stamp…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(23,634)</span>
                <span className="flex items-center text-[#9560B8] text-xs font-medium">
                  <MdStars /> Star Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$8.00</p>
              </div>
              <p className="text-xs font-normal">aVintageParcel</p>
              <p className="font-medium text-[11px] bg-[#D2B48C] inline-block rounded-full px-2">
                Aroha’s Pick
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/C3M9pP5y/il-340x270-5143283286-6frr-jpg.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Personalised Wristlet Keyring, monogrammed …
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(1,772)</span>
                <span className="flex items-center text-[#9560B8] text-xs font-medium">
                  <MdStars /> Star Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$9.46</p>
              </div>
              <p className="text-xs font-normal">CraftedMemoriesbyGH</p>
              <p className="font-medium text-[11px] bg-[#D2B48C] inline-block rounded-full px-2">
                Aroha’s Pick
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/chbjC4fZ/Background-3.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Personalized Embroidered Beanie Winter Hat …
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(3,820)</span>
                <span className="flex items-center text-[#9560B8] text-xs font-medium">
                  <MdStars /> Star Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$9.90</p>
                <p className="text-xs font-normal text-[#0F743B]">
                  <span className="line-through">$24.75 </span>(60% off)
                </p>
              </div>
              <p className="text-xs font-normal">EmblifeDesign</p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/pBqpkQVG/Overlay-Shadow-1.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">Gabrielle hair scrunchie</h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(509)</span>
                <span className="flex items-center text-[#9560B8] text-xs font-medium">
                  <MdStars /> Star Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$4.51</p>
              </div>
              <p className="text-xs font-normal">MaiJoli</p>
              <p className="font-medium text-[11px] bg-[#D2B48C] inline-block rounded-full px-2">
                Aroha’s Pick
              </p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img
              src="https://i.ibb.co.com/zWNTtpy9/Overlay-Shadow-2.png"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-sm">
                Fall/autumn collection big fluffy satin scrunch…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(52)</span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$10.00</p>
              </div>
              <p className="text-xs font-normal">ad by ZueyBoutique</p>
            </div>
          </div>
          {/* --- */}
          <div className="max-w-[327px] max-h-[355px] rounded-lg">
            <img src="" alt="" className="w-full" />
            <div>
              <h1 className="text-sm">
                British Tan Leather Belt With Square Brass Buc…
              </h1>
              <div className="flex items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-600 text-sm">(166)</span>
                <span className="flex items-center text-[#9560B8] text-xs font-medium">
                  <MdStars /> Star Seller
                </span>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">$9.37</p>
                <p className="text-xs font-normal text-[#D98E73]">
                  <span className="line-through">$16.43 </span>(43% off)
                </p>
              </div>
              <p className="text-xs font-normal">ad by Puppyhug</p>
              <p className="font-medium text-[11px] bg-[#FFD1C1] inline-block rounded-full px-2">
                FREE shipping
              </p>
            </div>
          </div>
          {/* --- */}
        </div>
        <div>
          <h1 className="font-medium text-base my-5">
            There's so much more for you to discover
          </h1>
          <div className="flex space-x-1">
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center">
              <GrFormPreviousLink />
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium ml-2 border-2 border-black">
              1
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              2
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              3
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              4
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              5
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              6
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              7
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              8
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium pb-1">
              ...
            </button>
            <button className="rounded-full bg-[#0E0E0E17] min-w-9 min-h-9 flex items-center justify-center text-[13px] font-medium">
              <GrFormNextLink />
            </button>
          </div>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default CategoryDetails;
