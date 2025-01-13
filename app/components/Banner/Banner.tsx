import Image from "next/image";
import RetroGrid from "../magicaluui/spc-grid";

const Banner = () => {
  return (
    <main className="bg-black min-h-screen">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl  lg:text-7xl md:4px lh-96">
              Empowering the world&apos;s largest network of innovators.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              SPC universe is an ecosystem building company that is on a mission
              to build a borderless world for digital innovators
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-bluee py-5 px-9 mt-2 leafbutton"
            >
              See our Portcos
            </button>
            <button
              type="button"
              className="text-15px ml-4 mt-2 text-[#AB45FF] transition duration-150 ease-in-out hover:text-white hover:bg-[#481251] font-medium py-5 px-16 border border-[#AB45FF] leafbutton    "
            >
              Get started
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-center pt-[-300px] items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="relative flex  size-full max-w-sm sm:max-w-sm md:max-w-lg lg:max-w-xl items-center justify-center overflow-hidden rounded-lg border  px-8 sm:px-2 md:px-20  pt-8  md:shadow-xl">
              <Image
                src={"/assets/banner/Earth.png"}
                alt="banner-image"
                width={1200}
                height={598}
              />
            </div>
            {/* <AnimatedListDemo /> */}
          </div>
        </div>
      </div>
      <RetroGrid className="z-0 absolute inset-0 max-w-[1000]" />
    </main>
  );
};

export default Banner;
