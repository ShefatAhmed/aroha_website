const ExtraordinarySection = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-medium  mb-6">
      Shop extraordinary items at special prices
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/Fkx2CcwY/Container-3.png"
            alt="Scorpio Gift"
            className="w-full object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-medium ">Scorpio Gifts</h2>
            <p className="font-medium">Up to 30% off</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/GfJDFRzR/Container.png"
            alt="Scorpio Gift"
            className="w-full object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-medium ">Personalized Sweatshirts</h2>
            <p className="font-medium">Up to 30% off</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/7dpRnMgv/Container-1.png"
            alt="Scorpio Gift"
            className="w-full object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-medium ">Custom Pet Portraits</h2>
            <p className="font-medium">Up to 30% off</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/bM6m2Rqh/Container-2.png"
            alt="Scorpio Gift"
            className="w-full object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-medium ">Advent Calendars</h2>
            <p className="font-medium">Up to 30% off</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://i.ibb.co.com/HT5gttsF/il-300x300-3674914009-6afe-jpg.png"
            alt="Scorpio Gift"
            className="w-full object-cover"
          />
          <div className="p-2">
            <h2 className="text-base font-medium ">Wreaths</h2>
            <p className="font-medium">Up to 30% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraordinarySection;
