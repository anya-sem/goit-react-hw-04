import css from "./ErrorMessage.module.css";

export const ErrorMessage = ({ error, isEmpty }) => {
  return (
    <div className={css.error}>
      {error && <b>Something went wrong :(</b>}
      {isEmpty && <b>Sorry, no images found</b>}
    </div>
  );
};
