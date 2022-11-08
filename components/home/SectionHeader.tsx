import React from "react";
import Link from "next/link";
import { SectionHead } from "../../types";
export default function SectionHeader({
  title,
  linkTitle,
  linkAddress,
}: SectionHead) {
  return (
    <div className="flex justify-between px-2">
      <h2 className="text-lg font-bold">{title}</h2>
      <Link href={linkAddress}>
        <button className="text-black">{linkTitle}</button>
      </Link>
    </div>
  );
}
