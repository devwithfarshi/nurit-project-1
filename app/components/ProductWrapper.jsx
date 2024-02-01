import React from "react";
import SingleProduct from "./SingleProduct";

const ProductWrapper = ({ produtcsArray, allProduct }) => {
  return (
    <>
      <ul
        className={`${
          allProduct && "all_product_wrapper"
        } product_wrapper mt-[4rem] `}
      >
        {produtcsArray &&
          produtcsArray.map(
            ({ id, wishList, title, price, ratting, image }) => {
              return (
                <SingleProduct
                  key={id}
                  id={id}
                  wishList={wishList}
                  title={title}
                  price={price}
                  ratting={ratting}
                  image={image}
                />
              );
            }
          )}
      </ul>
    </>
  );
};

export default ProductWrapper;
