import ProdtctDetails from "@/app/components/ProdtctDetails";
import ProductMoreDetails from "@/app/components/ProductMoreDetails";
import ReviewForm from "@/app/components/ReviewForm";
import SingleProdutctReviews from "@/app/components/SingleProdutctReviews";

const SingleProductPage = () => {
  return (
    <>
      <section className="container sm:p-0 pt-[1.3rem] px-[2rem]">
        <ProdtctDetails />
        <ProductMoreDetails />
        <SingleProdutctReviews />
        <ReviewForm />
      </section>
    </>
  );
};

export default SingleProductPage;
