import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import data from "@/lib/data";
import Search from "./search";
import Sidebar from "./sidebar";
import { getAllCategories } from "@/lib/actions/product.actions";

export default async function Header() {
  const categories = await getAllCategories();

  return (
    <header className="bg-black text-white">
      {/* Top Header */}
      <div className="px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 header-button font-extrabold text-2xl m-1"
            >
              <Image
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              <span className="hidden sm:block">{APP_NAME}</span>
            </Link>
          </div>
          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          {/* Menu Items */}
          <Menu />
        </div>
        {/* Mobile Search */}
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>

      {/* Navbar */}
      <div className="flex items-center px-3 mb-[1px] bg-gray-800">
        <Sidebar categories={categories} />
        
        <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
