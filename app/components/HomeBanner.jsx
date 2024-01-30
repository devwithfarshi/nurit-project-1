"use client";

import Image from "next/image";

const HomeBanner = () => {
  return (
    <>
      <main className="home_banner_wrapper ">
        <div className="home_slider">
          <Image
            src={"/images/heroImage.png"}
            alt="Delivery hero"
            width={925.17}
            height={563.55}
          />
          <div className="banner_heading_box">
            <h1>Explore Men&apos;s Winter Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.{" "}
            </p>
            <button className="shop_now_btn">shop now</button>
          </div>
        </div>
        <div className="banner_right_part sm:block hidden">
          <div className="banner_image_two">
            <Image
              src={"/images/delivery_hero2.svg"}
              alt="Delivery hero"
              width={447.72}
              height={267.72}
            />
            <button className="banner_btn banner_btn_one">
              Groceries collection
            </button>
          </div>
          <div className="banner_image_three">
            <Image
              src={"/images/hero3.png"}
              alt="Delivery hero"
              width={447.72}
              height={267.72}
            />
            <button className="banner_btn banner_btn_two">
              Health & Beauty collection
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeBanner;
