const Footer = () => {
  const year = new Date().getFullYear() 
  return (
    <footer>
      <div class="footer-copyright text-center py-3 mt-5" style={{ color: "4f4f4f", backgroundColor: "rgba(38, 38, 38)" }}>
        &copy; {year};
        <a href="http://localhost:3000" style={{ color: "white" }}>
          {" "}
          lynn-cottage.co.uk
        </a>
      </div>
    </footer>
  )
}

export default Footer