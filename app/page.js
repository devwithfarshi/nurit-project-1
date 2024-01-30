import ProductLists from "./components/ProductList";
import HomeBanner from "./components/HomeBanner";
import HomeCategory from "./components/HomeCategory";
import { productArray } from "./config/data";

export default function Home() {
  return (
    <>
      <section className="container sm:p-0 pt-[1.3rem] px-[2rem]">
        <HomeBanner />
        <HomeCategory />
        <ProductLists produtcsArray={productArray} heading={"Flash Deals"} />
        <ProductLists
          produtcsArray={[
            ...productArray,
            ...productArray.reverse(),
            ...productArray.reverse(),
            ...productArray,
          ]}
          heading={"Featured Product"}
        />
      </section>
    </>
  );
}
