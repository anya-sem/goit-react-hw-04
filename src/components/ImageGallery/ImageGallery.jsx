import { ImageCard } from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({ images, selectedImage }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard
            src={urls.small}
            alt={alt_description}
            selectedImage={() => selectedImage({ id, urls, alt_description })}
          />
        </li>
      ))}
    </ul>
  );
};
