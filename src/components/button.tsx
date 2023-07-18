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
          "bg-gray-200 dark:text-dark-text !border !border-solid dark:border-dark-border text-slate-700 hover:opacity-70 dark:bg-dark-bg":
            variant === "light",
        }
      )}
      {...more}
    >
      {children}
    </button>
  );
}
