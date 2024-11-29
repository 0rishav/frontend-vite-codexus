import { Link } from "react-router-dom";
import "./webdev.css";

const Webdev = () => {
  const caseStudies = [
    {
      title: "Tailored Web Solutions for E-Commerce",
      description:
        "Building a customized, scalable e-commerce platform that enhances user experience and supports business growth.",
      buttonText: "Learn More",
    },
    {
      title: "Responsive Web Design for Global Reach",
      description:
        "Redesigning a global brand’s website to ensure seamless user experiences across desktop, tablet, and mobile platforms.",
      buttonText: "Learn More",
    },
    {
      title: "Building a Custom Web Application",
      description:
        "Creating a custom web application that improves business processes, enhances productivity, and boosts operational efficiency.",
      buttonText: "Learn More",
    },
    {
      title: "Optimizing Website Performance",
      description:
        "Optimizing website load times, improving SEO, and ensuring a fast, responsive user experience to enhance user engagement and search engine rankings.",
      buttonText: "Learn More",
    },
  ];
  return (
    <div>
      <header className="main-header" style={{ paddingTop: "80px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-up">
              <h1 className="display-4 text-white fw-bold mb-4">
                <div className="service-icon mb-3">
                  <img
                    src="image/cloud-security-unscreen.gif"
                    alt="Coding"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                Transforming Your Business with Cutting-Edge Web Development
              </h1>
              <p className="lead text-white mb-4">
                Leverage the latest in web development with robust, fully
                managed AWS services to build scalable, innovative solutions
                that accelerate growth and drive digital transformation.
              </p>
              <Link to={"/project-registration"}>
                <button className="read-more-btn">Get Started Today</button>
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="image/web&devimg.png"
                alt="AWS AI Services Diagram"
                className="header-image"
              />
            </div>
          </div>
        </div>
      </header>
      {/* AWS AI In the cloud section */}
      <section className="py-5 mt-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Advanced Web Development
          </h2>

          <p>
            Web development involves the creation and maintenance of websites
            and web applications that run online. It encompasses various
            aspects, from designing the user interface (UI) and user experience
            (UX) to implementing functionality and managing databases.
          </p>
          <p>
            Web developers work with a range of languages and tools, like HTML,
            CSS, JavaScript, and frameworks such as React or Django, to build
            responsive, interactive, and user-friendly websites.
          </p>
          <p>
            With a focus on both functionality and aesthetics, web development
            plays a critical role in creating digital solutions that engage
            users, enhance accessibility, and drive business success.
          </p>
        </div>
      </section>
      {/* AWS SERVICE SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Comprehensive Web Solutions
          </h2>

          <div className="row g-4">
            {/* Full-Stack Development */}
            <div className="col-md-6">
              <div className="aws-service-box">
                <h3 className="mb-3">
                  <i className="fas fa-brain me-2 text-secondary"></i>
                  Full-Stack Development
                </h3>
                <p>
                  Combines both front-end and back-end development expertise,
                  offering a comprehensive approach to build complete web
                  solutions.
                </p>
              </div>
            </div>

            {/* Website Maintenance and Support */}
            <div className="col-md-6">
              <div className="aws-service-box">
                <h3 className="mb-3">
                  <i className="fas fa-robot me-2 text-secondary"></i>
                  Website Maintenance and Support
                </h3>
                <p>
                  Provides ongoing updates, performance optimization, security
                  checks, and troubleshooting to ensure websites run smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CLOUD AI SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Why SEO Optimization?
          </h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="lead">
                Web development is essential in todayS digital landscape, as it
                enables businesses to establish a strong online presence,
                connect with a global audience, and drive growth:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-secondary me-2"></i>
                  Increased Visibility
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-secondary me-2"></i>
                  Enhanced User Experience
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-secondary me-2"></i>
                  Higher Organic Traffic
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img
                src="image/Benefits-of-Hiring-Web-Development-Company-1024x465.png"
                alt="Cloud AI Benefits"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ADVANTAGE SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Advantages of Web Development & SEO
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-server"></i>
                </div>
                <div>
                  <h4>Customizable User Experience</h4>
                  <p className="mb-0">
                    Web development allows for tailored designs and features
                    that enhance the overall user experience.
                  </p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4>Improved Performance and Speed</h4>
                  <p className="mb-0">
                    Well-developed websites are optimized for fast loading times
                    and seamless performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-expand-arrows-alt"></i>
                </div>
                <div>
                  <h4>Increased Organic Traffic</h4>
                  <p className="mb-0">
                    SEO helps your website rank higher on search engine results,
                    driving more organic (unpaid) traffic to your site.
                  </p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4>Higher Conversion Rates</h4>
                  <p className="mb-0">
                    SEO not only attracts visitors but also targets users who
                    are actively searching for what you offer, increasing the
                    likelihood of conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Advantages List with Arrow Bullet Points */}
          <div className="mt-5">
            <h4 className="text-danger">Advantages of Web Development:</h4>
            <ul className="list-unstyled ms-3">
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Customized website design to meet unique business needs
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Responsive design for seamless user experience across devices
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Optimized performance and fast load times for better engagement
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Scalable infrastructure to support future growth and feature
                expansion
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>Secure
                development practices to safeguard user data and applications
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Integration with third-party APIs and services for enhanced
                functionality
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Ongoing maintenance and support to ensure site performance and
                security
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* CASE STUDY */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title display-5 text-danger">Case Studies</h2>
          <div className="row g-4">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="col-md-6">
                <div className="case-study-box">
                  <div className="case-study-content p-3">
                    <h5 className="text-uppercase text-muted">Case Study</h5>
                    <h3 className="mb-2">{caseStudy.title}</h3>
                    <p>{caseStudy.description}</p>
                    <button className="btn btn-outline-danger mt-3">
                      {caseStudy.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 


export default Webdev;
