import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FakeStore Dashboard</div>
      <ul className="navbar-links">
        <li><a href="/">Dashboard</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/carts">Carts</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
