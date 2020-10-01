import React, { Component } from "react";
import axios from "axios";
import Listpage from "./Listpage";

class ListBoard extends Component {
  state = {
    ItemList: [], // 비어있는 배열
  };

  async componentDidMount() {
    const list = await axios.get("/board/hire_list/");

    this.setState({
      ItemList: list.data,
    });
  }

  render() {
    const { ItemList } = this.state;
    return (
      <div>
        <Listpage Itemcard={ItemList} />
      </div>
    );
  }
}
export default ListBoard;
