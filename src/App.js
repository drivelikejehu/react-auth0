import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Auth from "./Auth/Auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <div className="body">
              {/* <Route path="/" exact component={Home} /> */}
              <Route
                path="/"
                exact
                render={(props) => <Home auth={this.auth} {...props} />}
              />
              <Route path="/profile" component={Profile} />
            </div>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
