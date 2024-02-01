"use client";
import React, { useState } from "react";
import {
  FaCheck,
  FaCheckCircle,
  FaHeart,
  FaMinus,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const SingleProductMainDetails = () => {
  const [size, setsize] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="main_details_section">
      <h2>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h2>
      <div className="single_prodcuts_reviews flex items-center ">
        <span className="flex items-center">
          <span className="mr-[.5rem]">4.0 </span>
          <FaStar fontSize={24} color="#FFB340" />{" "}
          <FaStar fontSize={24} color="#FFB340" />{" "}
          <FaStar fontSize={24} color="#FFB340" />{" "}
          <FaStar fontSize={24} color="#FFB340" />
          <FaStar fontSize={24} color="#A7A7A7" />
          <span className="ml-[.5rem]">(223)</span>
        </span>

        <span className="flex items-center gap-[1rem]">
          <FaCheck fontSize={21} color="#0AC96D" /> 4,320 Sold
        </span>
        <span className="flex items-center gap-[1.5rem]">
          <FaHeart fontSize={22} color="#A7A7A7" /> Add to WishList
        </span>
      </div>
      <div className="single_product_price_info flex gap-[2.5rem] items-center">
        <h5 className="flex items-center gap-[0.5rem]">
          <FaBangladeshiTakaSign fontSize={30} /> 976.33
        </h5>
        <del className="flex items-center gap-[0.5rem]">
          <FaBangladeshiTakaSign fontSize={15} /> 1020.99
        </del>
        <div className="off_persent">20%</div>
      </div>
      <div className="in_stock_status flex items-center gap-[2rem]">
        <p>
          <span>SKU: </span>12314124124
        </p>
        <p className="flex items-center gap-[.4rem]">
          <FaCheckCircle fontSize={16} color="#3AB137" />
          In Stock
        </p>
      </div>
      <div className="more_info_via_list">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <ul>
          <li> Direct Full Array</li>
          <li> Quantum Dot Technology</li>
          <li> Ambient Mode</li>
          <li> One Remote Control</li>
        </ul>
      </div>
      <div className="product_size flex gap-[1.6rem]">
        <p>Size</p>
        {["s", "m", "l", "x", "xl", "xxl"].map((v) => (
          <>
            <input
              key={v}
              className={`w-[3.5rem] h-[2.9rem] text-center ${
                size === v
                  ? "bg-[#0198E9] text-[#ffffff]"
                  : "bg-[#ffffff] text-[#6e6e6f]"
              } `}
              value={v}
              onClick={(e) => {
                setsize(e.target.value);
              }}
            />
          </>
        ))}
      </div>
      <div className="product_quanity flex items-center gap-[1.6rem]">
        <p>Quantity</p>
        <div className="quantity flex items-center w-[8.5rem] h-[3.5rem]">
          <FaMinus
            className="add_minus_icon"
            fontSize={16}
            color="rgba(51, 51, 51,0.75)"
            onClick={() => {
              setQuantity(quantity > 0 ? quantity - 1 : 0);
            }}
          />
          <input type="text" value={quantity} className="w-[40%]" />
          <FaPlus
            className="add_minus_icon"
            fontSize={10}
            color="rgba(51, 51, 51,0.75)"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          />
        </div>
        <button className="addToCart_btn">Add cart</button>
        <button className="buy_now_btn">Buy Now</button>
      </div>
    </section>
  );
};

export default SingleProductMainDetails;
