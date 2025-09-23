"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@headlessui/react";
import { navItems } from "../config/navConfig";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#28323b] shadow z-50">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-3 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/Iyyam-QRGen-Logo.svg"
            alt="Iyyam QRGen"
            width={40}
            height={40}
          />
          <h2 className="text-xl font-bold text-white text-sm]">Iyyam QRGen</h2>
        </Link>

        {/* Center: Nav Items */}
        <ul className="hidden md:flex gap-4 text-white mx-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.submenu ? (
                <Menu as="div" className="relative">
                  <Menu.Button
                    className="flex items-center gap-1 px-3 py-2 rounded-full transition-all 
                               hover:bg-white hover:text-[#28323b]"
                  >
                    {item.label}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="h-3 w-3 opacity-80"
                    />
                  </Menu.Button>
                  <Menu.Items className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                    {item.submenu.map((sub) => (
                      <Menu.Item key={sub.label}>
                        {({ active }) => (
                          <Link
                            href={sub.href}
                            className={`block px-4 py-2 text-sm ${
                              active ? "bg-blue-100 text-blue-600" : ""
                            }`}
                          >
                            {sub.label}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-full transition-all 
                             hover:bg-white hover:text-[#28323b]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full font-medium 
                       transition-all hover:bg-white hover:text-[#28323b] hover:border-white"
          >
            <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
            Login
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 
                       hover:from-blue-600 hover:via-sky-600 hover:to-blue-700
                       text-white px-4 py-2 rounded-full font-medium shadow-md transition-all"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
