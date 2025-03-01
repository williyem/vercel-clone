"use client";

import React from "react";
// import Tabs from "./tabs";
import { NavigationMenuWithNub } from "./navigation-menu";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-start bg-neutral-950 p-2 text-neutral-200 md:justify-center">
      <NavigationMenuWithNub />
      {/* <Tabs /> */}
    </nav>
  );
};

export default NavBar;
