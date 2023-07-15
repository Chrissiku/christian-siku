import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import Button from "./common/Button";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const Navbar = () => {
  return (
    <Disclosure as="nav" className="relative">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-5 md:px-10 lg:px-32 py-5">
            <div className="relative flex items-center justify-between gap-5">
              <div className="text-xl font-bold">Logo</div>

              <div
                className="hidden md:flex items-center justify-evenly text-20px w-[600px]
                   dark:text-white text-black text-base font-semibold"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-purple font-light"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-center  space-x-5">
                <ThemeButton />
                {/* Contact button */}
                <Button
                  label="contact"
                  customClassName="bg-purple text-white"
                />
                {/* Mobile menu button*/}
                <Disclosure.Button className="md:hidden block text-cinder dark:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-10 w-10 text-red-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-10 w-10 "
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden w-full h-[87vh] max-w-[500px] right-0 absolute z-50">
            <div className="bg-white  dark:bg-dark px-5 py-10 w-full h-full ml-auto flex flex-col items-center justify-start gap-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="w-full p-2 text-dark dark:text-white hover:text-purple hover:pl-5 transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
