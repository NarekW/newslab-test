import "./App.css";
import CatsPage from "./components/CatsPage/CatsPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/category/1/page/1/limit/10" />
        </Route>
        <Route path="/category/:categoryID/page/:pageID/limit/10">
          <CatsPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
