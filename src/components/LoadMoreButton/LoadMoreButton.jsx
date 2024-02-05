export const LoadMoreButton = ({ onClick, isLoading }) => {
  return (
    <button type="button" onClick={onClick}>
       {isLoading ? 'Loading' : 'Load more'}
    </button>
  );
};