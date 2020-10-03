import React, { Component } from "react";
import ActivityappliedPresenter from "./PlusActivityappliedPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const data = require("/mypage/applied_list/");
    // 'mypage/apply_list/'
    this.setState({
      ItemList: data.mypage,
    });
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityappliedPresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
