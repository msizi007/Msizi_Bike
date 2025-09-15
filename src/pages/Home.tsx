import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      This is a Home Page!
      <br />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
}
