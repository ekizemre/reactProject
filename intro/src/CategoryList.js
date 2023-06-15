import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

export default class ProductList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Baverages" },
      { categoryId: 2, categoryName: "Condiments" },
      { categoryId: 3, categoryName: "Foods" },
      {categoryId: 4, categoryName:"Fruits"}
    ],
  };
  componentDidMount() {
    this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
