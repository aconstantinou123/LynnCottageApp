import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: 'assets/front_house_2.jpg',
    thumbnail: 'assets/front_house_2.jpg',
  },
  {
    original: 'assets/front_house_3.jpg',
    thumbnail: 'assets/front_house_3.jpg',
  },
  {
    original: 'assets/garden_4.jpg',
    thumbnail: 'assets/garden_4.jpg',
  },
  {
    original: 'assets/garden_5.jpg',
    thumbnail: 'assets/garden_5.jpg',
  },
  {
    original: 'assets/garden_6.jpg',
    thumbnail: 'assets/garden_6.jpg',
  },
  {
    original: 'assets/field_2.jpg',
    thumbnail: 'assets/field_2.jpg',
  },
  {
    original: 'assets/field_3.jpg',
    thumbnail: 'assets/field_3.jpg',
  },
  {
    original: 'assets/living_room_8.jpg',
    thumbnail: 'assets/living_room_8.jpg',
  },
  {
    original: 'assets/dining_room_1.jpg',
    thumbnail: 'assets/dining_room_1.jpg',
  },
  {
    original: 'assets/dining_room_2.jpg',
    thumbnail: 'assets/dining_room_2.jpg',
  },
  {
    original: 'assets/kitchen_4.jpg',
    thumbnail: 'assets/kitchen_4.jpg',
  },
  {
    original: 'assets/kitchen_5.jpg',
    thumbnail: 'assets/kitchen_5.jpg',
  },
  {
    original: 'assets/hall_2.jpg',
    thumbnail: 'assets/hall_2.jpg',
  },
  {
    original: 'assets/hall_3.jpg',
    thumbnail: 'assets/hall_3.jpg',
  },
  {
    original: 'assets/bedroom_6.jpg',
    thumbnail: 'assets/bedroom_6.jpg',
  },
  {
    original: 'assets/bedroom_7.jpg',
    thumbnail: 'assets/bedroom_7.jpg',
  },
  {
    original: 'assets/bedroom_8.jpg',
    thumbnail: 'assets/bedroom_8.jpg',
  },
  {
    original: 'assets/spare_bedroom_2.jpg',
    thumbnail: 'assets/spare_bedroom_2.jpg',
  },
  {
    original: 'assets/spare_bedroom_3.jpg',
    thumbnail: 'assets/spare_bedroom_3.jpg',
  },
  {
    original: 'assets/bathroom_3.jpg',
    thumbnail: 'assets/bathroom_3.jpg',
  },
  {
    original: 'assets/bathroom_4.jpg',
    thumbnail: 'assets/bathroom_4.jpg',
  },
  {
    original: 'assets/bathroom_5.jpg',
    thumbnail: 'assets/bathroom_5.jpg',
  },
  {
    original: 'assets/garden_room_3.jpg',
    thumbnail: 'assets/garden_room_3.jpg',
  },
  {
    original: 'assets/garden_room_4.jpg',
    thumbnail: 'assets/garden_room_4.jpg',
  },
  {
    original: 'assets/garden_room_5.jpg',
    thumbnail: 'assets/garden_room_5.jpg',
  },
  {
    original: 'assets/garden_room_6.jpg',
    thumbnail: 'assets/garden_room_6.jpg',
  },
  {
    original: 'assets/garden_room_7.jpg',
    thumbnail: 'assets/garden_room_7.jpg',
  },
  {
    original: 'assets/garden_room_8.jpg',
    thumbnail: 'assets/garden_room_8.jpg',
  },
  {
    original: 'assets/garden_room_9.jpg',
    thumbnail: 'assets/garden_room_9.jpg',
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