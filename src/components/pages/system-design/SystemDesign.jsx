import { useState } from "react";
import "./system-design.css";
const SystemDesign = () => {
  const [activeContent, setActiveContent] = useState("introduction");
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [showPremiumOverlay, setShowPremiumOverlay] = useState(false);
  const [activeChapter, setActiveChapter] = useState(null);
  const [showSolution, setShowSolution] = useState(Array(5).fill(false));

  const faqData = [
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for software engineers, tech leads, and architects who want to deepen their understanding of system design. It's also excellent preparation for those facing system design interviews.",
    },
    {
      question: "What prerequisites are needed?",
      answer:
        "A solid understanding of basic programming concepts and some experience with web development is recommended. Familiarity with distributed systems is helpful but not required.",
    },
    {
      question: "How long does the course take to complete?",
      answer:
        "The course is self-paced, but typically takes 8-10 weeks to complete if you dedicate 5-7 hours per week. You'll have lifetime access to the content, so you can learn at your own pace.",
    },
  ];

  const [showToggle, setShowToggle] = useState(
    Array(faqData.length).fill(false)
  );

  const chaptersData = [
    {
      title: "Fundamentals of Python Programming",
      content: [
        "What are common data structures and algorithms used in Python?",
        "Explain the concept of exception handling in Python programming",
      ],
    },
    {
      title: "Python Data Structures and Algorithms",
      content: [
        "What are the differences between lists, tuples, and sets in Python?",
        "How do you implement and use custom data structures in Python?",
      ],
    },
    {
      title: "Object-Oriented Programming in Python",
      content: [
        "What are the core principles of object-oriented programming (OOP) in Python?",
      ],
    },
    {
      title: "Data Handling and Manipulation",
      content: [
        "Explain the use of Pandas for data manipulation in Python.",
        "What are some common techniques for handling missing data in Python?",
      ],
    },
    {
      title: "Concurrency and Parallelism",
      content: [
        "What are the key differences between threading and multiprocessing in Python?",
        "How does asynchronous programming improve performance in Python?",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "Case Study 1: Basic Data Types and Variables",
      objective:
        "Understand and differentiate between basic data types in Python.",
      scenario:
        "Write a Python script to define variables of different types (integer, float, string, boolean). Print the type of each variable using the type() function.",
      keyConcepts: "Integers, Floats, Strings, Booleans, type() function.",
      solution: `# Defining variables
integer_var = 10
float_var = 10.5
string_var = "Hello, Python!"
boolean_var = True`,
    },
    {
      title: "Case Study 2: Arithmetic Operations",
      objective:
        "Perform and understand basic arithmetic operations in Python.",
      scenario:
        "Create a Python script that takes two numbers as input from the user and performs addition, subtraction, multiplication, division, and modulus operations. Display the results.",
      keyConcepts: "Arithmetic Operators (+, -, *, /, %), input() function.",
      solution: `# Taking input from the user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
# Performing arithmetic operations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
modulus = num1 % num2`,
    },
    {
      title: "Case Study 3: String Manipulation",
      objective: "Explore various string operations and methods.",
      scenario:
        "Write a Python program that takes a string input from the user and demonstrates the following operations: concatenation, slicing, finding the length of the string, converting to uppercase and lowercase.",
      keyConcepts: "String Slicing, Concatenation, len(), upper(), lower().",
      solution: `# Taking a string input from the user
user_string = input("Enter a string: ")
# String operations
concatenation = user_string + " - Python Programming"
slicing = user_string[0:5]
length_of_string = len(user_string)
uppercase_string = user_string.upper()
lowercase_string = user_string.lower()`,
    },
    {
      title: "Case Study 4: Type Conversion",
      objective: "Convert between different data types in Python.",
      scenario:
        "Develop a Python script that converts an integer to a string, a float to an integer, and a string to a float. Display the results before and after conversion.",
      keyConcepts: "Type Conversion, int(), float(), str().",
      solution: `# Initializing variables
integer_value = 42
float_value = 3.14159
string_value = "123.45"
# Before conversion
print(f"Before conversion: Integer: {integer_value}, Float: {float_value}, String: {string_value}")
# Type conversions
int_to_str = str(integer_value)
float_to_int = int(float_value)
str_to_float = float(string_value)
# After conversion
print(f"After conversion: Integer to String: {int_to_str}, Float to Integer: {float_to_int}, String to Float: {str_to_float}")`,
    },
    {
      title: "Case Study 5: Handling Lists and Indexing",
      objective:
        "Work with lists, including accessing elements and modifying them.",
      scenario:
        "Create a Python script that demonstrates accessing and modifying elements of a list.",
      keyConcepts: "Lists, Indexing, List Methods (append(), remove()).",
      solution: `# Defining a list of five numbers
numbers = [10, 20, 30, 40, 50]
# Accessing elements by index
print("First element:", numbers[0])
print("Last element:", numbers[-1])
# Modifying elements
numbers[1] = 25
print("Modified list:", numbers)
# Appending a new element
numbers.append(60)
print("List after appending:", numbers)
# Removing an element
numbers.remove(30)
print("List after removing 30:", numbers)`,
    },
  ];

  const toggleChapter = (index) => {
    setActiveChapter(activeChapter === index ? null : index);
  };

  const toggleReadMore = (e) => {
    e.preventDefault();
    setShowMoreContent((prev) => !prev);
  };

  const showPremiumOverlayHandler = () => {
    setShowPremiumOverlay(true);
  };

  const closePremiumOverlayHandler = () => {
    setShowPremiumOverlay(false);
  };

  const redirectToPage = () => {
    console.log("Redirecting to a page...");
  };

  const scrollToSection = () => {
    console.log("Scrolling to Section...");
  };

  const scrollToList = () => {
    console.log("Scrolling to List...");
  };

  const scrollToFunctions = () => {
    console.log("Scrolling to Functions...");
  };

  const scrollToObjects = () => {
    console.log("Scrolling to Objects...");
  };

  const scrollToModularDesign = () => {
    console.log("Scrolling to Modular Design...");
  };

  const scrollToTextFiles = () => {
    console.log("Scrolling to Text Files...");
  };

  const scrollToDictionaries = () => {
    console.log("Scrolling to Dictionaries...");
  };

  const scrollToOOP = () => {
    console.log("Scrolling to OOP...");
  };

  const scrollToRecursion = () => {
    console.log("Scrolling to Recursion...");
  };

  //   const scrollToSection = (id) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  const toggleSolution = (index) => {
    setShowSolution((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const toggleFAQ = (index) => {
    const updatedShowSolution = [...showToggle];
    updatedShowSolution[index] = !updatedShowSolution[index];
    setShowToggle(updatedShowSolution);
  };
  return (
    <div>
      <div className="profile-section" style={{padding:"10px 40px"}}>
        <button
              className="back-button-css"
              onClick={() => window.history.back()}
              title="GoBack"
              style={{backgroundColor:"#0073e6"}}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
        </div>
      <header className="header-course" style={{marginTop:"30px"}}>
        <div className="code-background-1" id="codeBackground-1"></div>
        <div className="header-content-course">
          <h1 className="header-title-course" style={{ color: "#fff" }}>
            Master Python Programming Course
          </h1>
          <p className="header-subtitle-course">
            Elevate Your Engineering Skills
          </p>
          <a href="#" className="cta-button" id="ctaButton">
            Get Premium Access
          </a>
        </div>
      </header>
      {/* navigation */}
      <div className="container">
        {/* Navigation Bar */}
        <div className="nav-container-sys">
          {/* Introduction */}
          <div
            className={`nav-box-sys ${
              activeContent === "introduction" ? "active" : ""
            }`}
            data-content="introduction"
            onClick={() => setActiveContent("introduction")}
          >
            <div className="nav-icon-sys">
              <i className="fas fa-book"></i>
            </div>
            <div>Introduction</div>
          </div>

          {/* Chapters */}
          <div
            className={`nav-box-sys ${
              activeContent === "chapters" ? "active" : ""
            }`}
            data-content="chapters"
            onClick={() => setActiveContent("chapters")}
          >
            <div className="nav-icon-sys">
              <i className="fas fa-list"></i>
            </div>
            <div>Chapters</div>
          </div>

          {/* Case Study */}
          <div
            className={`nav-box-sys ${
              activeContent === "case-study" ? "active" : ""
            }`}
            data-content="case-study"
            onClick={() => setActiveContent("case-study")}
          >
            <div className="nav-icon-sys">
              <i className="fas fa-briefcase"></i>
            </div>
            <div>Case Study</div>
          </div>

          {/* FAQs */}
          <div
            className={`nav-box-sys ${
              activeContent === "faqs" ? "active" : ""
            }`}
            data-content="faqs"
            onClick={() => setActiveContent("faqs")}
          >
            <div className="nav-icon-sys">❓</div>
            <div>FAQs</div>
          </div>
        </div>

        {/* Main Content */}
      </div>
      <div>
        {activeContent === "introduction" && (
          <div
            id="introduction"
            className="main-content"
            style={{
              padding: "50px",
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.6,
            }}
          >
            <h2 style={{ textAlign: "center", color: "#333" }}>Introduction</h2>
            <p style={{ marginBottom: "15px", color: "#555" }}>
              In this course, we will guide you through the essential concepts
              of Python programming using video-based lessons. Gaining a solid
              grasp of core programming principles is crucial for mastering
              Python programming and excelling in related interviews.
            </p>
            <p style={{ marginBottom: "15px", color: "#555" }}>
              Every programming language has its own unique aspects, and more
              complex programs often deviate from standard coding approaches.
              However, in Python programming interviews, you are not expected to
              know every detail. Instead, you will need to showcase your
              knowledge of common programming principles and best practices.
              This course is designed to reinforce your understanding of these
              frequently used concepts and show you how to apply them to
              real-world problems.
            </p>
            <p style={{ marginBottom: "15px", color: "#555" }}>
              Beyond just understanding concepts, this course will teach you the
              thought process behind Python programming. We will explore the key
              questions to ask during the coding phase and how to assess
              different approaches. This focus on the programming process
              distinguishes this course from others and is crucial for
              succeeding in interviews and advancing your software development
              career.
            </p>
            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <img
                src="/image/image.png"
                alt="System Design"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </div>
            <p style={{ marginBottom: "15px", color: "#555" }}>
              This additional content will further enhance your learning
              experience, providing you with deeper insights and practical
              knowledge. By integrating real-world examples and advanced
              techniques, this course aims to make you a proficient Python
              programmer capable of tackling complex problems effectively.
            </p>

            <div
              id="readMoreSection"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              <button
                onClick={toggleReadMore}
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "16px",
                  color: "#1a5928",
                  backgroundColor: "#fff",
                  textDecoration: "none",
                  border: "2px solid #1a5928",
                  borderRadius: "30px",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                <i
                  className="fa fa-plus-circle"
                  style={{ marginRight: "8px" }}
                ></i>{" "}
                Read More
              </button>
              {showMoreContent && (
                <div
                  id="moreContent"
                  style={{ display: "block", marginTop: "20px", color: "#555" }}
                >
                  <p>
                    Understanding Python programming involves mastering both
                    theoretical knowledge and practical skills. This course
                    covers various programming paradigms such as
                    object-oriented, functional, and procedural programming. It
                    also explores the trade-offs between these paradigms to help
                    you choose the best approach for different scenarios.
                  </p>
                  <p>
                    We will dive deep into the principles of scalability,
                    reliability, and performance optimization. The course
                    includes real-world case studies that illustrate how these
                    principles are applied in Python applications. Additionally,
                    you will gain hands-on experience with tools and
                    technologies commonly used in Python programming.
                  </p>
                  <p>
                    By engaging with this course, you will be equipped with the
                    knowledge to write robust and scalable Python code. You wll
                    also have the ability to analyze and critique existing
                    codebases, providing valuable insights into their strengths
                    and weaknesses. This comprehensive approach ensures that you
                    are well-prepared for both interviews and practical
                    applications in your career.
                  </p>
                </div>
              )}
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                className="python-course-btn-buy"
                onClick={showPremiumOverlayHandler}
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  fontSize: "16px",
                  color: "#fff",
                  backgroundColor: "#1a5928",
                  textDecoration: "none",
                  borderRadius: "30px",
                  transition: "background-color 0.3s",
                  outline: "none",
                  border: "none",
                }}
              >
                Buy Now
              </button>
            </div>

            {showPremiumOverlay && (
              <div
                className="premium-overlay-python"
                id="premiumOverlay"
                style={{ display: "block" }}
              >
                <div className="premium-content-python">
                  <h2 className="premium-title-python">
                    Unlock Premium Access
                  </h2>
                  <p className="premium-price-python">$199</p>
                  <ul className="premium-features-python">
                    <li>
                      <i className="fa fa-check-circle"></i> Full access to all
                      course modules
                    </li>
                    <li>
                      <i className="fa fa-briefcase"></i> Exclusive case studies
                      and projects
                    </li>
                    <li>
                      <i className="fa fa-user-tie"></i> 1-on-1 mentoring
                      sessions
                    </li>
                    <li>
                      <i className="fa fa-certificate"></i> Certificate of
                      completion
                    </li>
                    <li>
                      <i className="fa fa-refresh"></i> Lifetime updates
                    </li>
                  </ul>
                  <button className="cta-button">Enroll Now</button>
                  <button
                    className="close-button-python"
                    onClick={closePremiumOverlayHandler}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        {activeContent === "chapters" && (
          <div>
            <div id="chapters" className="main-content">
              <h2>Python Programming Course Chapters</h2>
              <ul className="chapter-list">
                {chaptersData.map((chapter, index) => (
                  <li key={index} className="chapter-item">
                    <div
                      className="chapter-header"
                      onClick={() => toggleChapter(index)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>{chapter.title}</span>
                      <span className="chapter-toggle">
                        {activeChapter === index ? "▼" : "▲"}
                      </span>
                    </div>
                    {activeChapter === index && (
                      <div className="chapter-content">
                        <ul>
                          {chapter.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeContent === "case-study" && (
          <div>
            <div id="case-study" className="main-content">
              <div className="card-title">
                Click on below topic to Start the Case Study:
              </div>
              <div className="contentone-wrapperrr">
                <div className="content-header">
                  {/* Case Study Topics */}
                  <span className="close-icon" onClick={redirectToPage}>
                    <i className="fas fa-times"></i>
                  </span>
                </div>
                <div className="grid-layout">
                  <div className="item-card" onClick={scrollToSection}>
                    <div className="card-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <div className="card-title">Data and Expression</div>
                  </div>
                  <div className="item-card" onClick={scrollToSection}>
                    <div className="card-icon">
                      <i className="fas fa-project-diagram"></i>
                    </div>
                    <div className="card-title">Control Structure</div>
                  </div>
                  <div className="item-card" onClick={scrollToList}>
                    <div className="card-icon">
                      <i className="fas fa-stream"></i>
                    </div>
                    <div className="card-title">List</div>
                  </div>
                  <div className="item-card" onClick={scrollToFunctions}>
                    <div className="card-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <div className="card-title">Functions</div>
                  </div>
                  <div className="item-card" onClick={scrollToObjects}>
                    <div className="card-icon">
                      <i className="fas fa-cube"></i>
                    </div>
                    <div className="card-title">Objects</div>
                  </div>
                  <div className="item-card" onClick={scrollToModularDesign}>
                    <div className="card-icon">
                      <i className="fas fa-th-large"></i>
                    </div>
                    <div className="card-title">Modular Design</div>
                  </div>
                  <div className="item-card" onClick={scrollToTextFiles}>
                    <div className="card-icon">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <div className="card-title">Text Files</div>
                  </div>
                  <div className="item-card" onClick={scrollToDictionaries}>
                    <div className="card-icon">
                      <i className="fas fa-key"></i>
                    </div>
                    <div className="card-title">Dictionaries</div>
                  </div>
                  <div className="item-card" onClick={scrollToOOP}>
                    <div className="card-icon">
                      <i className="fas fa-object-group"></i>
                    </div>
                    <div className="card-title">OOP</div>
                  </div>
                  <div className="item-card" onClick={scrollToRecursion}>
                    <div className="card-icon">
                      <i className="fas fa-sync-alt"></i>
                    </div>
                    <div className="card-title">Recursion</div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <h2 style={{ paddingLeft: "2rem" }} id="data-expression">
                Data and Expression
              </h2>
              <br />
              <ul>
                {caseStudies.map((caseStudy, index) => (
                  <li className="chapter-item" key={index}>
                    <div className="chapter-header">
                      <span>{caseStudy.title}</span>
                      <span
                        className="chapter-toggle"
                        onClick={() => toggleSolution(index)}
                        style={{ cursor: "pointer" }}
                      >
                        {showSolution[index] ? "▼" : "▲"}
                      </span>
                    </div>
                    <div className="chapter-content">
                      <p>
                        <strong>Objective:</strong> {caseStudy.objective}
                      </p>
                      <p>
                        <strong>Scenario:</strong> {caseStudy.scenario}
                      </p>
                      <p>
                        <strong>Key Concepts:</strong> {caseStudy.keyConcepts}
                      </p>
                      <button
                        onClick={() => toggleSolution(index)}
                        className="solution-btn"
                      >
                        {showSolution[index]
                          ? "Hide Solution"
                          : "Show Solution"}
                      </button>
                      {showSolution[index] && (
                        <pre className="solution">{caseStudy.solution}</pre>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeContent === "faqs" && (
          <div>
            <div id="faqs" className="main-content">
              <h2 style={{marginBottom:"20px"}}>Frequently Asked Questions</h2>
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question">{faq.question}
                  <span
                    className="chapter-toggle-faq"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#34495e",
                      padding: "1rem",
                      color: "#fff",
                    }}
                  >
                    {showToggle[index] ? "▼" : "▲"}
                  </span>
                  </div>

                  
                  {showToggle[index] && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SystemDesign;
