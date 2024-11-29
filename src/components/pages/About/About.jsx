import OwlCarousel from "react-owl-carousel";

const About = () => {
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
  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{
            background: `linear-gradient(rgba(9, 30, 62, 0.7), rgba(9, 30, 62, 0.7)), url('image/it-company-interior-design.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">About Us</h1>
              <a href="/" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="/about" className="h5 text-white">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Page */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="mb-0">
                  The Best IT Solution With 10 Years of Experience
                </h1>
              </div>

              <p className="intro mb-4">
                At Codexus Labs, we’re dedicated to delivering technology
                solutions that drive growth, efficiency, and innovation for
                businesses of all sizes. With expertise spanning web and mobile
                development, digital marketing, AI, and customer support, we
                provide end-to-end solutions to help our clients succeed in
                today’s digital landscape.
              </p>

              {/* Service Sections */}
              <div className="service" id="ai-ml">
                <div className="service-icon mb-3">
                  <img
                    src="image/digitalization-unscreen.gif"
                    alt="AI & ML Solutions"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h2>AI & ML Solutions</h2>
                <p>
                  Our advanced AI and Machine Learning services are designed to
                  transform and elevate your business. By implementing AI-driven
                  automation, predictive analytics, and machine learning models,
                  we help you optimize operations, make data-informed decisions,
                  and unlock new growth opportunities. Our AI/ML solutions are
                  tailored to address specific business challenges and enable
                  innovation in every aspect of your operation.
                </p>
              </div>

              <div className="service" id="web-dev">
                <div className="service-icon mb-3">
                  <img
                    src="image/responsive-unscreen.gif"
                    alt="Web Design and Development"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h2>Web Design and Development</h2>
                <p>
                  We specialize in creating stunning, responsive websites that
                  reflect your brand’s identity and are tailored to your
                  specific needs. Every site we build is designed with a focus
                  on user experience (UX), ensuring easy navigation and
                  engagement on all devices. Our goal is to make your online
                  presence not only visually appealing but also functional and
                  results-driven.
                </p>
              </div>

              <div className="service" id="android-app-dev">
                <div className="service-icon mb-3">
                  <img
                    src="image/mobile-apps-unscreen.gif"
                    alt="Android App Development"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h2>Android App Development</h2>
                <p>
                  Our team develops user-centric Android applications that
                  provide a smooth and intuitive experience on all compatible
                  devices. From initial design through deployment, we prioritize
                  functionality, speed, and usability, enabling your users to
                  interact seamlessly with your app across various Android
                  devices.
                </p>
              </div>

              <div className="service" id="crm-dev">
                <div className="service-icon mb-3">
                  <img
                    src="image/crm-unscreen.gif"
                    alt="CRM Software Development"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h2>CRM Software Development</h2>
                <p>
                  Efficiently manage customer relationships with our custom CRM
                  solutions. We design our CRM software to streamline
                  communications, track interactions, and automate tasks,
                  helping your team focus on what matters most—building strong
                  customer relationships and driving growth.
                </p>
              </div>

              <div className="service" id="digital-marketing">
                <div className="service-icon mb-3">
                  <img
                    src="image/promotion-unscreen.gif"
                    alt="Digital Marketing"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h2>Digital Marketing</h2>
                <p>
                  Our digital marketing strategies are crafted to amplify your
                  brand’s online presence. By combining SEO, social media,
                  content marketing, and paid advertising, we attract
                  high-quality traffic, improve brand visibility, and help
                  convert leads into loyal customers. We’re committed to
                  creating data-driven campaigns that deliver measurable
                  results.
                </p>
              </div>

              <div className="service" id="support">
                <div className="service-icon mb-3">
                  <img
                    src="image/message-unscreen.gif"
                    alt="24/7 Email Support"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                <h2>24/7 Email Support</h2>
                <p>
                  We know how crucial reliable support is to your business.
                  That’s why we offer 24/7 email support to ensure that any
                  questions or issues are addressed promptly. Our support team
                  is here to provide timely and effective assistance, giving you
                  peace of mind and uninterrupted service.
                </p>
              </div>

              {/* Features */}
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Award
                    Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>24/7
                    Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-primary me-3"></i>Fair Prices
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vendor start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
          <div>
            <OwlCarousel className="vendor-carousel"{...options}>
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
  );
};

export default About;
