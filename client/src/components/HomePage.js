import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about"> go to about</Link>
    </>
  );
}
