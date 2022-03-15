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

const Gallery = () => (
  <>
     <div className='container mt-5 pt-5'>
      <section id='best-features' className='text-center'>
        <h2 className='mb-3 font-weight-bold'>Gallery</h2>
        <i id='description' className='fa-solid fa-camera fa-2xl pb-5 mb-5'></i>
      </section>
    </div>
    <div id='gallery'>
      <ImageGallery items={images} />
    </div>
  </>
)

export default Gallery