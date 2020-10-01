import React from "react";
import Header from "./header";

function Home() {
  return (
    <div>
      <Header></Header>
      <center style={{ marginTop: "20px" }}>
        You Chose <span className="textstyle">HOME</span>
      </center>
    </div>
  );
}
export default Home;
