import { useState } from "react";
import "./Form.css";
import { toast } from "react-toastify";

function Form({ isDarkMode, onSearch }) {
  const [formInput, setFormInput] = useState({
    searchName: "",
  });

  const [isShowQuery, setShowQuery] = useState("");

  function formText(e) {
    setFormInput({ [e.target.name]: e.target.value });
  }

  function searchImage(e) {
    e.preventDefault();

    if (formInput.searchName === "") {
      toast.error("Form can not be empty");
      return;
    }
    setShowQuery(formInput.searchName);
    onSearch(formInput.searchName);
    setFormInput({ searchName: "" });
  }

  return (
    <section
      className="form"
      style={{ backgroundColor: isDarkMode ? "#333" : "#fff" }}>
      <div className="container">
        <div className="formContent">
          <h1>Unsplash Images</h1>

          <form onSubmit={searchImage}>
            <input
              type="text"
              name="searchName"
              value={formInput.searchName}
              id="searchName"
              placeholder={
                !formInput.searchName && !isShowQuery
                  ? "Possum"
                  : formInput.searchName || isShowQuery
              }
              onChange={formText}
              style={{ color: isDarkMode ? "#fff" : "#333" }}
            />

            <button type="submit">Search</button>
          </form>

          {isShowQuery && (
            <p>
              Showing result for:{" "}
              <i style={{ color: isDarkMode ? "#fff" : "#333" }}>
                {" "}
                {isShowQuery}
              </i>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Form;
