import React, { Component } from "react";
import axios from "axios";
import ActivityapplyPresenter from "./PlusActivityapplyPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [],
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
