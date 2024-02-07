import css from "./ImageCard.module.css";

export const ImageCard = ({ src, alt, selectedImage }) => {
  return (
    <div className={css.card} onClick={selectedImage}>
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
};
