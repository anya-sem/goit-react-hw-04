import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import { getImages } from './imageAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
// import { ImageModal } from './ImageModal/ImageModal';
// import Modal from 'react-modal';



function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const onHandleSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setError(false);
    setIsVisible(false);
    setIsModalOpen(false);
  };
  
  const onHandleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }


  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    const searchImages = async () => {
      try {
        const { results, total_results, per_page } = await getImages(
          query, page,
        );
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(page < Math.ceil(total_results / per_page));

      } catch (error) {
        setError(true);

      } finally {
        setIsLoading(false);
      };
    };

    searchImages();
  }, [query, page]);

  const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  };

  const updateSelectedImage = (image) => {
   setSelectedImage(image);
   openModal();
};

  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      <Toaster />
      {images.length > 0 && <ImageGallery
        images={images}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedImage={updateSelectedImage} />}
      <ErrorMessage error={error} isEmpty={isEmpty} />
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreButton onClick={onHandleLoadMore} />}
    </>
  )
}

export default App