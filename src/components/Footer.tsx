import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      className="w-full h-[150px] relative flex md:flex-row flex-col md:items-center p-2 py-4 justify-center md:justify-around"
      style={{
        backgroundImage: `url("/images/footerBg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Image
        src={"/images/logoFooter.svg"}
        width={250}
        height={100}
        alt="logo"
      />
      <p className=" text-white-100 uppercase font-light md:mx-0 mx-auto">
        ИНН: 6166127242 КПП: 616601001 ОГРН: 1236100006581
      </p>
    </div>
  );
};

export default Footer;
