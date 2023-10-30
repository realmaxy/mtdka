"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CustomButton } from ".";
export default function Form() {
  return (
    <div className="max-w-[500px] min-w-[260px] sm:min-w-[400px] flex flex-col gap-4 mt-6 md:mt-0">
      <Input type="text" variant="bordered" label="ФИО" />
      <Input type="text" variant="bordered" label="Номер телефона" />
      <Textarea
        variant="bordered"
        labelPlacement="outside"
        placeholder="Введите комментарий к заявке."
      />
      <CustomButton>Отправить</CustomButton>
    </div>
  );
}
