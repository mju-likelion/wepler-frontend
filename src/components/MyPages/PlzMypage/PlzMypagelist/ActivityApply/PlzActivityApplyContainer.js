import React, { Component } from "react";
import ActivityapplyPresenter from "./PlzActivityapplyPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const data = require("/mypage/apply_list/");
    this.setState({
      ItemList: data.mypage,
    });
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityapplyPresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
