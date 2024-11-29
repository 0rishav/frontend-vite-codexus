const Footer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        className="container-fluid bg-dark text-light fadeInUp"
        data-wow-delay="0.1s" style={{marginBottom:"0px"}}
      >
        <div className="container">
          <div className="row gx-5">
             {/* About Section */}
            <div className="col-lg-4 col-md-6 footer-about" style={{marginBottom:"20px",padding:"10px 10px"}}>
              <div style={{borderRadius:"10px"}} className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-2">
                <a href="index.html" className="navbar-brand">
                  <h1  className=" text-white" style={{ fontSize: "2.5rem",padding:"10px 10px",fontStyle:"italic" }}>
                    Codexus Labs
                  </h1>
                </a>
                <p style={{padding:"0px 20px",fontStyle:"italic"}} className="mt-3 mb-4">
                  Unlock growth and engagement with Codexus Labs comprehensive
                  services in digital marketing, web development, and
                  user-centered AI solutions—driving innovation for a smarter
                  future.
                </p>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                      style={{height:"40px"}}
                    />
                    <button className="btn btn-dark">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i
                      className="fa fa-globe me-2"
                      style={{ color: "#06A3DA" }}
                    ></i>
                    <p className="mb-0 text-white">India</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0 text-white">contact@codexuslabs.com</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a className="btn btn-primary btn-square me-2" href="#">
                    <i className="fab fa-twitter"></i>

                    </a>
                    
                    <a className="btn btn-primary btn-square me-2" href="#">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square me-2" href="#">
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a className="btn btn-primary btn-square" href="#">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Our Services
                    </a>
                    <a className="text-light" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div>

                {/* Popular Links */}
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Popular Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </a>
                    <a className="text-light mb-2" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Our Services
                    </a>
                    <a className="text-light" href="#">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div
        className="container-fluid text-white py-3"
        style={{ background: "#061429" }}
      >
        <div className="container text-center">
          <p className="mb-0 text-white">
            Copyright &copy; 2024 Codexus Labs AI Solutions Pvt Ltd
          </p>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>

    </div>
  );
};

export default Footer;
