"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import vercelLogo from "@/app/assets/vercel-logo-dark.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Products from "./products";
import Solutions from "./solutions";
import Resources from "./resources";

export function NavigationMenuWithNub() {
  return (
    <section className="lg:max-w-[1448px] max-w-[95%] mx-auto w-full flex items-center justify-between">
      <NavigationMenu className="max-sm:py-2  gap-x-8">
        <Image
          alt="vercel-logotype Logo"
          loading="eager"
          width="90.6923076923077"
          height="18"
          decoding="async"
          data-nimg="1"
          className="geist-hide-on-dark"
          // style="color:transparent"
          src={vercelLogo}
        ></Image>
        <NavigationMenuList className="max-lg:hidden relative text-xs">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm text-white/50 font-light ">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Products />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm text-white/50 font-light ">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Solutions />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm text-white/50 font-light ">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Resources />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/enterprise" legacyBehavior passHref>
              <NavigationMenuLink
                className={`text-sm text-white/50 font-light ${navigationMenuTriggerStyle()}`}
              >
                Enterprise
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={`text-sm text-white/50 font-light ${navigationMenuTriggerStyle()}`}
              >
                Docs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink
                className={`text-sm text-white/50 font-light ${navigationMenuTriggerStyle()}`}
              >
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden lg:flex gap-x-3 text-sm items-center">
        <Button variant={"outline"}>Log In</Button>
        <Button variant={"outline"}>Contact</Button>
        <Button>Sign Up</Button>
      </div>
    </section>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
