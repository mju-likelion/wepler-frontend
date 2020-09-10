import React, { Component } from "react";
import Router from "components/Router";
import GlobalStyled from "components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyled />
      </>
    );
  }
}

export default App;
