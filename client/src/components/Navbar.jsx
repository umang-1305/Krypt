import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="flex w-full items-center justify-between p-4 md:justify-center">
      <div className="flex-initial items-center justify-center md:flex-[0.5]">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="hidden flex-initial list-none flex-row items-center justify-between text-white md:flex">
        {["Exchange", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="mx-4 cursor-pointer rounded-full bg-[#2952e3] py-2 px-7 hover:bg-[#2546bd]">
          Login
        </li>
        <li className="mx-4 cursor-pointer rounded-full bg-[#2952e3] py-2 px-7 hover:bg-[#2546bd]">
          <a href="https://www.binance.com/en/markets">Coin Market Cap </a>
        </li>
      </ul>
      <div className="relative flex">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="cursor-pointer text-white md:hidden"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="blue-glassmorphism animate-slide-in fixed -top-0 -right-2 z-10 flex h-screen w-[70vw] list-none
            flex-col items-end justify-start rounded-md p-3 text-white shadow-2xl md:hidden"
          >
            <li className="my-2 w-full text-xl">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
