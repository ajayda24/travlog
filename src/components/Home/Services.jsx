/* eslint-disable react/prop-types */
import service1 from "@/assets/service-1.svg";
import service2 from "@/assets/service-2.svg";
import service3 from "@/assets/service-3.svg";

export default function Services() {
  return (
    <div className="mt-20 flex flex-wrap justify-center text-center items-center ">
      <div className="flex flex-col gap-3 px-4 md:px-20 max-w-2xl w-full">
        <h2 className="uppercase text-[#F85E9F] font-bold text-2xl tracking-widest">
          Services
        </h2>
        <h4 className="font-bold text-2xl md:text-5xl">
          Our top value categories for you
        </h4>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-14">
        <ServiceCard
          title={"Best Tour Guide"}
          description={
            "What looked like a small patch of purple grass, above five feet."
          }
          image={service1}
        />
        <ServiceCard
          title={"Easy Booking"}
          description={"Square, was moving across the sand in their direction."}
          image={service2}
        />
        <ServiceCard
          title={"Weather Forecast"}
          description={
            "What looked like a small patch of purple grass, above five feet."
          }
          image={service3}
        />
      </div>
    </div>
  );
}

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="flex flex-col gap-12 justify-between items-center shadow-lg rounded-3xl outline outline-1 outline-slate-100 p-10 py-16  min-w-[15rem] max-w-xs w-full text-center">
      <img src={image} alt="Service image" width={50} />
      <h2 className="text-2xl font-bold">{title}</h2>
      <h4 className="text-slate-500 text-lg  px-4">{description}</h4>
    </div>
  );
};
