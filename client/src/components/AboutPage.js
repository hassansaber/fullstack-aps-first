import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function AboutPage() {
  //var
  const [parallelValue, setParallelValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [text, setText] = useState("");

  //func
  function handelSubmit(e) {
    e.preventDefault();
    setText(descValue);
  }

  //html
  return (
    <>
      <h1>About Page</h1>
      <Link to="/"> go to home</Link>
      <Link to="new-user"> new user welcome</Link>
      <Outlet />
      <form onSubmit={handelSubmit}>
        <label htmlFor="parallel">type and submit on change</label>
        <input
          type="text"
          name="parallel"
          id="parallel"
          value={parallelValue}
          onChange={(e) => setParallelValue(e.target.value)}
        />
        <label htmlFor="describe">type and submit on click the button</label>
        <input
          type="text"
          name="describe"
          id="describe"
          value={descValue}
          onChange={(e) => setDescValue(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
      {parallelValue && <p>{parallelValue}</p>}
      {text && <p>{text}</p>}
    </>
  );
}
