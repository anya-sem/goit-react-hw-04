export const ImageCard = ({ src, alt, selectedImage }) => {
  return (
    <div onClick={selectedImage}>
      <img src={src} alt={alt} />
    </div>
  );
};
