import React from "react";
import { CustomTitle } from ".";
import { clientsCards, industries } from "./constants";
import Image from "next/image";

type IndustryProps = {
  text: string;
};

const Industry = ({ text }: IndustryProps) => (
  <li className="my-11 w-full bg-gradient-to-r from-blue-100 to-white-100 text-center sm:text-3xl py-2 rounded text-xl">
    {text}
  </li>
);

type ClientCardProps = {
  name: string;
  image: string;
  color: string;
  imageSize: {
    width: number;
    heigth: number;
  };
};

const ClientCard = (props: ClientCardProps) => {
  return (
    <div className="my-4 md:my-0 w-[90%] md:w-[31%] flex flex-col items-center md:items-start h-[201px]">
      <Image
        src={`/images/${props.image}`}
        width={props.imageSize.width}
        height={props.imageSize.heigth}
        alt={props.name}
      />
      <div
        className={`w-full pt-2 relative before:top-0 mt-4 md:mt-auto before:content-[''] before:width-full before:height-[1px] flex`}
      >
        <p className="mr-auto">{props.name}</p>
        <Image
          width={30}
          height={30}
          alt="link"
          src={"/images/indusctyLinkVector.svg"}
        />
      </div>
    </div>
  );
};

type IndustriesProps = {};

const Industries = (props: IndustriesProps) => {
  return (
    <div className="my-16">
      <CustomTitle
        firstWord="Применение"
        firstPart="в"
        secondPart="различных отраслях"
      />
      <ul className="relative">
        {industries.map((item, index) => (
          <Industry text={item} key={index} />
        ))}
      </ul>
      <div className="w-full bg-gradient-to-r from-blue-100 to-white-100 rounded-xl overflow-hidden border-2 border-blue-300 p-10 ">
        <h1 className="text-3xl font-semibold text-blue-200">
          Клиенты <br /> ЭКСПЕРТГРУПП
        </h1>
        <ul className="flex items-center justify-between mt-10 md:flex-row flex-col">
          {clientsCards.map((item, index) => (
            <ClientCard {...item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Industries;
