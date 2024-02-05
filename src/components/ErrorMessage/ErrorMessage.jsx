export const ErrorMessage = ({ error, isEmpty }) => {
  return (
    <div>
      {!isEmpty && !error && <b>Let`s begin search</b>}
      {error && <b>Something went wrong :(</b>}
      {isEmpty && <b>Sorry. There are no images</b>}
    </div>
  );
};