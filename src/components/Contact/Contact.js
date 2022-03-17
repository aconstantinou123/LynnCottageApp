const Contact = () => {
  const onEmailClick = () => {
    window.open(
      'mailto:s_hr@hotmail.co.uk?subject=Lynn%20Cottage%20Enquiry&body=Hello%20Stephanie'
    );
  };
  return (
    <section id='contact' className='mt-5 pt-5'>
      <div className='text-center mb-3 pb-3'>
        <h2 className='mt-5 mb-1 font-weight-bold text-center'>Contact us</h2>
        <div className='px-5'>
          <p className='grey-text pt-1'>
            Interested in booking a stay? Click the icon below to send us an
            email. Please include the dates you would like to stay as well as
            your contact details
          </p>
        </div>
        <i
          className='fa-solid fa-envelope fa-2xl pb-4'
          onClick={onEmailClick}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>

      <div className='row m-0 d-flex justify-content-center align-items-center'>
        <div className='col-lg-5 col-md-12'>
          <div className='row text-center'>
            <div className='col-lg-4 col-md-12 mb-3'>
              <p>
                <i className='fa fa-map fa-1x mr-2 grey-text'></i>
                {' East Linton, EH40 3BA'}
              </p>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <p>
                <i className='fa fa-building fa-1x mr-2 grey-text'></i>
                {' Mon - Fri, 9:00-18:00'}
              </p>
            </div>

            <div className='col-lg-4 col-md-6 mb-3'>
              <p>
                <i className='fa fa-phone fa-1x mr-2 grey-text'></i>
                {' +447736711889'}
              </p>
            </div>
          </div>

          <div
            id='map-container-google-11'
            className='z-depth-1-half map-container-6'
            style={{ height: '400px', width: '100%' }}
          >
            <iframe
              src='https://maps.google.com/maps?q=55.9921703,-2.6639707&z=15&ie=UTF8&iwloc=&output=embed'
              frameBorder='0'
              style={{ border: 0, height: '100%', width: '100%' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
