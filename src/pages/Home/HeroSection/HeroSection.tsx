import { useState } from "react";
import { GrLinkNext, GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image:
        "https://i.ibb.co.com/BXWCZwW/7ca2bee359f8970b244821581251ab1d.png",
      title: "Personlaized Pet Mug With Custom Name",
      price: "$46.01",
      discount: "$61.34",
      Offer: "25% Off",
    },
    {
      image:
        "https://i.ibb.co.com/BXWCZwW/7ca2bee359f8970b244821581251ab1d.png",
      title: "Personlaized Pet Mug With Custom Name",
      price: "$46.01",
      discount: "$61.34",
      Offer: "25% Off",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="relative">
      <div className="max-w-full mx-auto border border-gray-300 rounded-lg overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full grid grid-cols-1 md:grid-cols-6 items-center justify-center text-center bg-[#D2B48C] gap-2 p-5 md:p-0"
            >
              <div className="md:col-span-3 text-left px-5 md:px-[10%]">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 mt-5 md:mt-10">
                  <p className="text-2xl md:text-3xl font-extrabold">
                    {slide.price}
                  </p>
                  <p className="text-xl md:text-2xl">
                    {slide.discount} ({slide.Offer})
                  </p>
                </div>
                <div className="mt-5 md:mt-10">
                  <Link
                    to="/"
                    className="btn border border-black px-4 py-2 w-full md:w-[50%] rounded-xl flex items-center justify-center gap-2 font-medium text-xl md:text-3xl"
                  >
                    Shop Now <GrLinkNext />
                  </Link>
                </div>
              </div>
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover md:col-span-3"
                  style={{
                    borderRadius: "100px 0 0 100px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 lg:left-[-25px] transform -translate-y-1/2 bg-white shadow-xl text-black p-3 md:p-5 rounded-full hover:bg-gray-200 transition-colors"
      >
        <GrPrevious />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 lg:right-[-25px] transform -translate-y-1/2 bg-white shadow-xl text-black p-3 md:p-5 rounded-full hover:bg-gray-200 transition-colors"
      >
        <GrNext />
      </button>
    </div>
  );
};

export default HeroSection;
