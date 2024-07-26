import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

function Category() {
  const notes = useSelector((state) => state.notes.notes);
  const categories = [...new Set(notes.map(note => note.category))]; // Get unique categories

  return (
    <div className="flex justify-center gap-10">
      {categories.map((category, index) => (
        <CategoryItem key={index} note={{ category }} />
      ))}
    </div>
  );
}

export default Category;
