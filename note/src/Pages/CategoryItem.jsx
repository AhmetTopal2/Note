import React from "react";
import { Link } from "react-router-dom";

function CategoryItem({ note }) {
  const category = note.category;

  return (
    <div className="py-10">
      <Link to={`/category/${category}`}>
        {
          note && <button className="btn">{category}</button>
        }
      </Link>
    </div>
  );
}

export default CategoryItem;
