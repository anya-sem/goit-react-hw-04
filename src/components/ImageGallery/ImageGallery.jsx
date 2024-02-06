import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ images, selectedImage }) => {
  return (
    <ul>
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
