import { GoStarFill } from "react-icons/go";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
const items = [
  { name: "On sale", number: 73 },
  { name: "Personalised Mini Bows", number: 6 },
  { name: "Personalised Large Bows", number: 8 },
  { name: "Bow Sets", number: 3 },
  { name: "Detachable Collars", number: 6 },
  { name: "Halloween", number: 2 },
  { name: "Christmas Bows", number: 18 },
  { name: "Hair Clips", number: 6 },
  { name: "Flower Girl Hair Bows", number: 1 },
  { name: "Bride To Bows", number: 1 },
];

const ShopDetails = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div>
        <img
          className="w-full max-h-[360px]"
          src="https://i.postimg.cc/bNs7mGqG/isbl-1680x420-73902613-7j122b8n-jpg.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-12 gap-4 items-center px-5 bg-white py-10">
        <div className="col-span-5 flex items-center gap-2">
          <img
            src="https://i.postimg.cc/d3XSbBJh/isla-200x200-61828241-bygt1z56-jpg.png"
            alt=""
          />
          <div>
            <h1 className="font-bold text-2xl">TeenyWeenyThingsUK</h1>
            <p>Personalised Hair Bows and Hand Embroidered Accessories</p>
            <p>London, United Kingdom</p>
            <div className="flex items-center gap-2">
              <p>3,446 Sales</p>
              <div className="flex">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <img src="https://i.postimg.cc/zfX6R32X/Vector.png" alt="" />
          <h1>Rave reviews</h1>
          <h1>Average review rating is 4.8 or higher</h1>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <img
            src="https://i.postimg.cc/DZRMD6v8/iusa-100x100-88408604-ohl8-jpg.png"
            alt=""
          />
          <h1>Ece</h1>
          <div className="flex items-center gap-2">
            <MdMailOutline />
            <p> Contact</p>
          </div>
        </div>
      </div>
      <div className="px-5 pt-10">
        <h1 className="font-medium">About</h1>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="md:px-0 px-5">
        <header className="flex flex-col md:flex-row justify-between items-center p-5 bg-white mt-2">
          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="font-semibold">
              Items
            </a>
            <a href="#" className="text-gray-500">
              Reviews
            </a>
          </nav>
          <div className="relative w-full md:w-64 items-center">
            <input
              type="text"
              placeholder="Search all 89 items"
              className="bg-gray-200 rounded-full px-4 py-2 w-full font-normal text-base"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">
              <IoSearch />
            </span>
          </div>
        </header>
        <div className="flex flex-col md:flex-row justify-between mt-6 px-5">
          <aside className="w-full md:w-1/4 border-r-2 hidden md:block">
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-r-2 border-black py-2 pr-2 font-normal text-base">
                <span>All</span>
                <span>89</span>
              </li>
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 pr-2 font-normal text-base"
                >
                  <span>{item.name}</span>
                  <span>{item.number}</span>
                </li>
              ))}
            </ul>
          </aside>
          <main className="w-full md:w-3/4 pl-6">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">Featured Items</h2>
              <span className="flex items-center gap-1 font-medium text-base">
                Sort: Custom <IoMdArrowDropdown />
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
            </div>
            <h2 className="font-semibold text-lg mt-6 mb-4">All Items</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/zDb6DxD/il-600x600-6054692229-s78b-jpg.png"
                  alt=""
                  className="w-full rounded-t-2xl rounded-b-sm"
                />
                <h1 className="mt-1">Baby Blanket, Baby gift, Baby Show…</h1>
                <div className="flex items-center gap-2">
                  <h1 className="text-[#0F743B] font-medium text-base">
                    $14.99
                  </h1>
                  <h2 className="text-sm">
                    <span className="line-through">$29.99</span> (30% off)
                  </h2>
                </div>
                <p className="font-medium text-[11px] bg-[#A0E193] inline-block rounded-full px-2">
                  FREE shipping
                </p>
              </div>
            </div>
            <div className="flex space-x-1 my-5">
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
                <GrFormNextLink />
              </button>
            </div>
          </main>
        </div>
      </div>
      <hr className="border border-black" />
      <div className="md:px-0 px-5">
        <div className="flex flex-col md:flex-row justify-between mt-6 pr-5">
          <aside className="w-full md:w-1/4 hidden md:block">
            <h1 className="font-medium">Reviews</h1>
          </aside>
          <main className="w-full md:w-3/4 pl-6">
            <div className="flex justify-between items-center  text-[13.13px]">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Average item review </h2>
                <div>
                  <ul className="flex items-end gap-1">
                    <li className="flex items-center">
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                    </li>
                    <li>(503)</li>
                  </ul>
                </div>
              </div>
              <span className="flex items-center gap-1 font-medium text-base">
                Sort by: Suggested <IoMdArrowDropdown />
              </span>
            </div>
            <div className="">
              <div className="flex gap-4 items-start my-5">
                <img src="https://i.postimg.cc/wxDB2TQQ/iusa-75x75-85458995-9xok-jpg.png" alt="" />
                <div className="flex flex-col gap-2">
                  <ul className="flex gap-1">
                    <li className="underline">Mia Sofia Designs</li>
                    <li>on Nov 9, 2024</li>
                  </ul>
                  <ul>
                    <li className="flex items-center">
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                      <GoStarFill />
                    </li>
                  </ul>
                  <p>Absolutely gorgeous bow. I'm so excited to give it to my daughter in December!</p>
                  <div className="flex gap-2 items-center">
                    <img src="https://i.postimg.cc/MH0KpdpF/il-170x135-6413662535-gbb3-jpg.png" alt="" />
                    <p>Pink Candy Cane Hair Bow, Christmas Hair Bow for Girls, Candy Cane Embroidered Hair Bow,
                    Festive Hair Clip, Christmas Hair Accessories</p>
                  </div>
                  <hr className="mt-10 border border-[#0E0E0E2E]" />
                </div>
              </div>
            </div>
            <div className="flex space-x-1 my-5">
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
                <GrFormNextLink />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
