import { ImageCard } from "../ImageCard/ImageCard";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageGallery = ({
  images,
  isModalOpen,
  closeModal,
  selectedImage,
}) => {
  return (
    <div>
      <ul>
        {images.map(({ id, urls: { small }, alt_description }) => (
          <li key={id}>
            <ImageCard
              src={small}
              alt={alt_description}
              isModalOpen={isModalOpen}
              selectedImage={() =>
                selectedImage({ id, urls: { small }, alt_description })
              }
            />
          </li>
        ))}
      </ul>
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={selectedImage}
          // style={customStyles}
        />
      )}
    </div>
  );
};
