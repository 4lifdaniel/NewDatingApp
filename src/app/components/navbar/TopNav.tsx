"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
} from "@heroui/react";
import Link from "next/link";
import NavLink from "../NavLink";
import Image from "next/image";

export default function TopNavBar() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-blue-600 h-35"
      classNames={{
        item: ["text-xl", "text-white", "data-[active=true]:text-yellow-100"],
      }}
    >
      <NavbarBrand as={Link} href="/">
      <Image 
          src="/cupidle.png" 
          alt="Cupidle Logo"
          width={200} 
          height={50} 
          className="object-contain"
        />
      </NavbarBrand>

      <div className="sm-flex">
      <NavbarContent >
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
        {/* <NavbarItem as={Link} href="/lists">
          Lists
        </NavbarItem>
        <NavbarItem as={Link} href="/messages">
          Messages
        </NavbarItem> */}

        <Button as={Link} href="/auth/login">
          Login
        </Button>

        <Button as={Link} href="/auth/register">
          Register
        </Button>
      </NavbarContent>
      </div>
    </Navbar>
  );
}
