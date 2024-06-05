import suitcase from "@/assets/suitcase.svg";
import headerMain from "@/assets/headerMain.jpg";
import demoButton from "@/assets/demoButton.svg";

import company1 from "@/assets/company-1.svg";
import company2 from "@/assets/company-2.svg";
import company3 from "@/assets/company-3.svg";
import company4 from "@/assets/company-4.svg";
import company5 from "@/assets/company-5.svg";

export default function Header() {
  return (
    <div>
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center mt-10 px-10">
        <div className="max-w-lg w-full pl-16 mb-20">
          <div className="flex gap-3 text-[#F85E9F] mb-16 px-6 shadow-sm rounded-full max-w-fit py-3 text-sm font-bold">
            <h6>Explore the world!</h6>
            <img src={suitcase} alt="" />
          </div>
          <div className="mb-16">
            <h2 className="font-bold text-3xl  xl:text-7xl leading-tight">
              Travel <span className="text-[#F85E9F]">top destination</span> of
              the world
            </h2>
          </div>
          <div className="text-slate-500  text-xl pr-5">
            <p>We always make our customer happy by providing</p>
            <p>as many choices as possible</p>
            <div className="w-full max-w-sm mt-8 flex gap-4 justify-start text-sm text-white font-semibold">
              <button className="bg-[#5D50C6] rounded-full p-4 px-10 shadow-md">
                Get Started
              </button>
              <button className="p-4 px-10 rounded-full shadow-md text-black flex gap-2 items-center">
                <img src={demoButton} alt="" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={headerMain} alt="" className="w-[80%] xl:w-full" />
        </div>
      </div>
      <div className="flex flex-wrap gap-8 lg:gap-12 justify-center xl:justify-between px-24">
        <img src={company1} alt="Support Company" />
        <img src={company2} alt="Support Company" />
        <img src={company3} alt="Support Company" />
        <img src={company4} alt="Support Company" />
        <img src={company5} alt="Support Company" />
      </div>
    </div>
  );
}
