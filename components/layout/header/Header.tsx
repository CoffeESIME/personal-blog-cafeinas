import React from "react";
import Navbar from "./navbar/NavBar";
import Image from "next/image";
import Logo from '../../../public/logo.webp'
function Header() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image src={Logo} alt="My Blog Logo" className="h-8 w-8 mr-2 rounded-full" width={100} height={100}/>
          <span className="text-xl font-bold">Cafeinas</span>
        </div>
        <Navbar></Navbar>
        <div>

        </div>
      </div>
    </header>
  );
}

export default Header;
