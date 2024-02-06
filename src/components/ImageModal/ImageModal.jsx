import Modal from "react-modal";

export const ImageModal = ({
  isOpen,
  onRequestClose,
  selectedImage,
  style,
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={style}>
      {selectedImage && (
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </Modal>
  );
};
