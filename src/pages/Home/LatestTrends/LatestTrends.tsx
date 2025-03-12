const LatestTrends = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium">
        Discover the latest trends from small shops
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-4 text-center px-4">
        <div className="flex flex-col items-center gap-2 col-span-1">
          <img
            src="https://i.ibb.co.com/63KsdTK/5002a0518c8ffa003874a9f4c69fc60d.png"
            alt="Heirloom Era"
            className="h-40 w-40 rounded-full"
          />
          <h1 className="text-base px-8">Heirloom Era</h1>
        </div>
        <div className="flex flex-col items-center gap-2 col-span-1">
          <img
            src="https://i.ibb.co.com/QWvT1fR/il-300x300-6406040735-et43-jpg.png"
            alt="Vintage Barn Jackets"
            className="h-40 w-40 rounded-full"
          />
          <h1 className="text-base px-8">Vintage Barn Jackets</h1>
        </div>
        <div className="flex flex-col items-center gap-2 col-span-1">
          <img
            src="https://i.ibb.co.com/B26Gb4Qr/il-300x300-6153472233-81o8-jpg.png"
            alt="Lab Grown Engagement Rings"
            className="h-40 w-40 rounded-full"
          />
          <h1 className="text-base px-8">Lab Grown Engagement Rings</h1>
        </div>
        <div className="flex flex-col items-center gap-2 col-span-1">
          <img
            src="https://i.ibb.co.com/yF1npP1q/il-300x300-6200065849-s06d-jpg.png"
            alt="Olive-core"
            className="h-40 w-40 rounded-full"
          />
          <h1 className="text-base px-8">Olive-core</h1>
        </div>
        <div className="flex flex-col items-center gap-2 col-span-1">
          <img
            src="https://i.ibb.co.com/Cs0v6X64/il-300x300-3655473308-tto5-jpg.png"
            alt="Chunky Blankets"
            className="h-40 w-40 rounded-full"
          />
          <h1 className="text-base px-8">Chunky Blankets</h1>
        </div>
        <div className="flex flex-col items-center gap-2 col-span-1">
          <img
            src="https://i.ibb.co.com/4Rj4cDNZ/il-300x300-5891487780-a653-jpg.png"
            alt="Bangles"
            className="h-40 w-40 rounded-full"
          />
          <h1 className="text-base px-8">Bangles</h1>
        </div>
      </div>
    </div>
  );
};

export default LatestTrends;
