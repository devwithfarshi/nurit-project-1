"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SingleProductImages = () => {
  const images = [
    "/images/products/product5.png",
    "/images/products/product2.png",
    "/images/products/product3.png",
    "/images/products/product4.png",
  ];
  const [img, setimg] = useState(images[0]);
  return (
    <section>
      <div className="product_images flex items-center gap-[2.4rem]">
        <div className="images_preview w-[55rem]">
          <Image src={img} width={592} height={0} alt="product" />
        </div>
        <div>
          <div
            onClick={() => {
              const findIndex = images.findIndex((v) => v === img);
              setimg(
                images.length > findIndex && findIndex !== 0
                  ? images[findIndex - 1]
                  : images[images.length - 1]
              );
            }}
          >
            <FaAngleUp
              strokeWidth={4}
              className=" mx-auto mb-[4rem] cursor-pointer"
              fill="#949494"
              fontSize={24}
            />
          </div>

          {images.map((value) => {
            return (
              <div
                style={{
                  border: `0.15rem solid ${
                    value === img ? "#0198E9" : "transparent"
                  }`,
                  cursor: "pointer",
                  background: "#F2F2F2",
                  margin: "1rem 0",
                }}
                key={value}
                onClick={() => {
                  setimg(value);
                }}
              >
                <Image
                  className="mb-[1rem]"
                  src={value}
                  alt="product"
                  width={92}
                  height={0}
                />
              </div>
            );
          })}
          <div
            onClick={() => {
              const findIndex = images.findIndex((v) => v === img);
              setimg(
                images.length - 1 > findIndex
                  ? images[findIndex + 1]
                  : images[0]
              );
            }}
          >
            <FaAngleDown
              strokeWidth={4}
              className=" mx-auto mt-[4rem] cursor-pointer"
              fill="#949494"
              fontSize={24}
            />
          </div>
        </div>
      </div>
      <div className="shear_links flex items-center">
        <span>Share</span>
        <div className="icons flex items-center gap-[1.4rem]">
          <Image
            width={0}
            height={0}
            src={"/images/icons/shearLinkedin.svg"}
            alt="linkedin"
          />
          <Image
            width={0}
            height={0}
            src={"/images/icons/twitter.svg"}
            alt="Twitter"
          />
          <Image
            width={0}
            height={0}
            src={"/images/icons/shearFacebook.svg"}
            alt="shearFacebook"
          />
          <Image
            width={0}
            height={0}
            src={"/images/icons/shearWP.svg"}
            alt="shearWP"
          />
          <Image
            width={0}
            height={0}
            src={"/images/icons/copylink.svg"}
            alt="copylink"
          />
        </div>
      </div>
    </section>
  );
};

export default SingleProductImages;
