"use client";
import React, { ChangeEventHandler, FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { CustomButton } from ".";
import { validateForm } from "@/helpers/validate";

export type ContactsFormData = {
  fio?: string;
  number?: string;
  comment?: string;
};

export default function Form() {
  const [formData, setFormData] = useState<ContactsFormData | null>();
  const [formErrors, setFormErrors] = useState<Partial<ContactsFormData>>({});

  const changeFormData: ChangeEventHandler = (event: React.ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    } else setFormData({ [name]: value });
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm(formData?.fio, formData?.number);

    if (Object.keys(errors).length < 1) {
      const result = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const resp = await result.json();
      debugger;
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form
      onSubmit={submitForm}
      className="max-w-[500px] min-w-[260px] sm:min-w-[400px] flex flex-col gap-4 mt-6 md:mt-0"
    >
      <Input
        type="text"
        variant="bordered"
        label="ФИО"
        name="fio"
        value={formData?.fio}
        onChange={changeFormData}
        errorMessage={formErrors.fio}
      />
      <Input
        type="number"
        variant="bordered"
        label="Номер телефона"
        name="number"
        value={formData?.number}
        onChange={changeFormData}
        errorMessage={formErrors.number}
      />
      <Textarea
        value={formData?.comment}
        variant="bordered"
        labelPlacement="outside"
        placeholder="Введите комментарий к заявке."
        name="comment"
        onChange={changeFormData}
        maxLength={500}
      />
      <CustomButton type="submit">Отправить</CustomButton>
    </form>
  );
}
