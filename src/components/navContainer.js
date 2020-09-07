import React from "react";
import Nav from "./nav";

export default class extends React.Component {
  state = {
    logged: false,
    onLogin: this.onLogin,
    onLogout: this.onLogout,
  };

  onLogin = () => {
    this.setState({
      logged: true,
    });
  };

  onLogout = (e) => {
    // this.setState({
    //   logged: false,
    // });
    localStorage.clear();
  };

  componentDidUpdate() {
    const id = localStorage.getItem("token");
    console.log(id);
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }

  render() {
    const { logged, onLogout } = this.state;
    return (
      <Nav logged={logged} onLogin={this.onLogin} onLogout={this.onLogout} />
    );
  }
}
