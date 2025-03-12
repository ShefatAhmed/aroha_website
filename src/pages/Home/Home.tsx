import DailyDeals from "./DailyDeals/DailyDeals";
import ExtraordinarySection from "./ExtraordinarySection/ExtraordinarySection";
import FeatureSection from "./FeatureSection/FeatureSection";
import HeroSection from "./HeroSection/HeroSection";
import HolidayDeals from "./HolidayDeals/HolidayDeals";
import LatestTrends from "./LatestTrends/LatestTrends";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-0 ">
      <HeroSection />
      <FeatureSection />
      <LatestTrends />
      <DailyDeals />
      <HolidayDeals />
      <ExtraordinarySection />
    </div>
  );
};

export default Home;
