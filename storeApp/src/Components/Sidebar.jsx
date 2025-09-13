import "../styles/sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/carts">Carts</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
