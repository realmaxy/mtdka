import React from "react";
import { heroAfter } from "./constants";
import Image from "next/image";

type HeroAfterItemProps = {
  title: string;
  subtitle: string;
  advantageNumber: string;
  styles: string;
};

type Props = {};

const HeroAfterItem = ({
  title,
  subtitle,
  advantageNumber,
  styles,
}: HeroAfterItemProps) => {
  return (
    <div className={`w-full md:w-[28%] z-20 mb-5 md:mt-0 ${styles}`}>
      <span className=" text-3xl text-blue-200 font-bold">
        {advantageNumber}
      </span>
      <h2 className=" font-bold text-2xl text-gray-200">{title}</h2>
      <p className=" font-medium">{subtitle}</p>
    </div>
  );
};

const HeroAfter = (props: Props) => {
  return (
    <div
      className=" md:w-[95%] lg:w-[80%] mx-auto w-full justify-around relative p-9 pb-4 rounded-xl my-24"
      style={{
        backgroundImage: `url("/images/advantagesCardImage.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex md:flex-row flex-col justify-between">
        {heroAfter.map((item, index) => (
          <HeroAfterItem
            title={item.title}
            subtitle={item.subtitle}
            advantageNumber={item.advantageNumber}
            key={item.advantageNumber}
            styles={
              index !== 2
                ? "md:relative md:after:content-[''] md:after:h-full md:after:w-[2px] md:after:rounded-full md:after:bg-blue-200 md:after:absolute md:after:-right-5 md:after:top-0"
                : ""
            }
          />
        ))}
      </div>
      <span className="z-0 opacity-80 w-full h-full absolute bg-blue-300 top-0 left-0"></span>
      <Image
        src={"/images/logo1.svg"}
        width={150}
        height={60}
        alt="logo"
        style={{ position: "absolute", bottom: "-15px", left: "-15px" }}
      />
      <Image
        src={"/images/logo2.svg"}
        width={120}
        height={60}
        alt="logo"
        style={{ position: "absolute", top: "-15px", right: "-15px" }}
      />
    </div>
  );
};

export default HeroAfter;
