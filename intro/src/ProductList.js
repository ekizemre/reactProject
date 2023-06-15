import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, productName: "Baverages" },
      { categoryId: 2, productName: "Condiments" },
      { categoryId: 3, productName: "Foods" },
    ],
  }


  

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitInStock}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="info">Sepete Ekle</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
