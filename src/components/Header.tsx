"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { headerItems } from "./constants";
import { Link } from "react-scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarContent justify="start">
          <Image src={"/images/logo1.svg"} width={120} height={60} alt="logo" />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {headerItems.map(item => (
          <NavbarItem key={item.id}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden lg:flex">
        <Image src={"/images/logo2.svg"} width={120} height={60} alt="logo" />
      </NavbarContent>
      <NavbarMenu>
        {headerItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
