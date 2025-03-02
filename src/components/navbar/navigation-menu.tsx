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
              <div
                className="absolute left-[var(--trigger-left)] top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-border bg-popover"
                style={
                  {
                    "--trigger-left":
                      "calc(var(--radix-navigation-menu-trigger-width) / 2 + var(--radix-navigation-menu-item-offset))",
                  } as React.CSSProperties
                }
              />
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm text-white/50 font-light ">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div
                className="absolute left-[var(--trigger-left)] top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-border bg-popover"
                style={
                  {
                    "--trigger-left":
                      "calc(var(--radix-navigation-menu-trigger-width) / 2 + var(--radix-navigation-menu-item-offset))",
                  } as React.CSSProperties
                }
              />
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm text-white/50 font-light ">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div
                className="absolute left-[var(--trigger-left)] top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-border bg-popover"
                style={
                  {
                    "--trigger-left":
                      "calc(var(--radix-navigation-menu-trigger-width) / 2 + var(--radix-navigation-menu-item-offset))",
                  } as React.CSSProperties
                }
              />
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
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
