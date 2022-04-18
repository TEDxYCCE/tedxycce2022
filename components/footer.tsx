import Link from "next/link";
import Button from "./button";

const navLinkClasses = "px-1 hover:text-red-700 focus:text-red-100";
const Footer = () => {
  return (
    <footer className=" bg-white/[.05] border-t-2 border-white/[.09]">
      <div className="container flex flex-col items-center content-center p-6 py-10 mx-auto text-white lg:flex-row-reverse lg:justify-between">
        <div className="flex flex-col items-center lg:items-end">
          <ul
            id="socials"
            className="inline-flex justify-center gap-10 p-2 mb-6 text-red-700 lg:mb-0 lg:gap-10"
          >
            <li>
              <a
                href="https://www.facebook.com/tedxycceofficial"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 transition-colors hover:fill-red-700 hover:stroke-transparent"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tedxycce/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 transition-colors group hover:fill-red-700"
                >
                  <rect
                    className="transition-colors group-hover:text-black"
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  ></rect>
                  <path
                    className="transition-colors group-hover:fill-black"
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                  ></path>
                  <line
                    className="group-hover:text-black transition-color"
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  ></line>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/tedxycce"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 transition-colors hover:fill-red-700 hover:stroke-transparent"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/tedxycce/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 transition-colors hover:fill-red-700 hover:stroke-transparent"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-left">
          <nav className="pb-8 mt-2 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-2 font-semibold lg:gap-8">
              <li className={navLinkClasses}>
                <Link href="/speakers">SPEAKERS</Link>
              </li>
              <li className={navLinkClasses}>
                <Link href="/about">ABOUT</Link>
              </li>

              <li className={navLinkClasses}>
                <Link href="/sponsors">SPONSOR OUR EVENT</Link>
              </li>
              <li className={navLinkClasses}>
                <Link href="/privacy-policy">PRIVACY POLICY</Link>
              </li>
              <li className={navLinkClasses}>
                <Link href="/refund-policy">REFUND/CANCELLATION POLICY</Link>
              </li>
              <li className={navLinkClasses}>
                <Link href="/#contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
          <p className="mt-2 text-xl">Copyright © 2022 TEDxYCCE</p>
          <p className="my-2 text-center text-gray-400 lg:text-justify">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
