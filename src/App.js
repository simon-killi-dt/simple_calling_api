import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import "./styles.css";

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    function getBlogPostApi() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => {
          setBlogPosts(res);
        })
        .catch((error) => alert("Error " + error));
    }
    getBlogPostApi();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {blogPosts.map((cardItem) => {
          return (
            <div className="col-lg-3" key={cardItem.id}>
              <CardProduct data={cardItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
