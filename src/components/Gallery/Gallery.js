import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: 'assets/living_room_1.jpg',
    thumbnail: 'assets/living_room_1.jpg',
  },
  {
    original: 'assets/living_room_2.jpg',
    thumbnail: 'assets/living_room_2.jpg',
  },
  {
    original: 'assets/living_room_3.jpg',
    thumbnail: 'assets/living_room_3.jpg',
  },
  {
    original: 'assets/living_room_4.jpg',
    thumbnail: 'assets/living_room_4.jpg',
  },
  {
    original: 'assets/bedroom_1.jpg',
    thumbnail: 'assets/bedroom_1.jpg',
  },
  {
    original: 'assets/bedroom_2.jpg',
    thumbnail: 'assets/bedroom_2.jpg',
  },
  {
    original: 'assets/bathroom_1.jpg',
    thumbnail: 'assets/bathroom_1.jpg',
  },
];

const Gallery = () => <ImageGallery items={images} />

export default Gallery