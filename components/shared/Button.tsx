import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonColor =
  | "blue"
  | "black"
  | "white"
  | "gray"
  | "red"
  | "green"
  | "bgless";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rounded?: boolean;
}

const colorStyles: Record<ButtonColor, string> = {
  blue: "bg-[#0368FD] text-white hover:bg-[#0257d6] focus-visible:ring-[#0368FD]",
  black: "bg-black text-white hover:bg-gray-800 focus-visible:ring-black",
  white:
    "bg-white text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500",
  gray: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
  red: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
  green:
    "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600",
  bgless:
    "border border-gray-300 bg-transparent text-black hover:bg-gray-50 focus-visible:ring-gray-400",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      color = "blue",
      disabled,
      leftIcon,
      rounded = false,
      rightIcon,
      type = "button",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 ${rounded ? "rounded-full" : "rounded-lg"} px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ${colorStyles[color]} ${className}`}
      {...props}
    >
      {leftIcon && (
        <span aria-hidden="true" className="shrink-0">
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span aria-hidden="true" className="shrink-0">
          {rightIcon}
        </span>
      )}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
