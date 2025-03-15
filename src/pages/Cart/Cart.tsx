import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

const Cart = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Your cart</h2>
      <div className=" p-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8">
          <div className="border border-[#0E0E0E2E] rounded-lg">
            <div>
              <div className="flex items-center gap-2 py-5">
                <img
                  src="https://i.ibb.co.com/TBkvC32y/Link-shop-smallcdesigns.png"
                  alt=""
                />
                <p>smallcdesigns</p>
                <div className="flex text-[4.5px]">
                  <GoDotFill />
                  <GoDotFill />
                  <GoDotFill />
                </div>
              </div>
              <div className="flex justify-between items-start w-full px-5">
                <div className="flex gap-4">
                  <img
                    src="https://i.ibb.co.com/twtZVnhT/Link-Tiny-Needle-Felted-Chicken-Handmade-Gift-Idea-This-link-opens-in-a-new-tab-or-window.png"
                    alt="Tiny Needle Felted Chicken"
                    className="w-[199.94px] h-[158.76px] rounded"
                  />
                  <div className="flex flex-col justify-between gap-2 w-3/4">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-base font-normal">
                        Tiny Needle Felted Chicken Handmade Gift Idea
                      </h1>
                      <ul className="flex gap-2">
                        <li className="bg-[#EAEAEA] px-2 rounded-full font-medium">
                          Primary color: Assorted
                        </li>
                        <li className="bg-[#EAEAEA] px-2 rounded-full font-medium">
                          Flock Size: 8 chickens
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="font-medium text-[13px]">Edit</button>
                      <button className="font-medium text-[13px]">
                        Save for Later
                      </button>
                      <button className="font-medium text-[13px]">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-2"></div>
                  <div className="text-right">
                    <div className="bg-[#A0E193] text-center font-medium text-[10.66px] rounded-full inline-block px-1">
                      <p>25% off</p>
                    </div>
                    <p className="text-[#0F743B] text-[19px] font-medium">
                      USD 80.68
                    </p>
                    <p className="line-through text-[13px]">USD 107.57</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <hr className="border-[#0E0E0E2E]" />
              <div className="flex justify-between mt-2 pb-5 pt-10 px-5">
                <h1 className="flex items-center gap-2 font-medium text-[15.5px]">
                  Shipping: USD 16.90 (Standard International) Stand{" "}
                  <IoMdArrowDropdown />
                </h1>
                <h1 className="flex items-center gap-2 font-medium text-[15.63px]">
                  Check out for this shop only <FaArrowRight />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <h3 className="text-lg font-medium mb-2">How you'll pay</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="radio"
              name="payment"
              className="w-8 h-8 border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
              style={{ accentColor: "white" }}
              checked
              readOnly
            />
            <img src="https://i.ibb.co.com/Nd7tv8tH/Item.png" alt="" />
          </div>
          <div className="flex gap-2 mb-4">
            <input
              type="radio"
              name="payment"
              className="w-8 h-8 border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
              style={{ accentColor: "white" }}
              checked
              readOnly
            />
            <img
              src="https://i.ibb.co.com/6cfnfycX/Background-Border-Shadow.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 mb-4">
            <input
              type="radio"
              name="payment"
              className="w-8 h-8 border-2 border-gray-300 focus:ring-0 focus:ring-offset-0"
              style={{ accentColor: "white" }}
              checked
              readOnly
            />
            <img
              src="https://i.ibb.co.com/zhC4VQ1k/Background-Border-Shadow-1.png"
              alt=""
            />
          </div>

          <div className="flex justify-between text-gray-700 text-sm mb-5">
            <p>Item(s) total</p>
            <p>USD 143.59</p>
          </div>
          <div className="flex justify-between text-gray-700 text-sm mb-5">
            <p>Shop discount</p>
            <p>-USD 28.69</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-700 text-sm font-semibold mt-2 mb-5">
            <p>Subtotal</p>
            <p>USD 114.90</p>
          </div>
          <div className="flex justify-between text-gray-700 text-sm mb-5">
            <p className="flex flex-col">Shipping <span>(To Bangladesh)</span></p>
            <p>USD 51.61</p>
          </div>
          <hr />
          <div className="flex justify-between text-gray-900 mt-4">
            <p>Total (3 items)</p>
            <p>USD 166.51</p>
          </div>
          <button className="w-full bg-[#3E4E50] text-white text-[15.38px] font-medium py-2 rounded-full mt-4 hover:bg-green-800">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
