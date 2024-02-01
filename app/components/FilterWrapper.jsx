"use client";
import { useState } from "react";
import { FaArrowDown, FaMinus, FaAngleDown, FaStar } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const FilterWrapper = () => {
  const [accordinOpen, setAccordinOpen] = useState({
    price: false,
    rating: false,
  });
  const priceAccordinHandler = () => {
    setAccordinOpen((preValue) => {
      return {
        ...preValue,
        price: !preValue.price,
      };
    });
  };
  const ratingAccordinHandler = () => {
    setAccordinOpen((preValue) => {
      return {
        ...preValue,
        rating: !preValue.rating,
      };
    });
  };
  return (
    <section className="  px-[1.9rem] py-[2.5rem] bg-[#fff]">
      <div className="filter_wrapper ">
        <div className="first_filterBy pb-[2rem]">
          <h5>Related Categories</h5>
          <ul className="category_main_list">
            <li className="main_category">
              Men&apos;s fashion
              <ul>
                <li>Men&apos;s Jacket</li>
                <li>Men&apos;s T-Shirts</li>
                <li>Casual Shirts</li>
                <li>Summer T-Shirts</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="filterByPrice py-[2rem]">
          <h5
            className="flex justify-between cursor-pointer"
            onClick={priceAccordinHandler}
          >
            <span>Filter by Price</span>
            <FaAngleDown
              className={`ransition-all duration-300 ease-in-out text-[#3d3d3f] ${
                accordinOpen.price ? "rotate-180" : "rotate-0"
              }`}
            />
          </h5>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              accordinOpen.price
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <input type="range" className="price_range my-[3rem]" />
              <p className="price_range_text flex items-center">
                <span>Price:</span>
                <span className="flex items-center text-[#383838]">
                  <FaBangladeshiTakaSign fontSize={15} />
                  1000 &nbsp; <FaMinus fontSize={15} strokeWidth={0} /> &nbsp;
                  <FaBangladeshiTakaSign fontSize={15} />
                  2500
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Filter by rating */}
        <div className="filterByRating py-[2rem]">
          <h5
            className="cursor-pointer flex justify-between"
            onClick={ratingAccordinHandler}
          >
            <span>Filter by rating</span>
            <FaAngleDown
              className={`ransition-all duration-300 ease-in-out text-[#3d3d3f] ${
                accordinOpen.rating ? "rotate-180" : "rotate-0"
              }`}
            />
          </h5>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              accordinOpen.rating
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <ul className="overflow-hidden mt-[3.2rem]">
              {[...Array(5)].map((star, index) => {
                const currentRatting = index + 1;
                return (
                  <>
                    <li key={index + 1} className="flex mb-[1.6rem]">
                      <input
                        className="mr-[1.6rem] w-[2.4rem]"
                        type="checkbox"
                        style={{
                          border: ".3rem solid #D0D0D2",
                          outline: "none",
                        }}
                      />{" "}
                      {[...Array(5)].map((v, i) => {
                        if (currentRatting >= i + 1) {
                          return (
                            <>
                              <FaStar
                                className="ml-[.8rem]"
                                key={i + 3}
                                color="#FAC96B"
                                fontSize={"2.4rem"}
                              />
                            </>
                          );
                        }
                      })}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterWrapper;
