import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar'
import { Toaster } from 'react-hot-toast';
import { getImages } from './imageAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
    setError(false);
    setIsVisible(false);
  };
  
 

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);

    const searchImages = async () => {
      try {
        const { images } = await getImages(
          query, page,
        );
        if (images.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => [...prevImages, ...images]);

      } catch (error) {
        setError(error);

      } finally {
        setIsLoading(false);
      };
    };

    searchImages();
  }, [query,page]);

  
  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      <Toaster />
      {images.length > 0 && <ImageGallery images={images} />}
      <ErrorMessage error={error} isEmpty={isEmpty} />
      {isLoading && <Loader />}

    </>
  )
}

export default App
