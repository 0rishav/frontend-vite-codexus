import { Link } from "react-router-dom";
import "./android.css";

const Android = () => {
  return (
    <div>
      <header className="main-header" style={{ paddingTop: "80px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-up">
              <h1 className="display-4 text-white fw-bold mb-4">
                <div className="service-icon mb-3">
                  <img
                    src="image/mobile-apps-unscreen.gif"
                    alt="Coding"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                Transforming Your Business with Cutting-Edge Android App
                Development
              </h1>
              <p className="lead text-white mb-4">
                Leverage the latest in Android app development to build
                scalable, innovative solutions that enhance user experience and
                drive digital transformation.
              </p>
              <Link to={"/project-registration"}>
                <button className="read-more-btn">Get Started Today</button>
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="image/android_dev_image.png"
                alt="Android App Development"
                className="header-image"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Android app development section */}
      <section className="py-5 mt-5">
      <div className="container">
        <h2 className="section-title display-5 text-danger">
          Advanced Android App Development
        </h2>

        <p>
          Android app development involves the creation and maintenance of applications designed specifically for
          Android devices. It combines both creativity and technical skills to design mobile applications that provide
          a seamless experience for users.
        </p>
        <p>
          Developers use languages such as Java and Kotlin, along with development environments like Android Studio, to
          create high-performance, responsive mobile apps.
        </p>
        <p>
          With an emphasis on functionality and design, Android app development is essential for building mobile
          solutions that engage users and drive business success.
        </p>
      </div>
    </section>
    {/* Android app service section */}
    <section className="py-5">
      <div className="container">
        <h2 className="section-title display-5 text-danger">Comprehensive Android Solutions</h2>

        <div className="row g-4">
          {/* Full Android App Development */}
          <div className="col-md-6">
            <div className="aws-service-box">
              <h3 className="mb-3">
                <i className="fas fa-mobile-alt me-2 text-secondary"></i>
                Full Android App Development
              </h3>
              <p>
                Offers a complete approach to building Android applications, from concept and design to development
                and deployment.
              </p>
            </div>
          </div>

          {/* App Maintenance and Support */}
          <div className="col-md-6">
            <div className="aws-service-box">
              <h3 className="mb-3">
                <i className="fas fa-tools me-2 text-secondary"></i>
                App Maintenance and Support
              </h3>
              <p>
                Ensures continuous app performance with regular updates, bug fixes, and security enhancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* why android app development section */}
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title display-5 text-danger">Why Choose Android App Development?</h2>
        <div className="row">
          {/* Text Content */}
          <div className="col-lg-8">
            <p className="lead">
              Android app development is essential in todays digital landscape, as it enables businesses to
              expand their reach, improve customer engagement, and drive growth:
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-check-circle text-secondary me-2"></i>
                Wide Market Reach
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-secondary me-2"></i>
                Customizable Features
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-secondary me-2"></i>
                Seamless Integration
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="col-lg-4">
            <img
              src="image/android_dev_benefits.png"
              alt="Android App Benefits"
              className="img-fluid rounded-3 shadow"
            />
          </div>
        </div>
      </div>
    </section>
    {/* Advantage section */}
    <section className="py-5">
      <div className="container">
        <h2 className="section-title display-5 text-danger">
          Advantages of Android App Development
        </h2>
        <div className="row">
          {/* First Column */}
          <div className="col-lg-6">
            <div className="advantage-item">
              <div className="advantage-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div>
                <h4>Customizable App Experience</h4>
                <p className="mb-0">
                  Android apps allow for highly customizable designs and features, tailored to user needs.
                </p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <div>
                <h4>Seamless Integration</h4>
                <p className="mb-0">
                  Android apps can easily integrate with a wide range of third-party services and APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-lg-6">
            <div className="advantage-item">
              <div className="advantage-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div>
                <h4>Faster Time to Market</h4>
                <p className="mb-0">
                  Android app development offers fast development cycles, enabling quick deployment to users.
                </p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div>
                <h4>Scalability and Growth</h4>
                <p className="mb-0">
                  Android apps can easily scale as your business grows, supporting added features and larger user bases.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Advantages List */}
        <div className="mt-5">
          <h4 className="text-danger">Additional Advantages of Android App Development:</h4>
          <ul className="list-unstyled ms-3">
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Wide range of Android devices and OS versions supported
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Low development cost compared to other platforms
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Open-source development with flexibility
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Easy integration with Google services and APIs
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Global reach with the Android ecosystem
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              App security with Google Play Store policies
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Regular updates and continuous improvements to apps
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* Case study */}
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title display-5 text-danger">
          Android App Development Case Studies
        </h2>
        <div className="row g-4">
          {/* Case Study 1 */}
          <div className="col-md-6">
            <div className="case-study-box">
              <div className="case-study-content p-3">
                <h5 className="text-uppercase text-muted">Case Study</h5>
                <h3 className="mb-2">E-Commerce Android App Development</h3>
                <p>
                  Building a feature-rich e-commerce app that supports smooth product browsing, secure payment, and user engagement.
                </p>
                <button className="btn btn-outline-danger mt-3">Learn More</button>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="col-md-6">
            <div className="case-study-box">
              <div className="case-study-content p-3">
                <h5 className="text-uppercase text-muted">Case Study</h5>
                <h3 className="mb-2">Mobile Health App Development</h3>
                <p>
                  Creating a health and wellness app for tracking fitness goals, medical records, and offering personalized recommendations.
                </p>
                <button className="btn btn-outline-danger mt-3">Learn More</button>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="col-md-6">
            <div className="case-study-box">
              <div className="case-study-content p-3">
                <h5 className="text-uppercase text-muted">Case Study</h5>
                <h3 className="mb-2">Finance and Budgeting App</h3>
                <p>
                  Developing an Android app that helps users manage their finances, track expenses, and save money using smart analytics.
                </p>
                <button className="btn btn-outline-danger mt-3">Learn More</button>
              </div>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="col-md-6">
            <div className="case-study-box">
              <div className="case-study-content p-3">
                <h5 className="text-uppercase text-muted">Case Study</h5>
                <h3 className="mb-2">Social Media App Development</h3>
                <p>
                  Creating a fully functional social media app with features like real-time messaging, media sharing, and user profiles.
                </p>
                <button className="btn btn-outline-danger mt-3">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};



export default Android;
