"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <main className="review_form_wrapper px-[4.7rem]  py-[4rem] bg-[#FCFCFC]">
        <h3>Add Your Review</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <form>
          <div className="inputBox">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="inputBox">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="inputBox">
            <label htmlFor="review">Review</label>
            <textarea name="review" id="review"></textarea>
          </div>
          <div className="ratting flex mt-[1.5rem] gap-[.4rem] items-center">
            <span className="mr-[.4rem]">Rating</span>
            {[...Array(5)].map((start, index) => {
              const currentStar = index + 1;
              return (
                <>
                  <label
                    onClick={() => {
                      setRating(currentStar);
                    }}
                  >
                    {rating >= currentStar ? (
                      <FaStar
                        className="cursor-pointer"
                        key={index + 1}
                        color="#FFB340"
                        fontSize={25}
                      />
                    ) : (
                      <FaStar color="#A7A7A7" fontSize={25} />
                    )}
                  </label>
                </>
              );
            })}
          </div>
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default ReviewForm;
