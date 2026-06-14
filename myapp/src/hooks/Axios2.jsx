import axios from "axios";
import { useState } from "react";

function Axios() {
  const [img, seting] = useState("");

  function handel() {
      axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        seting(response.data);
      });
  }
  return (
    <>
      <h1> {img.setup} </h1>
      <h3> {img.punchline} </h3>
      <button onClick={handel}>
        Fetch joke
      </button>
    </>
  );
}

export default Axios;
