import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-black sticky top-0 z-10 text-red-600">
      <div className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-between p-4">
        <Link href="/">
          <a className="w-56">
            <Image
              src={logo}
              layout="intrinsic"
              height={205}
              width={782}
              alt="TEDx_Logo"
            />
          </a>
        </Link>
        <nav className="mt-2 lg:mt-0">
          <ul className="flex flex-wrap justify-center gap-2 font-semibold lg:gap-8">
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/speakers">SPEAKERS</Link>
            </li>
            <li>
              {/* TODO: Link to nomination section on home page */}
              <Link href="/#nominations">NOMINATIONS</Link>
            </li>
            <li>
              <Link href="/sponsors">SPONSORS</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
