import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "./pages/index";
import Header from "./components/Header"
import StoryForm from "./pages/storyform"
import Detail from "./pages/Detail"
import Editstory from "./pages/Editstory"

function App() {
  return (
    <BrowserRouter>
    <div id="container">
      <Header/>
          <Switch>
           <Route path="/" exact component={Index} />
           <Route path="/uploadform" component={StoryForm} />
           <Route path="/detail/:id" component={Detail} />
           <Route path="/edit/:id" component={Editstory} />
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;