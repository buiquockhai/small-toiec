import { ComponentPropsWithoutRef } from "react";
import classnames from "classnames";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "fill" | "light";
}

export function Button({ children, variant = "fill", ...more }: ButtonProps) {
  return (
    <button
      type="button"
      className={classnames(
        "w-full rounded py-4 px-6 border-none outline-none font-semibold cursor-pointer transition",
        {
          "bg-[#fa6060] text-white hover:bg-red-500": variant === "fill",
          "bg-gray-200 text-slate-700 hover:bg-gray-300": variant === "light",
        }
      )}
      {...more}
    >
      {children}
    </button>
  );
}
