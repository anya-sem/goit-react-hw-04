import Modal from 'react-modal';

export const ImageModal = ({ isOpen, onRequestClose, image }) => {
   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
      >
         {image && (
            <div>
               <img src={image.small} alt={image.alt_description} />
            </div>
         )}
      </Modal>
   );
};
