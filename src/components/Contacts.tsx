import React from "react";
import { Form } from ".";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div id="contacts" className="w-full px-4">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-blue-200 font-medium text-center">
        Наши контакты
      </h1>
      <h2 className="text-center text-lg md:text-xl lg:text-2xl font-light mt-6">
        Готовы оказать поддержку и ответить <br /> на любые вопросы заказчика.
      </h2>
      <div className="flex md:flex-row flex-col w-full justify-around mt-16">
        <div className="text-2xl">
          <a href="tel:+79094265396" className="hover:text-blue-500">
            +7 (909) 426-53-96 Александр
          </a>
          <br />
          <a href="tel:+79094005309" className="hover:text-blue-500">
            +7 (909) 400-53-09 Алексей
          </a>
          <br />
          <a href="mailto:1968@bk.ru" className="hover:text-blue-500">
            1968@bk.ru
          </a>
          <p className="text-lg font-light mt-4 max-w-[400px]">
            344029, Ростовская область, город Ростов-на-Дону, пр-кт Сельмаш, дом
            90А/17Б, офис 16Д
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Contacts;
