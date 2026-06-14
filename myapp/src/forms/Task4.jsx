// add one text area for comments, display live ch count below it in h2 tag
// if ch>100, display in red color. initially, the count should be 0 and color should be black

import {useState} from "react";

const Task4 = () => {
  const [comments, setComments] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleCommentsChange = (e) => {
    const value = e.target.value;
    setComments(value);
    setCharCount(value.length);
  };

  return (
    <div>
      <textarea
        value={comments}
        onChange={handleCommentsChange}
        placeholder="Enter your comments..."
      />
      <h2 style={{ color: charCount > 100 ? "red" : "black" }}>
        Character Count: {charCount}
      </h2>
    </div>
  );
};

export default Task4;