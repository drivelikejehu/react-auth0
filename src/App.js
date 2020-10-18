import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Auth from "./Auth/Auth";
import Callback from "./Callback";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Navbar />

        <div className="body">
          {/* <Route path="/" exact component={Home} /> */}
          <Route
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
          <Route path="/profile" component={Profile} />
        </div>
      </>
    );
  }
}

export default App;
