import React, { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./Helpers";
import frankenBread from '../../../images/frankenbread.jpg';
import './Puzzle.css';

function Puzzle() {
    // const [imgUrl, setImgURL] = useState("")

    // useEffect(() => {
    //   const urlParams = new URLSearchParams(window.location.search)
    //   if (urlParams.has("img")){
    //     setImgURL(urlParams.get("img"))
    //   }
    // }, [])

    const handleImageChange = (e) => {
        setImgURL(e.target.value)
        window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
    }

    return (
      <div className="Puzzle">
        <h1>React sliding puzzle</h1>
        <Board imgUrl={frankenBread} />
        {/* <input value={imgUrl} onChange={handleImageChange} /> */}
      </div>
    );
  }
  
  export default Puzzle;
  