import Image from "next/image";
import Link from "next/link";

export const logo = (
  <Link href="/" className="z-10">
    <Image src="/new-wayll-logo.svg" alt="logo" width={127} height={32} />
  </Link>
);
