/* eslint-disable react/prop-types */
import destination1 from "@/assets/destination1.svg";
import destination2 from "@/assets/destination2.svg";
import destination3 from "@/assets/destination3.svg";
import star from "@/assets/star.svg";

import leftArrow from "@/assets/left-arrow.svg";
import rightArrow from "@/assets/right-arrow.svg";

export default function Destinations() {
  return (
    <div className=" mt-20 flex flex-col justify-center px-4 md:px-20 mb-32">
      <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center">
        <div className="flex-col gap-2 text-center sm:text-left">
          <h3 className="text-2xl uppercase text-[#F85E9F] font-bold tracking-widest">
            Top Destination
          </h3>
          <h5 className="text-4xl md:text-5xl font-bold">
            Explore top destination
          </h5>
        </div>
        <div className="flex gap-4">
          <button className="outline outline-1 outline-slate-100 rounded-full hover:bg-[#5D50C6] p-5 shadow-md">
            <img src={leftArrow} width={25} />
          </button>
          <button className="outline outline-1 outline-slate-100 rounded-full hover:bg-[#5D50C6] p-5 shadow-md">
            <img src={rightArrow} width={25} />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-14">
        <DestinationCard
          image={destination1}
          title="Paradise Beach, Bantayan Island"
          price="$550.16"
          place="Rome, Italy"
          rating="4.8"
        />
        <DestinationCard
          image={destination2}
          title="Ocean with full of Colors"
          price="$20.99"
          place="Maldives"
          rating="4.5"
        />
        <DestinationCard
          image={destination3}
          title="Mountain View, Above the cloud"
          price="$150.99"
          place="United Arab Emeries "
          rating="5.0"
        />
      </div>
    </div>
  );
}

const DestinationCard = ({ image, title, price, place, rating }) => {
  return (
    <div className="flex flex-col max-w-sm w-full shadow-md rounded-md">
      <img src={image} alt="Destination image" className="w-full" />
      <div className="py-7 px-5 flex flex-col gap-4">
        <div className="flex  gap-4 justify-between font-bold text-lg">
          <h3>{title}</h3>
          <h3 className="text-[#F85E9F]">{price}</h3>
        </div>
        <h4 className="text-slate-500">{place}</h4>
        <div className="flex gap-2">
          <h5>{rating}</h5>
          <img src={star} alt="Rating star" />
        </div>
      </div>
    </div>
  );
};
