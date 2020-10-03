import React, { Component } from "react";
import axios from "axios";
import ActivityapplyPresenter from "./PlzActivityapplyPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const getApplied = async () => {
      const data = await axios.get("/mypage/apply_list/");
      this.setState({
        ItemList: data.mypage,
      });
    };
    getApplied();
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityapplyPresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
