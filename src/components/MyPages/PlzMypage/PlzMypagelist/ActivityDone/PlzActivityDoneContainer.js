import React, { Component } from "react";
import axios from "axios";
import ActivityDonePresenter from "./PlzActivityDonePresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const getApplied = async () => {
      const data = await axios.get("/mypage/plz_complete_list/");
      this.setState({
        ItemList: data.mypage,
      });
    };
    getApplied();
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityDonePresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
