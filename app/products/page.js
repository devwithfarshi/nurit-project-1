import FilterWrapper from "../components/FilterWrapper";
import "./product.css";

const Products = () => {
  return (
    <>
      <section className="container sm:p-0 pt-[1.3rem] px-[2rem]">
        <main className="filterd_wrapper flex gap-[5.4rem]">
          <FilterWrapper />
        </main>
      </section>
    </>
  );
};

export default Products;
