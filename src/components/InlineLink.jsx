import Link from "next/link";
import React from "react";

const InlineLink = ({ href, children }) => {
  return <Link href={href} className=" font-semibold text-zinc-100 hover:text-zinc-500 ">{children}</Link>;
};

export default InlineLink;
