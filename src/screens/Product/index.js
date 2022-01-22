import React from "react";
import { useSelector } from "react-redux";

import ProductCategory from "../../components/ProductCategory";
import ProductCard from "../../components/ProductCard";
import { categories } from "../../components/constants/categoriesMap";
import { products } from "../../components/constants/productsMap";

const Product = () => {
  const { filter } = useSelector((state) => state);

  return (
    <main
      className="product container"
      id="products-list-container"
      role="main"
    >
      <ProductCategory category={categories} />
      <section
        id="products-cards-container"
        className="product-cards-container"
      >
        <ul
          className="product-list"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          {filter === null && products.length > 0
            ? products.map((item) => <ProductCard product={item} key={item.id} />)
            : products
                .filter((item) => item.category === filter)
                .map((item) => <ProductCard product={item} key={item.id} />)}
        </ul>
      </section>
    </main>
  );
};

export default Product;
