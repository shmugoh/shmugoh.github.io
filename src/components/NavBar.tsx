import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

export const NavBar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col gap-1.5">
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuStyle}>
                Home
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="/projects">
              <NavigationMenuLink className={navigationMenuStyle}>
                Projects
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <a href="/about">
              <NavigationMenuLink className={navigationMenuStyle}>
                About
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const navigationMenuStyle = cn(
  navigationMenuTriggerStyle(),
  "justify-normal text-left w-36 rounded-md border"
);
