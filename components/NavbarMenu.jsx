"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/ResizableNavbar";
import React from "react";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { IconAppWindow } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "@/components/ui/moving-border";

const NavbarMenu = () => {
  const navItems = [
    {
      name: "Movies",
      link: "#movies",
      subItems: [
        { name: "Action", link: "/movies/action" },
        { name: "Funny", link: "/movies/funny" },
        { name: "Romance", link: "/movies/romance" },
        { name: "Thriller", link: "/movies/thriller" },
        {name: "Cars", link: "/movies/car"},
        {name: "Biopic", link:"/movies/biopic"},
        {name:"Scifi", link:"/movies/scifi"},
        {name:"Founder Films", link:"/movies/founder"},
        {name:"Horror",link:"/movies/horror"}
      ],
    },
    {
      name: "Series",
      link: "#series",
      subItems: [
        { name: "Action", link: "/series/action" },
        { name: "Drama", link: "/series/drama" },
        { name: "Scifi", link: "/series/scifi" },
        { name: "Thriller", link: "/series/thriller" },
        {name:  "Shows", link: "/series/shows" },
        {name: "Documentry", link:"/series/documentry"}
      ],
    },
    {
      name: "Anime",
      link: "#anime",
      subItems: [
        { name: "Shonen", link: "#shonen" },
        { name: "Seinen", link: "#seinen" },
      ],
    },
    {
      name: "Manga",
      link: "#manga",
      subItems: [
        { name: "Comedy", link: "#comedy" },
        { name: "Adventure", link: "#adventure" },
      ],
    },
    {
      name: "Country",
      link:"#country",
      subItems: [
        {name: "India", link: '#india'},
        {name: "America", link: '#america'},
        {name: "Korea", link: '#korea'},
        {name: "Japan", link: '#japan'},
      ],
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full ">
      <Navbar>
        {/* <BackgroundGradient /> */}
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="secondary">Search</NavbarButton> */}
            <NavbarButton variant="primary">Signup</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* {navItems.map((item, idx) => (
              <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
              >
              <span className="block">{item.name}</span>
              </a>
              ))} */}
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`} className="mb-2">
                <a
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-neutral-600 dark:text-neutral-300 font-medium"
                >
                  {item.name}
                </a>

                {item.subItems && (
                  <ul className="ml-4 mt-1">
                    {item.subItems.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <a
                          href={sub.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-gray-600 dark:text-gray-400 py-1"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                >
                Search
                </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <Button
                  borderRadius="1.75rem"
                  className="bg-slate-900 border-slate-800"
                >
                  Signup
                </Button>
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
};

export default NavbarMenu;
