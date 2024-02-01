"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";

const SingleProduct = ({
  id,
  wishList: bookMark,
  title,
  price,
  ratting,
  image,
}) => {
  const [wishList, setWishList] = useState(bookMark);
  return (
    <li className="single_product_wrapper relative ">
      <figure>
        <Image
          src={image}
          alt={title}
          className="product_image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <figcaption>
          -<span>{25}</span>% OFF
        </figcaption>
        <FiHeart
          strokeWidth={1.5}
          stroke={!wishList ? "rgba(153, 153, 153,0.4)" : "#FF5555"}
          fill={wishList ? "#FF5555" : "transparent"}
          fontSize={"2.4rem"}
          onClick={() => setWishList(!wishList)}
          className="absolute top-[2.205rem] right-[1.488rem] cursor-pointer"
        />
      </figure>
      <div className="flex gap-[.2rem] mt-[1.614rem] ">
        {[...Array(5)].map((star, index) => {
          const currentRatting = index + 1;
          return (
            <>
              <FaStar
                key={index}
                color={currentRatting <= ratting ? "#FAC96B" : "#D3D3D3"}
                fontSize={"1.6rem"}
              />
            </>
          );
        })}
        {/* <FaStar color="#D3D3D3" fontSize={"1.6rem"} /> */}
        <span className="reviews_couter">(0)</span>
      </div>
      <p className="product_title ">{title}</p>
      <div className="flex items-center justify-between">
        <p className="price_tag text-primary flex items-center">
          <FaBangladeshiTakaSign />
          <span>{price}</span>
        </p>
        <Image
          src={"/images/icons/addToCartIcon.svg"}
          alt="Add To Cart"
          width={24}
          height={21}
        />
      </div>
    </li>
  );
};

export default SingleProduct;
