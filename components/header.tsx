import { createRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const navLinkClasses = "navLink px-1 hover:text-red-50 focus:text-red-100";
const Header = () => {
  const hamBurgerRef = createRef<SVGSVGElement>();
  const closeRef = createRef<SVGSVGElement>();
  const navULRef = createRef<HTMLUListElement>();

  const toggleMenuIcons = () => {
    if (!hamBurgerRef.current || !closeRef.current) return;
    let ham = hamBurgerRef.current;
    let close = closeRef.current;

    if (close.classList.contains("closeInvisible")) {
      close.classList.remove("closeInvisible");
      close.classList.add("closeVisible");

      ham.classList.remove("hamburgerVisible");
      ham.classList.add("hamburgerInvisible");

      navULRef.current?.classList.toggle("hidden");
      navULRef.current?.classList.toggle("flex");
    } else {
      ham.classList.add("hamburgerVisible");
      ham.classList.remove("hamburgerInvisible");

      close.classList.add("closeInvisible");
      close.classList.remove("closeVisible");

      navULRef.current?.classList.toggle("hidden");
      navULRef.current?.classList.toggle("flex");
    }
  };

  return (
    <header className="sticky top-0 z-10 text-red-600 bg-black/30 backdrop-blur">
      <div className="container flex flex-col items-center w-full p-4 mx-auto lg:flex-row">
        <div className="flex justify-around flex-1 w-full px-2 md:px-0 md:justify-start">
          <Link href="/">
            <a className="w-40 md:w-56">
              <Image
                src={logo}
                layout="intrinsic"
                height={205}
                width={782}
                alt="TEDx_Logo"
                placeholder="blur"
              />
            </a>
          </Link>
          <div className="inline-flex items-center md:hidden">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 transition-all duration-500 closeInvisible"
              ref={closeRef}
              onClick={toggleMenuIcons}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 transition-all duration-500"
              ref={hamBurgerRef}
              onClick={toggleMenuIcons}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
        <nav className="w-full md:w-fit">
          <ul
            className="flex-wrap items-center justify-center hidden gap-2 mt-2 font-semibold text-center md:flex lg:gap-8 lg:mt-0"
            ref={navULRef}
          >
            <li className={navLinkClasses}>
              <Link href="/#speakers">SPEAKERS</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href="/#register">REGISTER</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href="/partners">PARTNERS</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href="/#contact">CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
