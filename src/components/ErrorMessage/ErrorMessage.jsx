export const ErrorMessage = ({ error, isEmpty }) => {
  return (
    <div>
      {error && <b>Something went wrong :(</b>}
      {isEmpty && <b>Sorry, no images found</b>}
    </div>
  );
};