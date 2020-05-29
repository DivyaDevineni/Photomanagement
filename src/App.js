import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchphotoslist from "../src/searchPhotos";
import Hidephotos from "../src/hidePhotos";
import Sidebar from "../src/sidebar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Sidebar />

        <Route exact path='/' component={Searchphotoslist} />
        <Switch>
          <Route exact path='/unlikedphotos' component={Hidephotos} />
          <Route exact path='/searchphotos' component={Searchphotoslist} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
