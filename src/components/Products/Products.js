import React from "react";
import { Link } from "react-router-dom";
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Products.css';

const Products = ({
  id,
  title,
  price,
  rating,
  specification,
  detail,
  image,
}) => {
  return (
    <div className="products">
      <div className="info">
        <Link to={`/products/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((index) => (
                <span key={index} role="img" aria-label="image"> ⭐ </span>
            ))}
              </div>
        </div>
              <img src={image} alt={title} />
              <button>
                <i>
                    <CartIcon />
                  </i>
                  Add to Basket
              </button>
      
    </div>
  );
};

export default Products;
