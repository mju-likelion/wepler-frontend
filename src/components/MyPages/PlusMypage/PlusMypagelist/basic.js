import React, { Component } from "react";
import axios from "axios";
import boards from "../../../../BoardData.json";
import MypageNav from "../PlusMypagenav";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

class basic extends Component {
  state = {
    borads: [],
  };
  postBoard = async () => {
    const { title } = this.state;
    const get = await axios.get("http://localhost:8000/hire_post", {
      title,
    });
    this.setState({
      title: "",
    });
    console.log(get);
  };
  render() {
    return (
      <>
        <MypageNav />
        <Container component="main" maxWidth="xs">
          <Grid item xs={15}>
            {boards.map((item) => {
              return (
                <div>
                  기간: {item.start_date}~{item.end_date}
                </div>
              );
            })}
          </Grid>
        </Container>
      </>
    );
  }
}
export default basic;
