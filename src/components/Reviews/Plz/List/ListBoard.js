import React, { Component } from "react";
// import axios from "axios";
import Listpage from "./Listpage";
import Footer from "../../../Footer/Footer";

class ListBoard extends Component {
  state = {
    ItemList: [], // 비어있는 배열
  };

  componentDidMount() {
    const getList = async () => {
      const list = await axios.get("/review/plus_review_list/");
      this.setState({
        ItemList: list.data,
      });
    };
    getList();
    // const data = require("../../../../BoardData.json");
    // this.setState({
    //   ItemList: data.Plus_Reviews,
    // });
  }

  render() {
    const { ItemList } = this.state;
    return (
      <div>
        <Listpage Itemcard={ItemList} />
        <Footer />
      </div>
    );
  }
}
export default ListBoard;
