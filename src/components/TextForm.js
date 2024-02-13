import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChanged = (event) => {
    console.log("On Changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  //   setText("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChanged}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          CONVERT TO UPPERCASE
        </button>
      </div>

      <div className="container my-3">
        <h2>Previw</h2>
        <p>{text}</p>
        <h6>Reading Time - {0.008 * text.split(" ").length} minutes</h6>
        <h3>Your Text Summary</h3>
        <p>
          you have {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}

/* <div className="mb-3">
        <label for="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div> */
