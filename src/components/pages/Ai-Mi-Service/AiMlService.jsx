import { Link } from "react-router-dom";
import "./aiml-service.css";

const AiMlService = () => {
  const caseStudies = [
    {
      title: "Swift and Secure Data Redaction",
      description:
        "Leveraging AWS Textract to streamline data redaction, enabling organizations to handle sensitive data efficiently and securely.",
    },
    {
      title: "Tax Form Data Extraction",
      description:
        "Automating the extraction of critical data from tax documents using AWS services to enhance accuracy and speed in document processing.",
    },
    {
      title: "Streamlined Insurance Claims Processing",
      description:
        "Accelerating insurance claim handling through AWS AI/ML features, leading to faster and more accurate data processing.",
    },
    {
      title: "Optimizing Insurance Claims Workflow",
      description:
        "Enhanced the claims process by integrating cutting-edge AI and machine learning on AWS, ensuring faster and more accurate data processing.",
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
                    src="image/digitalization-unscreen.gif"
                    alt="Coding"
                    style={{ width: "90px", height: "90px" }}
                  />
                </div>
                Revolutionizing your Business with Cloud AI
              </h1>
              <p className="lead text-white mb-4">
                Harness the latest in AI/ML with fully managed AWS services to
                enable intelligent scalable solution delivery that drives
                innovation and growth.
              </p>
              <Link to={"/project-registration"}>
                <button className="read-more-btn">Get Started Today</button>
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="image/Leonardo_Phoenix_A_futuristic_digital_artwork_depicting_the_co_3-removebg-preview.png"
                alt="AWS AI Services Diagram"
                className="header-image"
              />
            </div>
          </div>
        </div>
      </header>
      {/* AWS AI in the cloud section */}
      <section className="py-5 mt-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            Artificial Intelligence in the Cloud
          </h2>

          <p>
            Codexus Labs, recognized as a top-tier partner with Amazon Web
            Services (AWS), possesses the expertise to innovate and expand upon
            the AI/ML offerings provided by AWS.
          </p>
          <p>
            With AWSs extensive range of tools and services, organizations can
            effortlessly integrate AI/ML into their applications. By leveraging
            AWS, businesses are empowered to design and deploy scalable, secure,
            and high-performing systems that drive operational efficiency and
            intelligence.
          </p>
          <p>
            AWS AI/ML services offer a wide array of solutions that can be
            developed. The image below showcases the diverse range of solutions
            that can be crafted, covering multiple industries and use cases,
            from forecasting trends to smart data extraction.
          </p>
        </div>
      </section>
      {/* AWS SERVICE SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title display-5 text-danger">
            AWS AI & ML Services
          </h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="aws-service-box">
                <h3 className="mb-3">
                  <i className="fas fa-brain me-2 text-secondary"></i>
                  Comprehend & Rekognition
                </h3>
                <p>
                  Advanced Natural Language Processing and Computer Vision
                  solutions that automate content analysis and enable
                  intelligent image recognition capabilities.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="aws-service-box">
                <h3 className="mb-3">
                  <i className="fas fa-robot me-2 text-secondary"></i>
                  SageMaker & Textract
                </h3>
                <p>
                  Build, train, and deploy machine learning models at scale with
                  automated document processing capabilities for enhanced
                  business intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CLOUD AI SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title display-5 text-danger">Why Cloud AI?</h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="lead">
                Cloud AI offers scalable, on-demand computing resources that
                allow businesses to implement powerful machine learning
                solutions without extensive in-house infrastructure. Cloud
                services enable:
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="fas fa-check-circle text-secondary me-2"></i>
                  Rapid deployment and iteration of AI models
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-secondary me-2"></i>
                  Flexible scaling based on business needs
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-secondary me-2"></i>
                  Cost-efficient resource utilization
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img
                src="image/AWS-AI-&-ML-Services.jpg"
                alt="Cloud AI Benefits"
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
            Advantages of Cloud AI
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-server"></i>
                </div>
                <div>
                  <h4>Optimized Infrastructure</h4>
                  <p className="mb-0">
                    State-of-the-art computing resources specifically designed
                    for AI/ML workloads
                  </p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4>Enterprise Security</h4>
                  <p className="mb-0">
                    Advanced security features with continuous monitoring and
                    automated maintenance
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
                  <h4>Intelligent Scaling</h4>
                  <p className="mb-0">
                    Automatic resource adjustment based on real-time demand and
                    workload patterns
                  </p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div>
                  <h4>Modern Architecture</h4>
                  <p className="mb-0">
                    Ready-to-use APIs and microservices for seamless integration
                    with existing systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Advantages List with Arrow Bullet Points */}
          <div className="mt-5">
            <h4 className="text-danger">
              Advantages of Using AI in the Cloud:
            </h4>
            <ul className="list-unstyled ms-3">
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Optimized infrastructure for AI model training and inference
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Ongoing monitoring and upkeep to guarantee continuous
                availability
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>Robust
                security measures for applications and services
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Automatic scalability to accommodate varying demand
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Accessible as microservices or APIs for seamless integration
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Designed for high-performance, mission-critical tasks
              </li>
              <li>
                <i className="fas fa-arrow-right me-2 text-secondary"></i>
                Supports the creation and deployment of custom AI models in the
                cloud
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
            {caseStudies.map((study, index) => (
              <div key={index} className="col-md-6">
                <div className="case-study-box">
                  <div className="case-study-content p-3">
                    <h5 className="text-uppercase text-muted">Case Study</h5>
                    <h3 className="mb-2">{study.title}</h3>
                    <p>{study.description}</p>
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



export default AiMlService;
