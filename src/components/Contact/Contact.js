const Contact = () => (
  <section id='contact' className='mt-5 pt-5'>
    <div className='text-center mb-3 pb-3'>
      <h2 className='mt-5 mb-2 font-weight-bold text-center'>Contact us</h2>
      <i className='fa-solid fa-envelope fa-2xl pb-4'></i>
    </div>

    <div className='row m-0 d-flex justify-content-center align-items-center'>
      <div className='col-lg-4 col-md-12'>
        <form className='p-5 grey-text'>
          <div className='md-form form-sm'>
            {' '}
            <i className='fa fa-user prefix'></i>
            <input
              type='text'
              id='form3'
              className='form-control form-control-sm'
            />
            <label htmlFor='form3'>Your name</label>
          </div>
          <div className='md-form form-sm'>
            {' '}
            <i className='fa fa-envelope prefix'></i>
            <input
              type='text'
              id='form2'
              className='form-control form-control-sm'
            />
            <label htmlFor='form2'>Your email</label>
          </div>
          <div className='md-form form-sm'>
            {' '}
            <i className='fa fa-tag prefix'></i>
            <input
              type='text'
              id='form32'
              className='form-control form-control-sm'
            />
            <label htmlFor='form34'>Subject</label>
          </div>
          <div className='md-form form-sm'>
            {' '}
            <i className='fa fa-pencil prefix'></i>
            <textarea
              type='text'
              id='form8'
              className='md-textarea form-control form-control-sm'
              rows='4'
            ></textarea>
            <label htmlFor='form8'>Your message</label>
          </div>
          <div className='text-center mt-4'>
            <button className='btn btn-primary'>
              Send <i className='fa fa-paper-plane-o ml-1'></i>
            </button>
          </div>
        </form>
      </div>

      <div className='col-lg-5 col-md-12'>
        <div className='row text-center'>
          <div className='col-lg-4 col-md-12 mb-3'>
            <p>
              <i className='fa fa-map fa-1x mr-2 grey-text'></i>{' East Linton, EH40 3BA'}
            </p>
          </div>

          <div className='col-lg-4 col-md-6 mb-3'>
            <p>
              <i className='fa fa-building fa-1x mr-2 grey-text'></i>{' Mon - Fri, 9:00-18:00'}
            </p>
          </div>

          <div className='col-lg-4 col-md-6 mb-3'>
            <p>
              <i className='fa fa-phone fa-1x mr-2 grey-text'></i>{' +447736711889'}
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
);

export default Contact;
