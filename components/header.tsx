import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-black text-red-600 container mx-auto flex flex-col lg:flex-row items-center justify-between p-4">
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
        <ul className="flex flex-wrap justify-center gap-2 lg:gap-8 font-semibold">
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
            <Link href="#sponsor">SPONSOR</Link>
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
