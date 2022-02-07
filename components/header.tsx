import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="h-24 bg-black text-red-600 flex items-center justify-around">
      <div className="h-20 w-1/6 relative">
        <Image src={logo} layout="fill" alt="TEDx_Logo" />
      </div>
      <nav className="">
        <li className="flex gap-8 font-semibold text-2xl">
          <ul>
            <Link href="#about">ABOUT</Link>
          </ul>
          <ul>
            <Link href="#speakers">SPEAKERS</Link>
          </ul>
          <ul>
            <Link href="#nominations">NOMINATIONS</Link>
          </ul>
          <ul>
            <Link href="#sponser">SPONSOR</Link>
          </ul>
          <ul>
            <Link href="#contact">CONTACT US</Link>
          </ul>
        </li>
      </nav>
    </header>
  );
};

export default Header;
