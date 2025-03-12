import DailyDeals from "./DailyDeals/DailyDeals";
import FeatureSection from "./FeatureSection/FeatureSection";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-0">
      <HeroSection />
      <FeatureSection />
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
