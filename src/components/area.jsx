import React, { useState } from "react";

export default function Area({ alert, mode }) {
  let [text, settext] = useState("");
  function handlechange(e) {
    settext(e.target.value);
  }
  function uppercase() {
    settext(text.toUpperCase());
    alert("success", "Uppercase", "The text has been converted to uppercase");
  }
  function lowercase() {
    settext(text.toLowerCase());
    alert("success", "Lowecase", "The text has been converted to Lowercase");
  }
  function cleartext() {
    settext("");
    alert("warning", "Cleared", "The text has been cleared");
  }
  function extraspaces() {
    settext(text.replace(/\s+/g, " ").trim());
    alert("success", "Extra", "The extra spaces has been removed");
  }
  function convertSecondsToMinutes(seconds) {
    if (seconds > 60) {
      seconds = seconds / 60; // Convert seconds to minutes
      return seconds.toFixed(2);
    } else {
      return seconds.toFixed(2); // Return seconds if less than or equal to 60
    }
  }

  // Example usage:
  const inputSeconds = 120; // You can change this value to test
  const result = convertSecondsToMinutes(inputSeconds);
  console.log(result); // Output: 2
  return (
    <div className="area">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>TextUtils</h1>
        <div className="container col-9">
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter text to preview here
            </label>
            <textarea
              class="form-control"
              value={text}
              onChange={handlechange}
              id="exampleFormControlTextarea1"
              rows="3"
              style={{
                backgroundColor: mode === "dark" ? "#D3D3D3" : "white",
                height: "12rem",
              }}
            ></textarea>
          </div>
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          <button
            className={`btn ${
              mode == "dark" ? "btn-dark" : "btn-primary"
            } mx-2`}
            onClick={uppercase}
          >
            UpperCase
          </button>
          <button
            className={`btn ${
              mode == "dark" ? "btn-dark" : "btn-primary"
            } mx-2`}
            onClick={lowercase}
          >
            LowerCase
          </button>
          <button
            className={`btn ${
              mode == "dark" ? "btn-dark" : "btn-primary"
            } mx-2`}
            onClick={extraspaces}
          >
            Remove extra spaces
          </button>
          <button
            className={`btn ${
              mode == "dark" ? "btn-dark" : "btn-primary"
            } mx-2`}
            onClick={cleartext}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="my-3" style={{ textAlign: "center" }}>
        <h3>Text Preview</h3>
        <p>The total text in the above section is {text.length}</p>
        <p>
          The total words in the above section is{" "}
          {
            text.split(" ").filter((element) => {
              return element != "";
            }).length
          }
        </p>
        <p>
          The total time will take to read in the above section is approximatly{" "}
          {convertSecondsToMinutes(
            text.split(" ").filter((element) => {
              return element != "";
            }).length * 0.3
          )}
          {text.split(" ").filter((element) => {
            return element != "";
          }).length *
            0.3 >
          60
            ? "Minute(s)"
            : "second"}
        </p>
      </div>
      <div
        style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
        className="preview"
      >
        {text}
      </div>
    </div>
  );
}
