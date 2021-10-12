import React from "react";
import { Link } from "react-router-dom";

class Catgeories extends React.Component {
  render() {
    return (
      <div className="categories-container">
        <ui>
          <Link to={`/category/1/page/1/limit/10`}>select category 1</Link>
          <br />
          <Link to={`/category/2/page/1/limit/10`}>select category 2</Link>
          <br />
        </ui>
      </div>
    );
  }
}
export default Catgeories;
