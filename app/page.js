import ProductLists from "./components/ProductList";
import HomeBanner from "./components/HomeBanner";
import HomeCategory from "./components/HomeCategory";
import { productArray } from "./config/data";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="container sm:p-0 pt-[1.3rem] px-[2rem]">
        <HomeBanner />
        <HomeCategory />
        <ProductLists produtcsArray={productArray} heading={"Flash Deals"} />
        {/* <ProductLists
          produtcsArray={[
            ...productArray,
            ...productArray.reverse(),
            ...productArray.reverse(),
            ...productArray,
            ...productArray.reverse(),
          ]}
          heading={"Featured Product"}
        /> */}
        <button className="uppercase bg-[#34ADED] px-[2.5rem] py-[.9rem] text-[#fff] flex items-center showMore_btn mx-[auto] my-[4rem]">
          <span>show more</span>
          <MdKeyboardArrowDown className="ml-[.4rem]" fontSize={24} />
        </button>
      </section>
    </>
  );
}
