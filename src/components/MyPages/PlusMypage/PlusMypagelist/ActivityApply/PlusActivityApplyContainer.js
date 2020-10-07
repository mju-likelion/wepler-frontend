import React, { Component } from "react";
import axios from "axios";
import ActivityapplyPresenter from "./PlusActivityapplyPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [],
  };

  componentDidMount() {
    const getApplied = async () => {
      const datas = await axios.get("/mypage/apply_list/", {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      this.setState({
        ItemList: datas.data,
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
