import React, { useState, useEffect } from "react";
import CrossButton from "../../components/Hero/CrossButton";
import Humbeger from "../../components/Hero/Humbuger";
import InvertedButton from "../../components/common/InvertedButton";
import Logo from "../../components/Hero/Logo";
import Button from "../../components/common/Button";
import Toggle from "../../components/Darkmode/ThemeToggle";
import Link from "next/link";
// const navigation = [
//   { name: "ຫນ້າຫລັກ", href: "/" },
//   { name: "ຄຸນ​​ຫລັກສະນະ", href: "/#feature" },
//   { name: "ຄຳຖາມທີ່ພົບຫລາຍ", href: "/#faq" },
//   { name: "ບລັອກ", href: "/#blog" },
//   { name: "ລາຄາ", href: "/#prices" },
//   { name: "ກ່ຽວກັບພວກເຮົາ", href: "/#about" },
//   { name: "ຕິດຕໍ່ພວກເຮົາ", href: "/#contact" },
// ];
export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const [active, setActive] = useState(0);
  function showButton() {
    setScrollY(window.pageYOffset);
  }
  function watchScroll() {
    window.addEventListener("scroll", showButton);
  }
  useEffect(() => {
    watchScroll();
    return () => {
      window.removeEventListener("scroll", showButton);
    };
  });
  return (
    <div
      className={`sticky top-0 z-50 transition-all ${
        scrollY > 10 ? "bg-darkCoolGray-100" : "bg-white"
      } dark:bg-black`}
    >
      <nav id="navbar" className="flex justify-between p-2 px-4">
        <div className="flex items-center justify-between w-full">
          <Logo onClick={() => setActive(0)} />
          <ul className="hidden lg:flex lg:justify-center w-full">
            <li className="mr-7" onClick={() => setActive(0)}>
              <Link href="/">
                <a
                  className={`font-medium ${
                    active === 0 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ຫນ້າຫລັກ
                </a>
              </Link>
            </li>
            <li className="mr-7" onClick={() => setActive(1)}>
              <Link href="/#feature">
                <a
                  className={`font-medium ${
                    active === 1 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ຄຸນ​​ຫລັກສະນະ
                </a>
              </Link>
            </li>
            <li className="mr-7" onClick={() => setActive(2)}>
              <Link href="/#faq">
                <a
                  className={`font-medium ${
                    active === 2 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ຄຳຖາມທີ່ພົບຫລາຍ
                </a>
              </Link>
            </li>
            <li className="mr-7" onClick={() => setActive(3)}>
              <Link href="/#blog">
                <a
                  className={`font-medium ${
                    active === 3 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ບລັອກ
                </a>
              </Link>
            </li>
            <li className="mr-7" onClick={() => setActive(4)}>
              <Link href="/#prices">
                <a
                  className={`font-medium ${
                    active === 4 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ລາຄາ
                </a>
              </Link>
            </li>
            <li className="mr-7" onClick={() => setActive(5)}>
              <Link href="/#about">
                <a
                  className={`font-medium ${
                    active === 5 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ກ່ຽວກັບພວກເຮົາ
                </a>
              </Link>
            </li>
            <li className="mr-7" onClick={() => setActive(6)}>
              <Link href="/#contact">
                <a
                  className={`font-medium ${
                    active === 6 ? "bg-yellow-500 rounded-lg" : ""
                  } dark:text-white px-1 py-1 hover:bg-yellow-500 hover:rounded-lg dark:hover:text-coolGray-500`}
                >
                  ຕິດຕໍ່ພວກເຮົາ
                </a>
              </Link>
            </li>
          </ul>
          <div className="gap-1 hidden w-48 xl:flex">
            <InvertedButton>ເຂົ້າສູ່ລະບົບ</InvertedButton>
            <Button>ລົງທະບຽນ</Button>
          </div>
        </div>
        <Humbeger onClick={() => setOpenNav((val) => !val)} />
        <Toggle />
      </nav>
      <div
        className={`xl:hidden fixed top-0 left-0 z-40 ${
          !openNav ? "hidden" : "inline-block"
        }  w-full h-full bg-opacity-50 bg-coolGray-900`}
      >
        <div className="fixed top-0 bottom-0 left-0 w-2/3 max-w-xs bg-white dark:bg-black">
          <nav className="relative h-full p-6 overflow-y-auto">
            <div className="flex flex-col justify-between h-full">
              <Logo onClick={() => setActive(0)} />
              <ul className="py-6">
                <li className="mr-12" onClick={() => setActive(0)}>
                  <Link href="/">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 0 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ຫນ້າຫລັກ
                    </a>
                  </Link>
                </li>
                <li className="mr-12" onClick={() => setActive(1)}>
                  <Link href="/#feature">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 1 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ຄຸນ​​ຫລັກສະນະ
                    </a>
                  </Link>
                </li>
                <li className="mr-12" onClick={() => setActive(2)}>
                  <Link href="/#faq">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 2 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ຄຳຖາມທີ່ພົບຫລາຍ
                    </a>
                  </Link>
                </li>
                <li className="mr-12" onClick={() => setActive(3)}>
                  <Link href="/#blog">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 3 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ບລັອກ
                    </a>
                  </Link>
                </li>
                <li className="mr-12" onClick={() => setActive(4)}>
                  <Link href="/#prices">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 4 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ລາຄາ
                    </a>
                  </Link>
                </li>
                <li className="mr-12" onClick={() => setActive(5)}>
                  <Link href="/#about">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 5 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ກ່ຽວກັບພວກເຮົາ
                    </a>
                  </Link>
                </li>
                <li className="mr-12" onClick={() => setActive(6)}>
                  <Link href="/#contact">
                    <a
                      className={`block px-4 py-3 font-medium hover:bg-yellow-500 hover:rounded-lg
                    ${active === 6 ? "bg-yellow-500 rounded-lg" : ""}
                     dark:text-white dark:hover:text-coolGray-500`}
                    >
                      ຕິດຕໍ່ພວກເຮົາ
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-wrap">
                <div className="w-full mb-2">
                  <InvertedButton className="w-full text-center">
                    Login
                  </InvertedButton>
                </div>
                <div className="w-full">
                  <Button className="w-full text-center">Sign Up</Button>
                </div>
              </div>
            </div>
          </nav>
          <CrossButton onClick={() => setOpenNav((val) => !val)} />
        </div>
      </div>
    </div>
  );
}