import React, { Component } from "react";
import ActivityDonePresenter from "./PlzActivityDonePresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
    ItemCount: "",
  };

  componentDidMount() {
    const data = require("../../../../../BoardData.json");
    // 'mypage/plz_complete_list/
    // 'mypage/plz_complete_list_count/
    this.setState({
      ItemList: data.mypage,
      // ItemCount: datacount.
    });
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityDonePresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
