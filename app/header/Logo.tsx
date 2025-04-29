import Link from "@/components/link";
import { Routes } from "@/constants/enums";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex-1 flex justify-start">
      <Link href={Routes.ROOT} className="flex items-center gap-2">
        <Image src={"/logo.png"} width={35} height={35} alt="Logo" loading={"eager"} priority />{" "}
        <h1 className="text-primary font-bold text-3xl">Koshari</h1>
      </Link>
    </div>
  );
};

export default Logo;
