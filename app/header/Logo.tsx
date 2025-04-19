import Link from "@/components/link";
import { Routes } from "@/constants/enums";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link href={Routes.ROOT} className="flex items-center justify-start gap-2 flex-1">
      <Image src={"/logo.png"} width={35} height={35} alt="Logo" />{" "}
      <h1 className="text-primary font-bold text-3xl">Koshari</h1>
    </Link>
  );
};

export default Logo;
