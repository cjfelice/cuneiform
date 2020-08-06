import React, { useRef, useState } from "react";
import "./App.scss";
import Button from "./Button";
import ReactPlayer from "react-player";

function Mediabox(props) {
  const [mediaURL, setMediaURL] = useState(props.url || "");
  const [error, setError] = useState("");
  const [contentType, setContentType] = useState(props.contentType || false);

  const onSave = () => {
    console.log("hi");
  };

  const validate = () => {
    if (mediaURL === "") {
      setError("url cannot be blank");
      return;
    }
    setError("");
    onSave(mediaURL);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter content URL"
            value={mediaURL}
            onChange={(event) => setMediaURL(event.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation">{error}</section>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={() => validate()} confirm>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

export default Mediabox;
