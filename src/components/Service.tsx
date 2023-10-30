import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div className="my-16 text-center w-full px-4">
      <h1 className="text-3xl lg:text-4xl text-blue-200 font-medium text-center">
        Гарантийное и постгарантийное
        <br /> сервисное обслуживание
      </h1>
      <p className="text-xl font-light mt-14">
        Существует{" "}
        <a className=" text-blue-600 font-semibold" href="#">
          сообщество
        </a>{" "}
        поддержки всех пользователей в понятном и доступном, максимально удобном
        для всех сторон, информационном пространстве.
      </p>
      <div className="my-16 flex md:flex-row flex-col md:justify-around">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-blue-200 font-medium text-center">
          ООО «АВАЛОН»{" "}
        </h1>
        <p className="md:text-right md:max-w-[40%] md:mt-0 mt-4">
          Эксклюзивный дестрибьютор запасных частей на территории РФ. Агрегатор
          сервисных инцидентов на террритории РФ.
        </p>
      </div>
      <p className="text-center">
        Коммерческий отдел - com.avalon@yandex.ru - +7 (968) 182-08-88 <br />{" "}
        Сервисный отдел - service.avalon@yandex.ru - +7 (928) 169-03-33
        <br /> Диспетчерский центр приема заявок - 8 800 505 52 05
      </p>
    </div>
  );
};

export default Service;
