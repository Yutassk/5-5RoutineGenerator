import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="mb-4 ">
      <Link href={"/"}>
        <h1 className="text-3xl bg-slate-900 text-center text-white mb-2 p-2">Training Generator</h1>
      </Link>
    </div>
  );
};

export default Header;
