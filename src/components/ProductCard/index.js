import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

import "./ProductCard.scss";
import { updateCart } from "../../store/action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleClick = useCallback(() => {
    dispatch(updateCart(product));
    alert.success("Product added to cart succesfully!");
  }, [alert, dispatch, product]);

  return (
    <li className="product-cards" id={product.category}>
      <h2 className="product-name truncate">{product.name}</h2>
      <img src={product.imageURL} alt={product.name} className="product-img" />
      <p className="product-desc">{product.description}</p>
      <button className="btn-cta mobile tablet" onClick={handleClick}>
        Buy Now @ Rs. {product.price}
      </button>
      <div className="product-cta-container">
        <span className="product-price">MRP Rs. {product.price}</span>
        <button onClick={handleClick} className="btn-cta">
          Add
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
