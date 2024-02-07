import css from "./LoadMoreButton.module.css";

export const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
