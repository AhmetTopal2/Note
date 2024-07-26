import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/features/notes/notesSlice";
import { toast } from "react-toastify";

function NoteForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      content: "",
      category: "", // Ensure category is included in initialValues
    },
    onSubmit: (values) => {
      dispatch(
        addNote({
          id: Math.random(),
          title: values.title,
          author: values.author,
          content: values.content,
          category: values.category, // Ensure category is included
          date: new Date().toLocaleDateString(),
        })
      );
      toast.success("Note added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      formik.resetForm();
    },
    validate: (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = "Title is required";
      }
      if (!values.author) {
        errors.author = "Author is required";
      }
      if (!values.content) {
        errors.content = "Content is required";
      }
      if (!values.category) {
        errors.category = "Category is required";
      }
      return errors;
    },
  });

  const { handleChange, handleSubmit, values, errors, touched } = formik;

  return (
    <div className="flex justify-center p-20">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && touched.title && (
              <div className="error">{errors.title}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={values.author}
              onChange={handleChange}
            />
            {errors.author && touched.author && (
              <div className="error">{errors.author}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={values.category}
              onChange={handleChange}
            />
            {errors.category && touched.category && (
              <div className="error">{errors.category}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              rows="10"
              cols="50"
              value={values.content}
              onChange={handleChange}
            />
            {errors.content && touched.content && (
              <div className="error">{errors.content}</div>
            )}
          </div>
          <button className="form-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
