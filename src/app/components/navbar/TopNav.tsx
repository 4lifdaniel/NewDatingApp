"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Button,
  NavbarItem,
} from "@heroui/react";
import Link from "next/link";
import NavLink from "../NavLink";

export default function TopNavBar() {
  return (
    <Navbar
      maxWidth="full"
      className="bg-blue-600"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-100",
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <div> PUT LOGO HERE </div>
      </NavbarBrand>

      <NavbarContent>

        <NavLink
        href="/members"
        label="Matches"/>
        <NavbarItem as={Link} href="/lists">
          Lists
        </NavbarItem>
        <NavbarItem as={Link} href="/messages">
          Messages
        </NavbarItem>


<Button as={Link} href="/auth/login">
          Login
        </Button>

        <Button as={Link} href="/auth/register">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
