import { h } from "preact";
import { Link } from "wouter/preact";
import "./scss/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <section className="navbar__header">Cheesegrater</section>
      <section className="navbar__items">
        <Link href="/home">home</Link>
        <Link href="/info">info</Link>
        <Link href="/limerick">Limerick</Link>
      </section>
    </div>
  );
}

export default Navbar;
