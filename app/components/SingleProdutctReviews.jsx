import Image from "next/image";
import { FaStar } from "react-icons/fa";

const SingleProdutctReviews = () => {
  return (
    <>
      <div className="reviews_part mt-[3rem] bg-[#FCFCFC] px-[4.7rem]  py-[4rem] ">
        <div className="reviews_header flex items-center gap-[7.5rem]">
          <h3>
            <p>Customer reviews</p>
            <div className="flex mt-[1.5rem] gap-[.4rem] items-center">
              <FaStar color="#FFB340" fontSize={15} />
              <FaStar color="#FFB340" fontSize={15} />
              <FaStar color="#FFB340" fontSize={15} />
              <FaStar color="#FFB340" fontSize={15} />
              <FaStar color="#FFB340" fontSize={15} />
              <span className="ml-[.4rem]">4.6 out of 5</span>
            </div>
          </h3>

          <div className="ratting_progress">
            {[79, 70, 50, 30, 60].map((v, i) => (
              <div
                className=" flex items-center justify-between  mb-[1.6rem]"
                key={v}
              >
                <span>{i + 1} Stars</span>{" "}
                <progress
                  className="progress w-[20.6rem] mx-[1.6rem]"
                  value={v}
                  max={100}
                ></progress>
                <span>{v}%</span>
              </div>
            ))}
          </div>
          <button className="writeABtn">Write a Review</button>
        </div>
      </div>
      <div className="reviews_comments bg-[#FCFCFC]">
        <h3 className="px-[4.8rem] py-[2rem]">Reviews (4)</h3>
        <ul className="px-[4.8rem] py-[1.9rem]">
          {[...Array(4)].map((v, i) => {
            return (
              <li className="mb-[3rem]" key={i + 1}>
                <div className="flex items-center gap-[1.6rem] mb-[2.4rem]">
                  <Image
                    src={"/images/user1.jpg"}
                    alt="user"
                    width={56}
                    height={56}
                  />
                  <div className="info">
                    <h4>Vanille</h4>
                    <div className="flex  mt-[.8rem] gap-[.4rem] items-center">
                      <span className="mr-[1.2rem]">5.0</span>
                      <FaStar color="#FFB340" fontSize={15} />
                      <FaStar color="#FFB340" fontSize={15} />
                      <FaStar color="#FFB340" fontSize={15} />
                      <FaStar color="#FFB340" fontSize={15} />
                      <FaStar color="#FFB340" fontSize={15} />
                      <span className="ml-[1rem]">1 Month Ago</span>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SingleProdutctReviews;
