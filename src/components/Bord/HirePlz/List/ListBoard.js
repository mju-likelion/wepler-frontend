import React, { Component } from "react";
// import axios from "axios";
import Listpage from "./Listpage";

class ListBoard extends Component {
  state = {
    loading: false,
    ItemList: [], // 비어있는 배열
  };

  componentDidMount() {
    const data = require("../../../../BoardData.json");
    this.setState({
      loading: true,
      ItemList: data.Board,
    });
  }

  render() {
    const { ItemList } = this.state;
    console.log(ItemList);
    return (
      <div>
        <Listpage Itemcard={ItemList} />
      </div>
    );
  }
}
export default ListBoard;
