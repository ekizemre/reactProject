import React, { Component } from "react";
import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = { currentCategory: "", products: [],cart:[] };
  compenentDidMount() {
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.categoryId);
  };

  getProducts = categoryId => {
    let url ="http://localhost:3000/products";
    if(categoryId) {
      url +="?categoryId="+categoryId;
    }
    fetch()
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart=(product)=>{
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1});
    }
    
    this.setState({cart:newCart});
  }
  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div>
        <Container>
          <Row>
            <Navi cart={this.state.cart}/>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>
            <Col xd="9">
              <ProductList
                products={this.state.products}
                addToCart={this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
