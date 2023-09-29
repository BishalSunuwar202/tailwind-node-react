import React from "react";
import Container from "../components/container/Container";

const ProductsList = (props) => {
  return (
    <Container>
      <div>
        <h1>All Products</h1>
        <ul>
          {props.products.map((product) => (
            <li key={product.id}>
              <p>{product.name}</p>
              <h2>{product.price}</h2>
              <img src={product.url} alt="product.name" />
              <h2>{product.description}</h2>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ProductsList;
