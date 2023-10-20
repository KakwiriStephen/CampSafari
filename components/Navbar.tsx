"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
      </Link>

      <ul
        className={`hidden h-full gap-12 lg:flex ${isMenuOpen ? "block" : ""}`}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link legacyBehavior href={link.href}>
              <a className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* phone navigation */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          tittle="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        <Image src="/menu.svg" alt="Menu" width={32} height={32} />
      </div>

      {isMenuOpen && (
        <ul className="lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link legacyBehavior href={link.href}>
                <a className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
