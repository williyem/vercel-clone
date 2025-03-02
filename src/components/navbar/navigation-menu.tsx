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
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
