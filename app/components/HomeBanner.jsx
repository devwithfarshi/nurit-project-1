"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeBanner = () => {
  return (
    <>
      <main className="home_banner_wrapper ">
        <div className="home_slider">
          <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false}>
            <Image
              src={"/images/heroImage.png"}
              alt="Delivery hero"
              width={925.17}
              height={563.55}
            />
            <Image
              src={"/images/heroImage.png"}
              alt="Delivery hero"
              width={925.17}
              height={563.55}
            />
            <Image
              src={"/images/heroImage.png"}
              alt="Delivery hero"
              width={925.17}
              height={563.55}
            />
            <Image
              src={"/images/heroImage.png"}
              alt="Delivery hero"
              width={925.17}
              height={563.55}
            />
          </Carousel>
          <div className="banner_heading_box">
            <h1>Explore Men&apos;s Winter Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <Link href={"/products"} className="shop_now_btn">
              shop now
            </Link>
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
