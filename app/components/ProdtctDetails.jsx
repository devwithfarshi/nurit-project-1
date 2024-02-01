import "../products/[id]/singleProduct.css";
import Link from "next/link";
import SingleProductImages from "./SingleProductImages";
import SingleProductMainDetails from "./SingleProductMainDetails";

const ProdtctDetails = () => {
  return (
    <>
      <main className="main_details_wrapper pt-[5.6rem]">
        <p className="naviction_headline">
          <Link className="navication_link" href={"/"}>
            Home
          </Link>
          &nbsp; &gt;
          <Link className="navication_link" href={"/products"}>
            &nbsp; Men&apos;
          </Link>
          &nbsp; Fashion &nbsp;&gt;&nbsp; Men&apos;s Stand Collar Leather Jacket
        </p>
        {/* Images */}
        <div className="flex justify-between">
          <SingleProductImages />
          <SingleProductMainDetails />
        </div>
      </main>
    </>
  );
};

export default ProdtctDetails;
