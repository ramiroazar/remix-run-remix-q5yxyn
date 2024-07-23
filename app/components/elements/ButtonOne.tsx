import { NavLink } from "@remix-run/react";
import { ComponentPropsWithoutRef } from "react";
import { button } from "./ButtonOne.css";

type ButtonOneProps = ComponentPropsWithoutRef<typeof NavLink>;

export const ButtonOne = ({ children, ...props }: ButtonOneProps) => {
  return (
    <NavLink className={button} {...props}>
      {children}
    </NavLink>
  );
};
