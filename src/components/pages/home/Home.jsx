import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ scrolled }) => {
  const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 1500,
    dots: false,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 5 },
      992: { items: 7 },
      1200: { items: 9 },
    },
  };

  const services = [
    {
      img: "image/digitalization-unscreen.gif",
      title: "AI & ML",
      description:
        "Transformative AI/ML solutions designed to optimize operations, drive innovation, and unlock new growth opportunities for businesses.",
      link: "ai&ml-service.html",
    },
    {
      img: "image/responsive-unscreen.gif",
      title: "Web Design and Development",
      description:
        "We create stunning, responsive websites tailored to your needs, ensuring optimal user experience and engagement.",
      link: "web&dev.html",
    },
    {
      img: "image/mobile-apps-unscreen.gif",
      title: "Android App Development",
      description:
        "We develop user-friendly Android applications that provide a seamless experience across various devices.",
      link: "android-service.html",
    },
    {
      img: "image/crm-unscreen.gif",
      title: "CRM Software Development",
      description:
        "Our custom CRM solutions help you manage customer relationships efficiently, enhancing productivity and growth.",
      link: "crm-service.html",
    },
    {
      img: "image/promotion-unscreen.gif",
      title: "Digital Marketing",
      description:
        "Our digital marketing strategies help increase your online presence, attract traffic, and convert leads into sales.",
      link: "digi_market.html",
    },
    {
      img: "image/message-unscreen.gif",
      title: "24/7 Email Support",
      description:
        "We provide round-the-clock email support to ensure that our clients receive timely assistance whenever needed.",
      link: "email-service.html",
    },
  ];
  return (
    <div>
      <div
        className="modal fade"
        id="searchModal"
        tabIndex="-1"
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(9, 30, 62, 0.7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* caurosel */}
      <div className="container-fluid position-relative p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{
            position: "sticky",
            top: "0",
            zIndex: "1",
            width: "100%",
            transition: "background-color 0.3s ease",
            backgroundColor: scrolled ? "#f5f5f5" : "transparent",
          }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="/image/istockphoto-187102536-612x612.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Intelligent Automation
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Automation into innovation
                  </h1>
                  <Link
                    to="/ai&ml-service"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                className="w-100"
                src="/image/photo-1598965402089-897ce52e8355.jpeg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Automate Workflows and Enhance User Experiences
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Smart Android Apps with AI Automation
                  </h1>
                  <Link
                    to="/android-service"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img
                className="w-100"
                src="/image/pexels-olly-840996.jpg"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Interactive Web Solutions
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Engaging web experiences, elevating brands
                  </h1>
                  <Link
                    to="/web&dev"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="w-100" src="/image/5.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Brand Amplification
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Driving growth through digital impact
                  </h1>
                  <Link
                    to="/digi_market"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* services section start */}
      <div style={{overflow:"visible"}} className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="container py-5"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Our Services
            </h5>
            <h1 className="mb-0">
              Innovative IT Services Designed for Your Business Success
            </h1>
          </div>
          <div className="row g-5">
          {services.map((service, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={index}
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileInView={{ y: 0, opacity: 1 }} 
              viewport={{ once: true, amount: 0.3 }}  
              transition={{
                delay: index * 0.2, 
                duration: 0.6,
                type: "spring",
                stiffness: 50,
              }}
            >
              <div className="service-item bg-light d-flex flex-column align-items-center justify-content-center text-center p-3">
                <div className="service-icon mb-3">
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="m-0">{service.description}</p>
                <a className="btn btn-lg btn-primary" href={service.link}>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div
          className="container py-5"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">
              Why Choose Us
            </h5>
            <h1 className="mb-0">
              Our mission is to drive exceptional growth for your business
            </h1>
          </div>
          <div className="row g-5">
            {/* Left Column */}
            <div className="col-lg-4">
              <div className="row g-5">
                {/* Best In Industry */}
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div className="service-icon mb-3">
                    <img
                      src="image/best-customer-experience-unscreen.gif"
                      alt="Best In Industry"
                      style={{ width: "90px", height: "90px" }}
                    />
                  </div>
                  <h4>Best In Industry</h4>
                  <p className="mb-0">
                    At Codexus Labs, we deliver top-tier, innovative technology
                    solutions tailored to each client. Our focus on quality and
                    customer satisfaction makes us industry leaders, committed
                    to staying at the forefront of tech trends.
                  </p>
                </div>

                {/* Award Winning */}
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div className="service-icon mb-3">
                    <img
                      src="image/trophy-unscreen.gif"
                      alt="Award Winning"
                      style={{ width: "90px", height: "90px" }}
                    />
                  </div>
                  <h4>Award Winning</h4>
                  <p className="mb-0">
                    Our dedication and expertise have earned us awards in web
                    development, mobile apps, and AI solutions. These accolades
                    reflect our commitment to delivering outstanding results for
                    our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-delay="0.9s"
              style={{ minHeight: "350px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src="image/pngtree-business-meeting-in-top-view-png-image_13790308-removebg-preview.png"
                  alt="Business Meeting"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              <div className="row g-5">
                {/* Professional Staff */}
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div className="service-icon mb-3">
                    <img
                      src="image/leadership.gif"
                      alt="Professional Staff"
                      style={{ width: "90px", height: "90px" }}
                    />
                  </div>
                  <h4>Professional Staff</h4>
                  <p className="mb-0">
                    Our skilled team brings extensive experience in software
                    development, digital marketing, AI, and support. With
                    diverse expertise, we deliver high-quality solutions to meet
                    complex business challenges.
                  </p>
                </div>

                {/* 24/7 Support */}
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div className="service-icon mb-3">
                    <img
                      src="image/24-7.gif"
                      alt="24/7 Support"
                      style={{ width: "90px", height: "90px" }}
                    />
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    We offer round-the-clock email support, ensuring clients
                    receive timely assistance whenever needed. Our team is
                    always ready to address issues, giving you uninterrupted
                    service and peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vendor start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        {/* Section Title */}
        <div className="text-center">
          <h5 className="fw-bold text-primary text-uppercase">
            Our Reliable Partner
          </h5>
        </div>

        {/* Carousel Section */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 mb-5">
            <div>
              <OwlCarousel className="vendor-carousel" {...options}>
                <img src="image/vendor-1.png" alt="Vendor 1" />
                <img src="image/vendor-2.png" alt="Vendor 2" />
                <img src="image/vendor-3.png" alt="Vendor 3" />
                <img src="image/vendor-4.png" alt="Vendor 4" />
                <img src="image/vendor-5.png" alt="Vendor 5" />
                <img src="image/vendor-6.png" alt="Vendor 6" />
                <img src="image/vendor-7.png" alt="Vendor 7" />
                <img src="image/vendor-8.png" alt="Vendor 8" />
                <img src="image/vendor-9.png" alt="Vendor 9" />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
