import React, { Component } from "react";
import axios from "axios";
import ActivityIngPresenter from "./PlzActivityIngPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    // const data = require("../../../../../BoardData.json");
    // this.setState({
    //   ItemList: data.mypage,
    // });
    const getApplied = async () => {
      const data = await axios.get("/mypage/match_list/");
      this.setState({
        ItemList: data.mypage,
      });
    };
    getApplied();
  }

  render() {
    const { ItemList } = this.state;
    return <ActivityIngPresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
