"use client";
import React, { ContextType } from "react";
import { Button, extendVariants } from "@nextui-org/react";

type Props = {
  text: string;
  variant: "shadow" | "ghost";
  onClick?: () => void;
};

const CustomButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      darkblue: "text-[#fff] bg-[#091A5A]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#fff] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-small",
      xl: "px-unit-8 min-w-unit-28 h-unit-14 text-large gap-unit-4 rounded-medium",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "darkblue",
    size: "xl",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: "darkblue",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});

export default CustomButton;
