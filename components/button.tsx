import Link from "next/link";
import React from "react";

const RightArrow = (
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
);

type ButtonComponentPropTypes = {
  title: string;
  type: "internal" | "external";
  href: string;
  className?: string;
  onClick?: () => void;
};

const Button = React.forwardRef<HTMLAnchorElement, ButtonComponentPropTypes>(
  ({ title, type, className, onClick, href }, ref) => {
    return (
      <Link href={href}>
        <a
          className={`rounded-xl group bg-red-600 hover:bg-red-600/80 transition-colors px-6 py-3 text-white font-semibold inline-flex justify-center ${className}`}
          href={href}
          onClick={onClick}
          ref={ref}
          {...(type === "external"
            ? { rel: "noopener noreferrer", target: "_blank" }
            : {})}
        >
          {title}
          {RightArrow}
        </a>
      </Link>
    );
  }
);
Button.displayName = "Button";

export default Button;
