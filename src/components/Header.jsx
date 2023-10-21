import { useState } from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { FadeIn, FadeInStagger } from "./FadeIn";

const navigation = [
  { name: "Tracks", href: "/ghost-produced-tracks" },
  { name: "Ghost Production", href: "/ghost-production" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

//Header element contained in Navbar (NEXT UI's choice...)
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Using useRouter to determine the active navigation item
  const { pathname } = useRouter();

  return (
    <div className=" z-50">
      <Navbar
      position=""
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBlurred={false}
        className=" bg-transparent text-zinc-100 "
        classNames={{
          wrapper: " p-6 lg:px-8  max-w-screen-2xl h-20 ",
          menu: "bg-zinc-950/70 pt-6   bg-clip-padding backdrop-filter backdrop-blur-xl top-[80px]  ",
        }}
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">LAP Studios</span>
              <Image className="h-8 w-auto" src={logo} alt="LAP Studios logo" />
            </Link>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>
        <FadeInStagger faster="true">
          <NavbarContent className="hidden md:flex lg:gap-x-12 " justify="end">
            {navigation.map((item) => (
              <NavbarItem key={item.name}>
                <FadeIn>
                  <Link
                    href={item.href}
                    className="text-base font-semibold tracking-wider relative px-3 py-1.5 hover:opacity-60 transition-opacity duration-300 "
                  >
                    <AnimatePresence>
                      {pathname === item.href && (
                        <motion.span
                        key="marker"
                          layoutId="bubble"
                          className="absolute inset-0 -z-10 bg-teal-950/70 "
                          style={{ borderRadius: 9999 }}
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </AnimatePresence>
                    {item.name}
                  </Link>
                </FadeIn>
              </NavbarItem>
            ))}
          </NavbarContent>
        </FadeInStagger>

        <NavbarMenu>

          {navigation.map((item) => (
            <NavbarMenuItem key={item.name}>
              <FadeIn>
                <Link
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    console.log("clicked");
                  }}
                  className={`-mx-3 block rounded-lg px-3 py-1.5 text-base tracking-wider font-semibold leading-7 text-zinc-100 ${
                    pathname === item.href && "bg-teal-900/30"
                  }`}
                >
                  {item.name}
                </Link>
              </FadeIn>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
