import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const HomeCategory = () => {
  const categories = [
    {
      icon: "/images/icons/healthIcon.png",
      title: "Health & Household",
    },
    {
      icon: "/images/icons/kidsIcon.png",
      title: "Kids Fashion",
    },
    {
      icon: "/images/icons/toysIcon.png",
      title: "Toys",
    },
    {
      icon: "/images/icons/groceriesIcon.png",
      title: "Groceries",
    },
    {
      icon: "/images/icons/HomeAndLifestyleIcon.png",
      title: "Home & Lifestyle",
    },
    {
      icon: "/images/icons/menFashionIcon.png",
      title: "Men Fashion",
    },
    {
      icon: "/images/icons/womenFashionIcon.png",
      title: "Women’s Fashion",
    },
    {
      icon: "/images/icons/booksIcon.png",
      title: "Stationary & Books",
    },
    {
      icon: "/images/icons/leatherGoodsIcon.png",
      title: "Leather Goods",
    },
    {
      icon: "/images/icons/jewelleriesIcon.png",
      title: "Jewelleries ",
    },
    {
      icon: "/images/icons/watchesIcon.png",
      title: "Watches ",
    },
    {
      icon: "/images/icons/menFashionIcon2.png",
      title: "Men Fashion ",
    },
    {
      icon: "/images/icons/booksIcon.png",
      title: "Tools & Hardware",
    },
    {
      icon: "/images/icons/leatherGoodsIcon.png",
      title: "Pet Supplies",
    },
    {
      icon: "/images/icons/seasonalIcon.png",
      title: "Seasonal",
    },
  ];
  return (
    <>
      <main className="category_wrapper pt-[5rem]">
        <h2 className="common_heading">Main categories</h2>
        <ul>
          {categories.map((categorie) => (
            <>
              <li
                key={categorie.title}
                className="single_category py-[1.6rem] sm:px-[1.8rem] px-[.8rem] flex  items-center"
              >
                <Image
                  src={categorie.icon}
                  alt={categorie.title}
                  width={30}
                  height={0}
                />
                <p>{categorie.title}</p>
                <FaChevronRight
                  className="rightStroke_icon"
                  fontSize={11}
                  fill="#999999"
                />
              </li>
            </>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomeCategory;
