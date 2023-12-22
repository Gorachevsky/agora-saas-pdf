"use client"

import { Menu } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="sm:hidden">
      <Menu 
        onClick={toggleOpen} 
        className="relative z-50 h-5 w-s text-zinc-700" 
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default MobileNav;