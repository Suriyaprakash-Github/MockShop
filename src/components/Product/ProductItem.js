import React, { useEffect, useState } from "react";
import axios from "axios";

import Products from "./Products";

import classes from "./productItem.module.css";

const ProductItem = () => {
  const [list, updatedList] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        "https://mock.shop/api?query={products(first:%204){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
      );
      updatedList(response.data.data.products.edges);
    };
    request();
  }, []);

  return (
    <>
      <div>
        <ul className={classes.procuct_div}>
          {list.map((item) => (
            <Products
              key={item.node.id}
              id={item.node.id}
              url={item.node.id
                .replace(":", "")
                .replace("/", "")
                .replace("/", "")
                .replace("/", "")
                .replace("/", "")}
              title={item.node.title}
              description={item.node.description}
              image={item.node.featuredImage.url}
              price={item.node.variants.edges[0].node.price.amount}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductItem;
