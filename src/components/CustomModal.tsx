"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { CustomButton } from ".";

export default function CustomModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CustomButton onPress={onOpen}>
        Посмотреть тех. характеристики
      </CustomButton>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalBody className="pt-5"></ModalBody>
              <p className=" text-sm px-4">
                - Две светодиодные ленты на обеих панелях для подачи сигнала,
                зависящего от роста человека.- 6/12/18 зон, охватывающих
                несколько целей во весь рост.
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
                - Защита от несанкционированного доступа с паролем для защиты
                ПО.
                <br />
                - Расстояние между детекторами: 0.3 м при низкой
                чувствительности, 0.5 м при высокой.
                <br />
                - Безопасен для беременных женщин и кардиостимуляторов. <br />
                - Сетевое напряжение: AC100В~240В, 50/60 Гц.
                <br />
                - Частота сигнала регулируется в диапазоне 7000-8999 Гц.
                <br />
                - Потребляемая мощность: 10 Вт.
                <br />- Рабочая температура: -20°C до +45°C.
              </p>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Понятно
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
