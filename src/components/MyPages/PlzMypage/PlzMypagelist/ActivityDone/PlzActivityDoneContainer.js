import React, { Component } from "react";
import ActivityDonePresenter from "./PlzActivityDonePresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const data = require("/mypage/plz_complete_list/");
    // 'mypage/plz_complete_list_count/
    this.setState({
      ItemList: data.mypage,
    });
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityDonePresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
