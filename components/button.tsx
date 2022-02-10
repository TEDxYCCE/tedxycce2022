import Link from "next/link";
import React, { Children } from "react";

interface IButtonRequiredProps {
  href: string;
  children: string | JSX.Element;
}
interface IButtonOptionalProps {
  type?: "internal" | "external";
  variant?: "filled" | "outlined" | "text";
  className?: string;
  noRightArrow?: boolean;
  onClick?: () => void;
}
interface IButtonProps extends IButtonRequiredProps, IButtonOptionalProps {}

const defaultProps: IButtonOptionalProps = {
  type: "internal",
  variant: "text",
  className: "",
  noRightArrow: false,
  onClick: () => {},
};

const Button = React.forwardRef<HTMLAnchorElement, IButtonProps>(
  (
    { children, type, variant, className, noRightArrow, onClick, href },
    ref
  ) => {
    const aClasses =
      "rounded-xl group font-semibold inline-flex justify-center px-6 py-3 transition-colors focus:ring-2 focus:ring-red-800";
    const aTextClasses = "text-red-500 hover:text-red-600/80";
    const aFilledClasses =
      "text-white bg-red-600 hover:bg-red-600/80 shadow-[0_10px_15px_-3px_rgba(255,0,0,0.3),0_4px_6px_-4px_rgba(255,0,0,0.3)]";
    const aOutlinedClasses =
      "ring-2 ring-red-800 text-red-500 hover:bg-red-800 hover:text-gray-100";
    return (
      <Link href={href}>
        <a
          className={`${aClasses} ${
            variant === "text"
              ? aTextClasses
              : `${
                  variant === "filled"
                    ? aFilledClasses
                    : `${variant === "outlined" ? aOutlinedClasses : null}`
                }`
          } ${className}`}
          href={href}
          onClick={onClick}
          ref={ref}
          {...(type === "external"
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
        >
          {children}

          {/* Right arrow (only when variant is other than text or explicitly defined) */}
          {!noRightArrow && variant !== "text" ? (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline ml-1 group-hover:translate-x-1 transition-transform"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          ) : null}
        </a>
      </Link>
    );
  }
);
Button.displayName = "Button";
Button.defaultProps = defaultProps;

export default Button;
