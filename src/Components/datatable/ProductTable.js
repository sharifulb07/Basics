import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import "./App.css"

class ProductTable extends React.Component {
  render() {
    const row = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        row.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      row.push(
      <ProductRow product={product} key={product.name} />
      )
      lastCategory=product.category;
    });

    return (
      <table className={"FancyBorder"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}

export default ProductTable;
