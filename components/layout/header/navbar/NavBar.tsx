import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</Link>
          <Link href="/blog" className="hover:bg-blue-700 px-3 py-2 rounded">Blog</Link>
          <Link href="/gallery" className="hover:bg-blue-700 px-3 py-2 rounded">Gallery</Link>
          <Link href="/tutorials" className="hover:bg-blue-700 px-3 py-2 rounded">Tutorials</Link>
          <Link href="/projects" className="hover:bg-blue-700 px-3 py-2 rounded">Projects</Link>
          <Link href="/reviews" className="hover:bg-blue-700 px-3 py-2 rounded">Reviews</Link>
          <Link href="/reflections" className="hover:bg-blue-700 px-3 py-2 rounded">Reflections</Link>
          <Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
