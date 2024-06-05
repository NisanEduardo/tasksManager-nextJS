import { ReactNode } from "react";

interface IActionButton {
  classes: string;
  text: string;
  type?: "button" | "reset" | "submit" | undefined;
  children?: ReactNode;
  fn?: () => void;
}

export const ActionButtom = ({
  classes,
  text,
  type = "button",
  children,
  fn,
}: IActionButton) => {
  return (
    <button
      type={`${type && type}`}
      className={`${classes} text-white rounded-lg py-2 px-4 border transition-all`}
      onClick={fn}
    >
      {children ? children : text}
    </button>
  );
};
