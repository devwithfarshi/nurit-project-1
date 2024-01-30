import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductWrapper from "./ProductWrapper";

const FlashDeals = ({ heading, produtcsArray }) => {
  return (
    <>
      <main className="flash_deals_wrapper pt-[5rem] ">
        <div className="flex justify-between items-center">
          <h2 className="common_heading">{heading}</h2>
          <Link
            href={"#"}
            className="sm:flex items-center gap-[1.8rem] hidden viewmoreBtn"
          >
            <span>View more</span> <FaArrowRightLong />
          </Link>
        </div>
        <ProductWrapper produtcsArray={produtcsArray} />
      </main>
    </>
  );
};

export default FlashDeals;
