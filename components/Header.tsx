'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu, ChevronDown } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const devices = [
  'Air Conditioner',
  'Air Purifier',
  'Water Purifier',
  'Refrigerator',
  'Washing Machine',
  'Television',
  'Laptop',
  'Mobile Phone',
  'Gyser'
];

export default function Header() {
  const [isLoggedIn] = useState(true);
  const [isDevicesOpen, setIsDevicesOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="/logohere.jpeg"
                alt="Pixel Solutions"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Devices & Plans</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                        {devices.map((device) => (
                          <div key={device} className="space-y-2">
                            <h4 className="font-medium">{device}</h4>
                            <ul className="space-y-1 text-sm">
                              <li>
                                <Link href="/" className="block p-2 hover:bg-accent">
                                  Extended Warranty
                                </Link>
                              </li>
                              <li>
                                <Link href="/" className="block p-2 hover:bg-accent">
                                  Maintenance & Repair
                                </Link>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        Home Protection
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        Activate Plan
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        Track Service Request
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {isLoggedIn ? (
                  <Button variant="ghost" className="gap-2">
                    <User className="h-5 w-5" />
                    Hi, User
                  </Button>
                ) : (
                  <Button>Sign In</Button>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {/* <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                0
              </span> */}
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-8">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Hi, Pranav TJ</span>
                  </div>

                  <Collapsible
                    open={isDevicesOpen}
                    onOpenChange={setIsDevicesOpen}
                    className="w-full"
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between">
                        Devices & Plans
                        <ChevronDown className={`h-4 w-4 transition-transform ${isDevicesOpen ? 'transform rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 py-2">
                      {devices.map((device) => (
                        <div key={device} className="py-2">
                          <h4 className="font-medium mb-2">{device}</h4>
                          <ul className="space-y-2 pl-4">
                            <li>
                              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Extended Warranty
                              </Link>
                            </li>
                            <li>
                              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Maintenance & Repair
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Link href="#" className="block py-2 text-lg font-medium">
                    Home Protection
                  </Link>
                  <Link href="#" className="block py-2 text-lg font-medium">
                    Activate Plan
                  </Link>
                  <Link href="#" className="block py-2 text-lg font-medium">
                    Track Service Request
                  </Link>

                  <div className="mt-auto pt-8 border-t">
                    <Button className="w-full" variant="outline">
                      Logout
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}