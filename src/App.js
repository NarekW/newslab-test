import './App.css';
import CatsPage from './components/CatsPage/CatsPage';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/category/:categoryID/page/:pageID/limit/10">
          <CatsPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
