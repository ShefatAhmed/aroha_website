const HolidayDeals = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center mt-5 gap-5">
      <div className="col-span-4 md:col-span-2 lg:col-span-2 flex flex-col justify-center space-y-4 text-center md:text-left ml-[5%] md:pl-0">
        <p className="text-base font-medium text-gray-600">Editors’ Picks</p>
        <h1 className="text-2xl font-medium text-gray-900">Holiday Deals</h1>
        <p className="text-gray-700 text-base font-normal">
          Get into the spirit with up to 40% off holiday <br />
          savings!
        </p>
      </div>
      <img
        src="https://i.ibb.co/q3GpY9c3/Background-3.png"
        alt=""
        className="col-span-4 md:col-span-2 lg:col-span-1 w-full h-auto rounded-lg object-cover"
      />
      <img
        src="https://i.ibb.co/BKTHvFgv/Background.png"
        alt=""
        className="col-span-4 md:col-span-2 lg:col-span-1 w-full h-auto rounded-lg object-cover"
      />
      <img
        src="https://i.ibb.co/TqdR2SVN/il-600x600-4242194639-hjot-jpg.png"
        alt=""
        className="col-span-4 md:col-span-2 lg:col-span-1 w-full h-auto rounded-lg object-cover"
      />
      <img
        src="https://i.ibb.co/9HxB2g3n/Background-1.png"
        alt=""
        className="col-span-4 md:col-span-2 lg:col-span-1 w-full h-auto rounded-lg object-cover"
      />
      <img
        src="https://i.ibb.co/1t2RHgwj/Link.png"
        alt=""
        className="col-span-4 md:col-span-2 lg:col-span-1 w-full h-auto rounded-lg object-cover"
      />
      <img
        src="https://i.ibb.co/M5RP5qdy/Background-2.png"
        alt=""
        className="col-span-4 md:col-span-2 lg:col-span-1 w-full h-auto rounded-lg object-cover"
      />
    </div>
  );
};

export default HolidayDeals;
