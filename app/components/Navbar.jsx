import Image from "next/image";
import logo from "@/public/images/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

import loginIcon from "../../public/images/icons/ProfileuserIcon.svg";
import wishlistIcon from "../../public/images/icons/heartIcon.svg";
import cartIcon from "../../public/images/icons/cartIcon.svg";
import NavbarHoverItems from "./NavbarHoverItems";
import { useState } from "react";
const Navbar = () => {
  return (
    <>
      <header className="sm:pt-[3.3rem] pt-[.5rem] pb-[.7rem] main_header">
        <section className="container">
          <nav className="items-center sm:flex mobile_nav">
            <Image className="logo" src={logo} alt="Project Logo" />
            <div className=" ml-[7rem] flex items-center sm:h-[5rem] sm:w-[77.8rem] h-[4rem] w-[100%] search_input_box ">
              <input
                className="w-[100%] ps-[2rem] h-[100%] outline-none bg-[#F1F1F1] placeholder:bg"
                type="text"
                placeholder="I'm looking for..."
              />
              <div className="search_icon h-[100%] w-[6.5rem] bg-secondary flex items-center justify-center cursor-pointer">
                <FaMagnifyingGlass className="size-[2.8rem]" />
              </div>
            </div>
            <div className="nav_actions_group flex sm:gap-[4rem] gap-[1.5rem] ml-auto">
              <div className="nav_actions flex items-center gap-[.6rem] ">
                <Image src={loginIcon} alt="Login" />
                <p className=" hidden sm:block">Login</p>
              </div>
              <div className="nav_actions flex items-center gap-[.6rem] ">
                <Image src={wishlistIcon} alt="WishList" />
                <p className=" hidden sm:block">Wishlist</p>
              </div>
              <div className="nav_actions flex items-center gap-[.6rem] relative">
                <Image src={cartIcon} alt="cart" />
                <p className=" hidden sm:block">My Cart</p>
                <span className="cart_item_couter sm:bg-red bg-secondary h-[2rem] w-[2rem] rounded-full text-center sm:static absolute top-[-.6rem] right-[-0.3rem]">
                  1
                </span>
              </div>
            </div>
          </nav>
          <ul className="navMenu flex sm:justify-around pt-[3.4rem] relative">
            <li>
              <a href="#">Women&apos;s Fashion</a>
              {/* <NavbarHoverItems /> */}
            </li>
            <li>
              <a href="#">men&apos;s Fashion</a>
              {/* <NavbarHoverItems /> */}
            </li>
            <li>
              <a href="#">Kid&apos;s Fashion</a>
              {/* <NavbarHoverItems /> */}
            </li>
            <li>
              <a href="#">Home & Lifestyle</a>
              {/* <NavbarHoverItems /> */}
            </li>
            <li>
              <a href="#">Arts & Crafts</a>
              {/* <NavbarHoverItems /> */}
            </li>
            <li>
              <a href="#">Computer & Electronics</a>
              {/* <NavbarHoverItems /> */}
            </li>
            <li>
              <a href="#">Food & Grocery</a>
              {/* <NavbarHoverItems /> */}
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Navbar;
