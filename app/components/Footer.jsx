import logo from "@/public/images/logo.png";

import { MdLocalShipping } from "react-icons/md";
import { FaStar, FaHistory, FaCreditCard, FaHeadset } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container sm:p-0 px-[2rem]">
          <section className="flex sm:items-center sm:justify-between sm:gap-[9.9rem] gap-[2.5rem] sm:flex-row flex-col sm:py-[5rem] py-[2.5rem]">
            <div className="flex items-center sm:gap-[1.8rem] gap-[1.4rem]">
              <MdLocalShipping
                fill="rgba(1, 152, 233,0.8)"
                id="shipping_icon"
              />
              <div className="footer_top_text">
                <h5>free shipping</h5>
                <p>Order via compaign</p>
              </div>
            </div>
            <div className="flex items-center sm:gap-[2.5rem] gap-[1.7rem]">
              <FaStar id="star_icon" fill="rgba(1, 152, 233,0.8)" />
              <div className="footer_top_text">
                <h5>Best Price</h5>
                <p>Quality products</p>
              </div>
            </div>
            <div className="flex items-center sm:gap-[3.9rem] gap-[1.6rem]">
              <FaHistory id="history_icon" fill="rgba(1, 152, 233,0.8)" />
              <div className="footer_top_text">
                <h5>Free Retern</h5>
                <p>Within 7 days returns</p>
              </div>
            </div>
            <div className="flex items-center sm:gap-[3.3rem] gap-[1.4rem]">
              <FaCreditCard id="credit_icon" fill="rgba(1, 152, 233,0.8)" />
              <div className="footer_top_text">
                <h5>Secure Payment</h5>
                <p>100% secure payment</p>
              </div>
            </div>
          </section>
        </div>
        <section className="main_footer">
          <div className="container sm:p-0 px-[2rem]">
            <div className="main_footer_wrapper">
              <div className="first_row">
                <Link className="logo hidden sm:block" href={"/"}>
                  <Image src={logo} alt="Project Logo" />
                </Link>
                <p className="hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="social_links flex gap-[2rem]">
                  <Image
                    src={"/images/icons/facebook.svg"}
                    alt="insta"
                    width={41.4}
                    height={41.4}
                  />
                  <Image
                    src={"/images/icons/twitter.svg"}
                    alt="insta"
                    width={41.4}
                    height={41.4}
                  />
                  <Image
                    src={"/images/icons/linkedin.svg"}
                    alt="insta"
                    width={41.4}
                    height={41.4}
                  />
                  <Image
                    src={"/images/icons/instagram.svg"}
                    alt="insta"
                    width={41.4}
                    height={41.4}
                  />
                </div>
              </div>
              <ul>
                <li>QUICK LINKS</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Products</li>
                <li>Login</li>
                <li>Sign Up</li>
              </ul>
              <ul>
                <li>CUSTOMER AREA</li>
                <li>My Account</li>
                <li>Orders</li>
                <li>Terms</li>
                <li>Privacy Policy</li>
                <li>Shipping Information</li>
              </ul>
              <div className="footer_contact">
                <h5>Contact</h5>
                <p className="mt-[1.6rem] mb-[2rem] sm:mt-[2.5rem] sm:mb-[3.1rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor{" "}
                </p>
                <div className="flex items-center gap-[2.7rem]  ">
                  <FaHeadset fontSize={48} fill="#8D8D8D" />
                  <div className="call_info">
                    <span>Have any question?</span>
                    <h6 className="text-secondary">099 456 789</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container sm:p-0 px-[2rem]">
          <div className="flex items-center justify-center sm:justify-between copyRight py-[2rem]">
            <p className="">Projectnirvoya - © 2021 All Rights Reserved</p>
            <div className="items-center gap-[.3rem] sm:flex hidden">
              <span className="text-secondary">Pay With</span>
              <Image
                src={"/images/paywithImg.png"}
                alt="Pay with"
                width={576}
                height={34}
                className="py-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
