"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { FaMagnifyingGlass, FaAngleRight } from "react-icons/fa6";

import loginIcon from "../../public/images/icons/ProfileuserIcon.svg";
import wishlistIcon from "../../public/images/icons/heartIcon.svg";
import cartIcon from "../../public/images/icons/cartIcon.svg";
import NavbarHoverItems from "./NavbarHoverItems";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <header className="sm:pt-[3.3rem] pt-[.5rem] pb-[.7rem] main_header">
        <section className="navbarSections container sm:p-0 px-[2rem]">
          <nav className="navbarWrapper">
            <Link className="logo" href={"/"}>
              <Image src={logo} alt="Project Logo" />
            </Link>
            <div className="search_input_box flex sm:h-[5rem] h-[4rem] mt-[.943rem]">
              <input
                className="outline-none bg-[#F1F1F1] "
                type="text"
                placeholder="I'm looking for..."
              />
              <div className="search_icon w-[6.5rem] bg-secondary flex items-center justify-center cursor-pointer">
                <FaMagnifyingGlass className="size-[2.8rem]" />
              </div>
            </div>
            <div className="nav_actions_group flex sm:gap-[4rem] gap-[1.5rem] ">
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
                <span className="cart_item_couter sm:bg-red bg-secondary h-[2rem] w-[2rem] rounded-full text-center sm:static absolute top-[0rem] right-[-0.3rem]">
                  1
                </span>
              </div>
            </div>
          </nav>
          <ul className="navMenu flex justify-around items-center pt-[3.4rem] ">
            <li>
              <a href="#">Women&apos;s&nbsp;Fashion</a>
              <NavbarHoverItems />
            </li>
            <li>
              <a href="#">men&apos;s&nbsp;Fashion</a>
              <NavbarHoverItems />
            </li>
            <li>
              <a href="#">Kid&apos;s&nbsp;Fashion</a>
              <NavbarHoverItems />
            </li>
            <li>
              <a href="#">Home&nbsp;&&nbsp;Lifestyle </a>
              <NavbarHoverItems />
            </li>
            <li>
              <a href="#">Arts&nbsp;&&nbsp;Crafts</a>
              <NavbarHoverItems />
            </li>
            <li>
              <a href="#">Computer&nbsp;&&nbsp;Electronics</a>
              <NavbarHoverItems />
            </li>
            <li>
              <a href="#">Food&nbsp&&nbsp;Grocery</a>
              <NavbarHoverItems />
            </li>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Navbar;
