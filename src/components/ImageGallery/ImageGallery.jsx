import { ImageCard } from "../ImageCard/ImageCard"


export const ImageGallery = ({images}) => {
        return (
            <ul>
                {images.map(({id, urls: {small, regular}, alt_description}) => (
                        <li key={id}>
                            <ImageCard 
                                src={small}
                                alt={alt_description}
                            />
                        </li>
                ))}
            </ul>
        )
}