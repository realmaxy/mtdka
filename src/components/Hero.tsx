import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

type Props = {};

const HeroVector = (props: Props) => {
  return (
    <Image
      className="max-w-[300px]"
      src="/images/heroVector.svg"
      width={314}
      height={150}
      alt="hero-vector"
    />
  );
};

const Hero = (props: Props) => {
  return (
    <>
      <div className="max-w-1/2 md:w-1/2">
        <HeroVector />
        <div>
          <h1 className=" text-blue-200 font-bold md:text-3xl text-2xl md:mt-10">
            СТАЦИОНАРНЫЙ АРОЧНЫЙ МЕТАЛЛОДЕТЕКТОР "МТД-КА"
          </h1>
          <p className=" text-gray-200 text-lg my-8 md:my-10">
            Предназначен для обнаружения металлических предметов, запрещенных в
            местах массового скопления людей, используется для обеспечения
            общественной безопасности.
          </p>
          <p className="text-gray-200 text-lg hidden md:block mb-8">
            Эффективность решения была неоднократно доказана при обеспечении
            общественной безопасности на мероприятиях различного масштаба,
            вплоть до мирового: во время проведения Чемпионата мира по футболу
            FIFA 2018 именно с помощью этой системы был задержан ряд опасных
            преступников.
          </p>
        </div>
        <CustomButton size="sm" color="darkblue">
          Заказать консультацию
        </CustomButton>
      </div>
      <div></div>
    </>
  );
};

export default Hero;
