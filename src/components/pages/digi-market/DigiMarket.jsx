import { Link } from "react-router-dom";
import "./digimarket.css";

const DigiMarket = () => {
    const caseStudies = [
        {
          title: 'Digital Marketing for Retail Business',
          description:
            'Developed a digital marketing strategy to enhance customer engagement, loyalty programs, and brand visibility for a retail client.',
        },
        {
          title: 'Digital Marketing for Healthcare',
          description:
            'Implemented a digital marketing solution for healthcare, focusing on patient engagement, service awareness, and secure data handling.',
        },
        {
          title: 'Digital Marketing for Finance',
          description:
            'Developed a digital marketing strategy tailored for financial institutions to manage brand presence, customer acquisition, and lead generation.',
        },
        {
          title: 'Digital Marketing for E-commerce',
          description:
            'Created a digital marketing campaign for an e-commerce business, improving customer reach, brand awareness, and conversion rates.',
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
                    src="image/output-onlinegiftools.gif"
                    alt="Coding"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                Transforming Your Business with Custom Digital Marketing
                Solutions
              </h1>
              <p className="lead text-white mb-4">
                Leverage the power of digital marketing to enhance customer
                engagement, streamline operations, and drive business growth.
              </p>
              <Link to={"/project-registration"}>
                <button className="read-more-btn">Get Started Today</button>
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="image/digital_marketing_image.png"
                alt="Digital Marketing"
                className="header-image"
              />
            </div>
          </div>
        </div>
      </header>
      {/* DigiMarket section */}
      <section className="py-5 mt-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Advanced Digital Marketing Solutions
          </h2>

          <p>
            Digital marketing solutions focus on strategies and tools that allow
            businesses to effectively reach and engage their target audience. It
            combines data analytics and automation to provide a seamless
            experience for users and enhance operational efficiency.
          </p>
          <p>
            Digital marketers use various tools and platforms to create
            high-performance, responsive marketing campaigns that meet business
            goals.
          </p>
          <p>
            With a focus on audience engagement, digital marketing enables
            businesses to track and optimize customer interactions, making it a
            key driver of brand loyalty and revenue growth.
          </p>
        </div>
      </section>
      {/* Digimarket solution section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Comprehensive Digital Marketing Solutions
          </h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="digital-marketing-service-box">
                <h3 className="mb-3">
                  <i className="fas fa-chart-line me-2 text-secondary"></i>
                  Complete Digital Marketing Strategy
                </h3>
                <p>
                  End-to-end digital marketing services, from planning and
                  design to deployment and performance optimization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="digital-marketing-service-box">
                <h3 className="mb-3">
                  <i className="fas fa-tools me-2 text-secondary"></i>
                  Digital Marketing Maintenance and Support
                </h3>
                <p>
                  Provides ongoing support to ensure optimal marketing
                  performance with regular updates, analytics, and campaign
                  adjustments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why digimarket section */}
      <section className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title display-5 text-danger">
          Why Choose Digital Marketing?
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="lead">Digital marketing is essential in business strategy, enabling companies to:</p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-check-circle text-secondary me-2"></i>
                Enhance Customer Insights
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-secondary me-2"></i>
                Boost Brand Awareness
              </li>
              <li className="mb-3">
                <i className="fas fa-check-circle text-secondary me-2"></i>
                Improve Customer Retention
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <img
              src="image/digital_marketing_benefits.png"
              alt="Digital Marketing Benefits"
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
          Advantages of Digital Marketing
        </h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="advantage-item">
              <div className="advantage-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div>
                <h4>Customizable Campaigns</h4>
                <p className="mb-0">
                  Digital marketing allows for a highly tailored approach to
                  meet specific business objectives.
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
                  Digital marketing strategies integrate smoothly with existing
                  tools, enhancing business workflows.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="advantage-item">
              <div className="advantage-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div>
                <h4>Faster Results</h4>
                <p className="mb-0">
                  Agile digital marketing enables faster campaign deployment
                  and audience engagement.
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
                  Digital marketing strategies can scale with your business,
                  allowing for expanded reach and new audience segments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Advantages List with Arrow Bullet Points */}
        <div className="mt-5">
          <h4 className="text-danger">
            Additional Advantages of Digital Marketing:
          </h4>
          <ul className="list-unstyled ms-3">
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Enhanced customer engagement and satisfaction
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Improved data-driven decision making
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Efficient tracking of campaign performance and ROI
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Customizable to specific industries and business models
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Centralized analytics for easy access and management
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Automated workflows for efficient campaign management
            </li>
            <li>
              <i className="fas fa-arrow-right me-2 text-secondary"></i>
              Scalable architecture for future growth
            </li>
          </ul>
        </div>
      </div>
    </section>
    {/* Case study section */}
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title display-5 text-danger">
          Digital Marketing Case Studies
        </h2>
        <div className="row g-4">
          {caseStudies.map((caseStudy, index) => (
            <div className="col-md-6" key={index}>
              <div className="case-study-box">
                <div className="case-study-content p-3">
                  <h5 className="text-uppercase text-muted">Case Study</h5>
                  <h3 className="mb-2">{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                  <button className="btn btn-outline-danger mt-3">
                    Learn More
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


export default DigiMarket;
