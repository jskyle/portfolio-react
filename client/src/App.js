import './App.sass';
import { Navigation } from "./shared";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home"

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
      </div>
      <div className="container">
        <Switch>
          <Route path="/"><Home/></Route>
          <Route path="/my-blog"></Route>
          <Route path="/blog-post"></Route>
          <Route path="/user-login"></Route>
          <Route path="/admin-page"></Route>
          <Route path="/case-study"></Route>
        </Switch>
      </div>
      <footer>
      </footer>
    </Router>
  );
}

export default App;
