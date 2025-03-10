import React from "react";

import Link from "next/link";

export default function Links() {
  return (
    <div className="flex items-center gap-5 ">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-white font-medium text-[16px] leading-5 uppercase">
          {link.name}
        </Link>
      ))}
    </div>
  );
}

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Charity",
    href: "/charity",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Career",
    href: "/career",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
