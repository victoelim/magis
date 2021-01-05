// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Article from "../src/Article/article.js"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/article">
            <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
