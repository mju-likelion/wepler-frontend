import React, { Component } from "react";
import ActivityIngPresenter from "./PlzActivityIngPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const data = require("../../../../../BoardData.json");
    this.setState({
      ItemList: data.mypage,
    });
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityIngPresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
