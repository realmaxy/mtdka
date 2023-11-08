import React from "react";

type Props = {};

const Service = (props: Props) => {
  return (
    <div id="service" className="my-16 text-center w-full px-4">
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
        Коммерческий отдел -{" "}
        <span>
          <a href="mailto:com.avalon@yandex.ru" className="hover:text-blue-500">
            com.avalon@yandex.ru
          </a>
        </span>{" "}
        -{" "}
        <span>
          <a href="tel:+79681820888" className="hover:text-blue-500">
            +7 (968) 182-08-88
          </a>
        </span>
        <br />
        Сервисный отдел -{" "}
        <span>
          <a
            href="mailto:service.avalon@yandex.ru"
            className="hover:text-blue-500"
          >
            service.avalon@yandex.ru
          </a>
        </span>{" "}
        -{" "}
        <span>
          <a href="tel:+79281690333" className="hover:text-blue-500">
            +7 (928) 169-03-33
          </a>
        </span>
        <br />
        Диспетчерский центр приема заявок -{" "}
        <span>
          <a href="tel:+78005055205" className="hover:text-blue-500">
            +7 (800) 505-52-05
          </a>
        </span>{" "}
      </p>
    </div>
  );
};

export default Service;
