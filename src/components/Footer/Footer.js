const Footer = () => {
  const year = new Date().getFullYear() 
  return (
    <footer>
      <div className='footer-copyright text-center py-3 mt-5' style={{ color: '4f4f4f', backgroundColor: 'rgba(38, 38, 38)' }}>
        Short Term Let License Number: EL00085F - EPC Rating D &copy; {year};
        <a href='https://lynncottage.co.uk' style={{ color: 'white' }}>
          {' '}
          lynn-cottage.co.uk
        </a>
      </div>
    </footer>
  )
}

export default Footer