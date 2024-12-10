import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navLinks = [
    { name: "Home", id: "/home" },
    { name: "Movies", id: "/movie" },
    { name: "TV Series", id: "/tv" },
    { name: "Most Popular", id: "/most-popular" },
    { name: "Top Airing", id: "/top-airing" },
  ];
  return (
    <nav>
      <div className="nav hidden md:flex justify-center items-center">
        <ul className="flex gap-10">
          {navLinks.map((item) => (
            <li className="hover:text-primary font-bold" key={item.id}>
              <a className="" href={item.id}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block md:hidden relative w-full">
        <button onClick={() => setShow(!show)}>
          <h1 className="flex pt-5 pl-5 justify-center items-center gap-1">
            <FaAlignJustify />
            Menu
          </h1>
        </button>
        <ul
          className={`${
            show ? "flex" : "hidden"
          } w-11/12 mx-3 absolute flex-col justify-center items-center z-10 bg-backGround  rounded-md py-5 gap-3 md:gap-10`}
        >
          {navLinks.map((item) => (
            <li
              className="hover:text-primary hover:bg-lightBg w-full text-center py-2"
              key={item.id}
            >
              <a className="" href={item.id}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
