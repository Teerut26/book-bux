import { connect } from "react-redux";
import "./App.css";
import 'animate.css';
import ItemShow from "./components/ItemShow";
import Navbar from "./components/Navbar";

var _ = require("lodash");

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <ItemShow />
    </div>
  );
}

export default connect((state) => {
  return state;
})(App);
