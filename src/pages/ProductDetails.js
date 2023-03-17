import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const ProductDetails = (props) => {
  const params = useParams();

  const [list, updatedList] = useState([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
      );
      updatedList(response.data.data.products.edges);
    };
    request();
  }, []);
  let indexArray = 0;
  indexArray = list.map((item) =>
    item.node.id
      .replace(":", "")
      .replace("/", "")
      .replace("/", "")
      .replace("/", "")
      .replace("/", "")
  );
  let index = 0;
  index = indexArray.indexOf(params.product_id);

  return (
    <>
      {params.product_id === indexArray[index] && (
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: "2rem" }}>
            <img
              variant="top"
              alt="product"
              src={list[index].node.featuredImage.url}
              style={{ width: "50vw" }}
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <div style={{ color: "white" }}>{list[index].node.title}</div>
            <div style={{ color: "white" }}>
              Price: {list[index].node.variants.edges[0].node.price.amount}
            </div>
            <div style={{ color: "white" }}>Reviews:</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
