import React, { Component } from "react";
import ActivityIngPresenter from "./PlusActivityIngPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const data = require("/mypage/match_list/");
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
