import React from "react";
//Question No 39065 on 5 page
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QuestionPage } from "./components/template";
//import { Percentage } from "./components/percentage";
import { Algebra } from "./components/algebra";
import { Ratio } from "./components/ratio";
import { Percent } from "./components/percent";
import { Ratio1 } from "./components/ratio1";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/1" exact component={Algebra}></Route>
          <Route path="/2" component={Ratio}>
            <Ratio />
          </Route>
          <Route path="/3" component={Percent}>
            <Percent />
          </Route>
          <Route path="/4" component={Ratio1}>
            <Ratio1 />
          </Route>
          <Route path="/" component={QuestionPage}>
            <QuestionPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
/* <div className="res">Answer:{result}</div>
<input type="text" name="diagonal" onChange={setdata} id="diago" />? */
