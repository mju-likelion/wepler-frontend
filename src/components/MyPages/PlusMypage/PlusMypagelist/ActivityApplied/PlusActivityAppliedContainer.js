import React, { Component } from "react";
import axios from "axios";
import ActivityappliedPresenter from "./PlusActivityappliedPresenter";

class ActivityContainer extends Component {
  state = {
    ItemList: [], // 프로필 개수
  };

  componentDidMount() {
    const getApplied = async () => {
      const datas = await axios.get("/mypage/applied_list/", 
      {
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
    return <ActivityappliedPresenter Itemcard={ItemList} />;
  }
}
export default ActivityContainer;
