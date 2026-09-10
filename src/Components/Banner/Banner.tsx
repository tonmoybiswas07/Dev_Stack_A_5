import bannerImg from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-5 mt-26 md:mt-20 overflow-hidden ">
      <div className="banner-content w-full md:w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left">
          Build Your Ideal
        </h1>

        <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left bg-gradient-to-r from-[#ff5722] from-0% via-[#d81b7e] via-50% to-[#7c3aed] to-100% bg-clip-text text-transparent">
          Development Stack
        </h1>

        <p className="text-sm md:text-xl text-center md:text-left text-gray-700 mt-6 mb-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3 mx-2 md:mx-0">
          <button className="flex-1 text-[12px] md:text-base bg-gradient-to-r from-[#f97316] from-0% to-[#ec4899] to-100% border-2 border-transparent px-3 py-3 rounded-xl font-bold text-white">
            Explore Technologies
          </button>

          <button className="flex-1 text-[12px] md:text-base border-2 border-gray-400 px-3 py-3 rounded-xl text-black">
            Learn More
          </button>
        </div>
      </div>

      <div className="banner-img w-full md:w-1/2 flex justify-center">
        <img
          src={bannerImg}
          alt="Development stack"
          className="w-full max-w-md md:max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
