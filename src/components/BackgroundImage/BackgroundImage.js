import './BackgroundImage.css'

const BackgroundImage = () => (
  <div
    className='bg-image'
    style={{
      backgroundImage: 'url("assets/front_house_1.jpg")',
      height: '100vh',
    }}
  >
    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <div className='header-text d-flex justify-content-center text-center'>
        <div className='header-container'>
        <h1 className='text-white mb-3' style={{ textShadow: '1px 1px #4f4f4f'}}>Lynn Cottage</h1>
        <h4 className='text-white mb-3' style={{ textShadow: '1px 1px #4f4f4f'}}>
         Situated in the beautiful village of East Linton, Lynn Cottage is perfectly placed for exploring this fabulous area of coastal Scotland
        </h4>
        </div>
        <a href='#description' className='btn btn-outline-light btn-lg' style={{ textShadow: '1px 1px #4f4f4f', boxShadow: '1px 1px #4f4f4f'}} role='button'>
          Learn More
        </a>
      </div>
    </div>
  </div>
)

export default BackgroundImage
