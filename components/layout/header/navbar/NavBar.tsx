import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
