import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
    return (
        <footer className="bg-[#37494F] text-white pt-10 pb-16">
        <div className="container mx-auto px-28">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">Shop</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discounted products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sell</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Sell on Etsy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About Aroha
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Help</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
              </ul>
              <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaPinterestP />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <RxCross2 />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;