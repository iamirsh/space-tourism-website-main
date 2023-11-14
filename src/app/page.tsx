import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen bg-home-mobile lg:bg-home-tablet sm:bg-home-desktop px-4">
      {/* Navbar */}

      <div className="flex flex-col justify-around items-center lg:flex-row">
        <div className="w-1/2 lg:w-1/3">
          <h3 className="text-[#D0D6F9] text-[28px] tracking-[4.725px] font-normal font-BarlowCondensed">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="text-[150px] font-bellefair">SPACE</h1>
          <p className="font-Barlow">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:h-[274px] lg:w-[274px] h-[150px] w-[150px] bg-white rounded-full relative m-10">
            <h3 className="text-black absolute top-16 left-7 lg:top-28 lg:left-16 lg:text-[32px] text-[20px] tracking-[2px] font-normal font-bellefair">EXPLORE</h3>
        </div>
      </div>
    </div>
  );
}
