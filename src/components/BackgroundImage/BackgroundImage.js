import './BackgroundImage.css'

const BackgroundImage = () => (
  <div
    className='bg-image'
    style={{
      backgroundImage: 'url("assets/living_room_4.jpg")',
      height: '100vh',
    }}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className='header-text d-flex justify-content-center text-center'>
        <h1 className='text-white mb-3'>Lynn Cottage</h1>
        <h4 className='text-white mb-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          consequuntur
        </h4>
        <a href='#description' className='btn btn-outline-light btn-lg' role='button'>
          Learn More
        </a>
      </div>
    </div>
  </div>
)

export default BackgroundImage
