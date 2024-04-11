"use client";

import React, { ButtonHTMLAttributes } from "react";
import { Button, ButtonProps } from "../ui/button";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: ButtonProps["variant"];
  colorProperty?: string;
};

export default function CustomButton({
  children,
  variant,
  colorProperty,
  ...attributes
}: Props) {
  return (
    <Button
      className={`border rounded-full flex gap-2 ${colorProperty}`}
      variant={variant}
      size={"lg"}
      {...attributes}
    >
      {children}
    </Button>
  );
}
