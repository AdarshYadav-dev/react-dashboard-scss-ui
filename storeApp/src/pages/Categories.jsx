import { useEffect, useState } from "react";
import "../styles/categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);

    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  return (
    <div className="categories-page">
      <h2>All Categories</h2>

    
      <ul className="categories-list">
        {categories.map((cat, index) => (
          <li
            key={index}
            className={`category-item ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div className="products-section">
          <h3>Products in "{selectedCategory}"</h3>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <img src={p.image} alt={p.title} />
                <h4>{p.title}</h4>
                <p className="price">${p.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
