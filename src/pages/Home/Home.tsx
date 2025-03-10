import React from "react";
import DailyDeals from "./DailyDeals/DailyDeals";

const Home = () => {
  return (
    <div>
      <h1 className="font-extrabold text-9xl text-center">Carousel!</h1>
      <h1 className="font-extrabold text-9xl text-center">
        Features Category!
      </h1>
      <h1 className="font-extrabold text-9xl text-center">
        Discover the latest trends!
      </h1>
      <DailyDeals />
      <h1 className="font-extrabold text-9xl text-center">Holiday Deals!</h1>
      <h1 className="font-extrabold text-9xl text-center">
        Shop extraordinary!
      </h1>
    </div>
  );
};

export default Home;
