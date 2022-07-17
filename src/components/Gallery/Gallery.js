import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: 'assets/front_house_1.jpg',
    thumbnail: 'assets/front_house_1.jpg',
  },
  {
    original: 'assets/living_room_4.jpg',
    thumbnail: 'assets/living_room_4.jpg',
  },
  {
    original: 'assets/garden_3.jpg',
    thumbnail: 'assets/garden_3.jpg',
  },
  {
    original: 'assets/bedroom_3.jpg',
    thumbnail: 'assets/bedroom_3.jpg',
  },
  {
    original: 'assets/garden_room_2.jpg',
    thumbnail: 'assets/garden_room_2.jpg',
  },
  {
    original: 'assets/spare_bedroom_1.jpg',
    thumbnail: 'assets/spare_bedroom_1.jpg',
  },
  {
    original: 'assets/bathroom_2.jpg',
    thumbnail: 'assets/bathroom_2.jpg',
  },
  {
    original: 'assets/garden_1.jpg',
    thumbnail: 'assets/garden_1.jpg',
  },
  {
    original: 'assets/garden_room_1.jpg',
    thumbnail: 'assets/garden_room_1.jpg',
  },
  {
    original: 'assets/kitchen_3.jpg',
    thumbnail: 'assets/kitchen_3.jpg',
  },
  {
    original: 'assets/living_room_1.jpg',
    thumbnail: 'assets/living_room_1.jpg',
  },
  {
    original: 'assets/living_room_6.jpg',
    thumbnail: 'assets/living_room_6.jpg',
  },
  {
    original: 'assets/bedroom_5.jpg',
    thumbnail: 'assets/bedroom_5.jpg',
  },
  {
    original: 'assets/hall_1.jpg',
    thumbnail: 'assets/hall_1.jpg',
  },
  {
    original: 'assets/kitchen_2.jpg',
    thumbnail: 'assets/kitchen_2.jpg',
  },
  {
    original: 'assets/bedroom_4.jpg',
    thumbnail: 'assets/bedroom_4.jpg',
  },
  {
    original: 'assets/field_1.jpg',
    thumbnail: 'assets/field_1.jpg',
  },
  {
    original: 'assets/living_room_5.jpg',
    thumbnail: 'assets/living_room_5.jpg',
  },
  {
    original: 'assets/map_1.jpg',
    thumbnail: 'assets/map_1.jpg',
  },
  {
    original: 'assets/mill_1.jpg',
    thumbnail: 'assets/mill_1.jpg',
  },
  {
    original: 'assets/bedroom_1.jpg',
    thumbnail: 'assets/bedroom_1.jpg',
  },
  {
    original: 'assets/living_room_7.jpg',
    thumbnail: 'assets/living_room_7.jpg',
  },
  {
    original: 'assets/living_room_2.jpg',
    thumbnail: 'assets/living_room_2.jpg',
  },
  {
    original: 'assets/bass_rock_1.jpg',
    thumbnail: 'assets/bass_rock_1.jpg',
  },
  {
    original: 'assets/glasses_1.jpg',
    thumbnail: 'assets/glasses_1.jpg',
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