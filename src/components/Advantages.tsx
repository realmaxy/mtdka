import Image from "next/image";
import React, { useState } from "react";
import { CustomModal, CustomTitle } from ".";
import { advantages } from "./constants";

type Props = {};

const FlippableCard = () => {
  return (
    <div className="min-w-[60%]">
      <p className="z-20 text-center mt-4">
        Наведите, чтобы увидеть характеристики
      </p>
      <div className="group h-96 w-full mx-auto max-w-[600px] [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl transition-all duration-1200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="relative inset-0 w-full h-full">
            <Image src="/images/advCardImage.png" fill alt="" />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 sm:px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col text-start text-xs justify-center">
              - Две светодиодные ленты на обеих панелях для подачи сигнала,
              зависящего от роста человека.- 6/12/18 зон, охватывающих несколько
              целей во весь рост.
              <br />
              - Передовая широкополосная технология обнаружения, определяющая
              черные и цветные металлы.
              <br />
              - Автоматическая компенсация воздействия помех и регулировка
              чувствительности (от 0 до 299 уровней).
              <br />
              - Максимальный уровень обнаружения - скрепка, минимальный -
              большие металлические предметы, не обращая внимания на металл в
              кнопках ремня, обуви.
              <br />
              - Ударопрочный и защита от ложной тревоги, с звуковой и световой
              сигнализацией.
              <br />
              - Интеллектуальные счетчики пассажиропотока и сигналов
              срабатывания.
              <br />
              - Защита от несанкционированного доступа с паролем для защиты ПО.
              <br />
              - Расстояние между детекторами: 0.3 м при низкой чувствительности,
              0.5 м при высокой.
              <br />
              - Безопасен для беременных женщин и кардиостимуляторов. <br />
              - Сетевое напряжение: AC100В~240В, 50/60 Гц.
              <br />
              - Частота сигнала регулируется в диапазоне 7000-8999 Гц.
              <br />
              - Потребляемая мощность: 10 Вт.
              <br />- Рабочая температура: -20°C до +45°C.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type AdvantageItemsProps = {
  label: string;
  image: string;
  direction: "left" | "right";
};

const AdvantageItem = ({ label, image, direction }: AdvantageItemsProps) => {
  return (
    <div className="flex max-w-[250px]">
      <Image
        src={image}
        width={25}
        height={25}
        alt="icon"
        style={{ order: direction === "left" ? "1" : "2" }}
      />
      <p
        className={`${
          direction === "left" ? "order-2" : "order-1"
        } text-xs lg:text-base mx-2 my-2`}
      >
        {label}
      </p>
    </div>
  );
};

const Advantages = (props: Props) => {
  return (
    <div>
      <CustomTitle
        firstWord="Преимущества"
        firstPart="нашего"
        secondPart="металлодетектора"
      />
      <div className="hidden sm:flex sm:flex-col lg:flex-row w-full justify-between items-center">
        <ul className="flex lg:flex-col flex-row">
          {advantages.map((item, index) => {
            if (index > 2) {
              return;
            } else {
              return (
                <li key={index}>
                  <AdvantageItem
                    label={item.label}
                    image={item.image}
                    direction="left"
                  />
                </li>
              );
            }
          })}
        </ul>
        <FlippableCard />
        <ul className="flex lg:flex-col flex-row">
          {advantages.map((item, index) => {
            if (index <= 2) {
              return;
            } else {
              return (
                <li key={index}>
                  <AdvantageItem
                    label={item.label}
                    image={item.image}
                    direction="left"
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="sm:hidden py-10 flex flex-col items-center relative">
        <div className="w-[300px] h-[400px] absolute top-[10%] -right-[40vw]">
          <Image
            fill
            src="/images/heroimage.png"
            alt=""
            className="z-20"
            style={{ position: "absolute" }}
          />
          <Image
            fill
            src="/images/homebgvector.svg"
            alt=""
            className="z-10"
            style={{ position: "absolute" }}
          />
        </div>
        <div className="z-30">
          <ul className="flex flex-col mr-auto mb-4 ml-6 max-w-[60%]">
            {advantages.map((item, index) => (
              <li key={index}>
                <AdvantageItem
                  label={item.label}
                  image={item.image}
                  direction="left"
                />
              </li>
            ))}
          </ul>
          <CustomModal />
        </div>
      </div>
    </div>
  );
};

export default Advantages;
