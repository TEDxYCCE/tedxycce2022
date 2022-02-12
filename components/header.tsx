import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const navLinkClasses =
  "hover:text-red-100 focus:text-red-100 transition-colors";
const Header = () => {
  return (
    <header className="sticky top-0 z-10 text-red-600 bg-black">
      <div className="container flex flex-col items-center justify-between w-full p-4 mx-auto lg:flex-row">
        <Link href="/">
          <a className="w-56">
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
        <nav className="mt-2 lg:mt-0">
          <ul className="flex flex-wrap justify-center gap-2 font-semibold lg:gap-8">
            <li className={navLinkClasses}>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href="/speakers">SPEAKERS</Link>
            </li>
            <li className={navLinkClasses}>
              {/* TODO: Link to nomination section on home page */}
              <Link href="/#nominations">NOMINATIONS</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href="/sponsors">SPONSORS</Link>
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
