import { Link } from 'react-router-dom';
import { NavListItem } from './NavListItem';
import { useState } from 'react';
import { ShoppingCart } from './ShoppingCart';

interface Route {
  path: `/${string}`;
  nameSection: string;
  nameIcon: string;
}

export const routes: Route[] = [
  { path: '/', nameSection: 'Home', nameIcon: 'bx bx-home-alt-2' },
  {
    path: '/products',
    nameSection: 'Products',
    nameIcon: 'bx bx-shopping-bag',
  },
  { path: '/contact', nameSection: 'Contact', nameIcon: 'bx bx-phone-call' },
  { path: '/about-us', nameSection: 'About us', nameIcon: 'bx bx-buildings' },
];

export const Navbar = () => {
  const [isShowSidebarMobile, setIsShowSidebarMobile] =
    useState<boolean>(false);

  const onToggleShowSidebar = () => {
    setIsShowSidebarMobile(!isShowSidebarMobile);
  };

  return (
    <header className="flex h-14 items-center justify-between px-3 shadow-sm">
      <button
        className="h-8 w-8 rounded-full duration-300 hover:bg-blue-light md:hidden"
        onClick={onToggleShowSidebar}>
        <i
          className={`${isShowSidebarMobile ? 'bx bx-x' : 'bx bx-menu'} text-xl`}></i>
      </button>

      <Link
        to="/"
        className="ml-5 mt-1 rounded-b-2xl p-1 pt-2 hover:opacity-80 md:ml-0">
        <img
          id="logo"
          className="w-28"
          src="/assets/logo.png"
          alt="logo"
        />
      </Link>

      {/* Mobile navigation list */}
      <nav
        className={`${isShowSidebarMobile ? 'left-0' : 'left-[-224px]'} fixed left-0 top-14 z-50 h-[calc(100%_-_56px)] w-56 bg-white px-3 py-5 shadow-lg duration-300 md:hidden`}>
        <h3 className="font-bold text-blue-grey opacity-80">Sections</h3>
        <ul className="">
          {routes.map(({ path, nameSection, nameIcon }) => (
            <NavListItem
              key={path}
              path={path}
              nameSection={nameSection}
              nameIcon={nameIcon}
              my={15}
            />
          ))}
        </ul>
      </nav>

      {/* Desktop navigation list */}
      <nav className="hidden md:inline-block">
        <ul className="md:flex">
          {routes.map(({ path, nameSection, nameIcon }) => (
            <NavListItem
              key={path}
              path={path}
              nameSection={nameSection}
              nameIcon={nameIcon}
              mx={10}
            />
          ))}
        </ul>
      </nav>

      <div>
        <button
          onClick={() => console.log('click')}
          className="mr-1 h-8 w-8 rounded-full duration-300 hover:bg-blue-light">
          <i className="bx bx-user text-xl"></i>
        </button>
        <button
          onClick={() => console.log('click')}
          className="h-8 w-8 rounded-full duration-300 hover:bg-blue-light">
          <i className="bx bx-cart text-xl"></i>
        </button>

        <ShoppingCart />
      </div>
    </header>
  );
};
