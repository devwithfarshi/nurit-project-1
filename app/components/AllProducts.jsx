import React from "react";
import ProductWrapper from "./ProductWrapper";
import { productArray } from "../config/data";
const AllProducts = () => {
  return (
    <main className="allProduct_wrapper">
      <header className="all_products_header flex justify-between ">
        <p>
          Showing <span>20</span> of <span>160</span> Product
        </p>
        <div>
          <span>Sort by</span>
          <select className=" py-[.55rem] px-[1.5rem]">
            <option value="new">Newst Items</option>
            <option value="h">Price Low to High</option>
            <option value="l">Price High to Low</option>
            <option value="asc">A - Z</option>
            <option value="dsc">Z - A</option>
          </select>
        </div>
      </header>
      <ProductWrapper
        produtcsArray={[
          ...productArray,
          ...productArray.reverse(),
          ...productArray.reverse(),
          ...productArray,
          ...productArray.reverse(),
        ]}
      />
    </main>
  );
};

export default AllProducts;
