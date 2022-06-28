import React from 'react';
import CrossButton from '../../components/Hero/CrossButton';

import Humbeger from '../../components/Hero/Humbuger';
import InvertedButton from '../../components/common/InvertedButton';
import Logo from '../../components/Hero/Logo';
import Button from '../../components/common/Button';

import Toggle from '../../components/Darkmode/ThemeToggle';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#feature' },
  { name: 'Blogs', href: '#blog' },
  { name: 'Prices', href: '#prices' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 transition-all bg-white dark:bg-black">
      <nav className="flex justify-between p-2 px-4">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 xl:w-1/3">
            <Logo />
          </div>
          
            <ul className="hidden xl:flex xl:justify-center">
              {navigation.map((item,key) => (
                <li className="mr-12" key={key}>
                  <a
                    href={item.href}
                    className="font-medium text-coolGray-500 dark:text-white hover:text-yellow-500 dark:hover:text-coolGray-500"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          
          <div className="w-1/2 xl:w-1/3">
            <div className="items-center justify-end hidden xl:flex">
              <InvertedButton>Login</InvertedButton>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>

        <Humbeger />
        <Toggle />
      </nav>
      <div className="fixed top-0 left-0 z-40 hidden w-full h-full bg-opacity-50 navbar-menu bg-coolGray-900">
        <div className="fixed top-0 bottom-0 left-0 w-1/3 max-w-xs bg-white dark:bg-black">
          <nav className="relative h-full p-6 overflow-y-auto">
            <div className="flex flex-col justify-between h-full">
              <Logo />
              <ul className="py-6">
                {navigation.map((item) => (
                  <li className="mr-12" key={item.name}>
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 font-medium rounded-md text-coolGray-500 dark:text-white hover:text-yellow-500 dark:hover:text-coolGray-500 hover:bg-coolGray-50 dark:hover:bg-coolGray-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
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

          <CrossButton />
        </div>
      </div>
    </div>
  );
}
