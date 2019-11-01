import React, { Component } from "react";
import vardo from "./images/vardo-loti.jpg";
import house from "./images/dormy-house.jpg";
import styles from "./Blog.scss";

class Blog extends Component {
  render() {
    return (
      <section id="blogPosts">
        <img src={vardo} id="vardo" alt="vardo"></img>
        <h2>LOTI EATS | VARDO</h2>
        <h3>THE CARAVAN TEAM TRAVEL OUT WEST</h3>
      </section>
      //       <>
      //       <section>
      //           <img src={house} id="house" alt="house"></img>
      //       </section>
      // </>
    );
  }
}

export default Blog;
