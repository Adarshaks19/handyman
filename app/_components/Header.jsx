"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  return (
    <div className="p-7 shadow-md flex justify-between ">
      <div className="flex items-center gap-8 h-10">
        <Image src="/logo.png" alt="logo" width={180} height={100}></Image>
        <div className="md:flex items-center gap-6 hidden">
          <Link
            href={"/"}
            className="hover:scale-105 hover:text-primary cursor-pointer text-md font-bold"
          >
            Home
          </Link>
          <Link
            href={"/search/Cleaning"}
            className="hover:scale-105 hover:text-primary cursor-pointer text-md font-bold"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="hover:scale-105 hover:text-primary cursor-pointer text-md font-bold"
          >
            About us
          </Link>
        </div>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/mybooking"}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Login/Signup </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
