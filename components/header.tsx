import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="container sticky top-0 flex flex-col items-center justify-between p-4 mx-auto text-red-600 bg-black lg:flex-row">
      <div className="w-56">
        <Image
          src={logo}
          layout="intrinsic"
          height={205}
          width={782}
          alt="TEDx_Logo"
        />
      </div>
      <nav className="mt-2 lg:mt-0">
        <ul className="flex flex-wrap justify-center gap-2 font-semibold lg:gap-8">
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <Link href="#speakers">SPEAKERS</Link>
          </li>
          <li>
            <a href="#nominations">NOMINATIONS</a>
          </li>
          <li>
            <Link href="#sponsor">SPONSORS</Link>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
