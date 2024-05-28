import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { headerLogo } from '../assets/images';
import { navLinks, profileMenuItems } from '../constants';

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <button
          type="button"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={key}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

function NavList() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (key) => {
    clearTimeout(timeoutId);
    setHoveredItem(key);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 2000); // 2 seconds delay
    setTimeoutId(id);
  };

  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navLinks.map(({ label, href, icon, submenu }, key) => (
        <li
          key={key}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <Typography
            as="a"
            href={href}
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <div className="flex items-center gap-2 lg:rounded-full">
              {icon && React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900">{label}</span>
              {submenu && <ChevronDownIcon className="h-4 w-4 ml-2" />}
            </div>
          </Typography>
          {submenu && (
            <div
              className={`absolute left-0 mt-2 w-64 bg-white shadow-lg transition-opacity duration-300 ${
                hoveredItem === key ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {submenu.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center py-2 px-4 text-gray-700 hover:bg-red-500 hover:text-white hover:font-bold"
                >
                  <img src={item.img} alt={item.label} className="w-8 h-8 mr-2" />
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-4 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <a href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          <img src={headerLogo} alt="Logo" className="h-10" />
        </a>
        <div className="flex-1 flex justify-center">
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll lg:hidden">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
