import AllProducts from "../components/AllProducts";
import FilterWrapper from "../components/FilterWrapper";
import "./product.css";

const Products = () => {
  return (
    <>
      <section className="container sm:p-0 pt-[1.3rem] px-[2rem]">
        <main className="filterd_wrapper flex items-start gap-[5.4rem] mt-[4.3rem]">
          <FilterWrapper />
          <AllProducts />
        </main>
      </section>
    </>
  );
};

export default Products;
