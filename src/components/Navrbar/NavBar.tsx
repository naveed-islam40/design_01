"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import NavLink from "./NavLinks";
import { useState } from "react";
import NavigationMenuOption from "./NavigationMenu";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState({
    Home: false,
    Pages: false,
    Blogs: false,
  });
  const [selectOption, setSelectOption] = useState("");

  const Homeoptions = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Help", href: "/help" },
  ];

  return (
    <div>
      <TopNavbar />
      <nav className="bg-white shadow-md py-3">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/png/logo.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavigationMenuOption
              links={Homeoptions}
              children="Home"
              handleSelectOption={(option) => setSelectOption(option)}
              selectedOption={selectOption}
            />
            <NavLink href="/doctors">Doctors</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavigationMenuOption
              links={[{ name: "Pages", href: "/pages" }]}
              children="Pages"
              handleSelectOption={(option) => setSelectOption(option)}
              selectedOption={selectOption}
            />
            <NavigationMenuOption
              links={[{ name: "Blogs", href: "/blogs" }]}
              children="Blogs"
              handleSelectOption={(option) => setSelectOption(option)}
              selectedOption={selectOption}
            />
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          {/* Book Appointment Button */}
          <Button variant="default" className="bg-blue-600 group p-0" asChild>
            <Link
              href="/book-appointment"
              className="flex justify-center gap-2 items-center shadow-xl text-sm bg-blue-600 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0  before:bg-[#333] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-5 overflow-hidden border-2  group "
            >
              Book Appointment
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
