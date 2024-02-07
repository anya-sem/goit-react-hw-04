import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please, enter your request");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <div className={css.header}>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            onChange={handleChange}
            className={css.input}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};
