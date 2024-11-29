import { Link } from "react-router-dom";
import "./codexuslab.css";
import { useEffect, useState } from "react";
import { questionData } from "../../utils/data";

const Codexuslab = () => {
  const [expanded, setExpanded] = useState(false);
  const [tagsModalOpen, setTagsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysMatrix, setDaysMatrix] = useState([]);

  
  const mainCategories = [
    { name: "Array", count: 1704 },
    { name: "String", count: 713 },
    { name: "Hash Table", count: 620 },
    { name: "Dynamic Programming", count: 517 },
    { name: "Math", count: 509 },
    { name: "Sorting", count: 409 },
    { name: "Greedy", count: 373 },
  ];

  const extraCategories = [
    { name: "Depth-First Search", count: 291 },
    { name: "Database", count: 278 },
    { name: "Binary Search", count: 271 },
    { name: "Breadth-First Search", count: 230 },
    { name: "Tree", count: 230 },
    { name: "Matrix", count: 227 },
    { name: "Bit Manipulation", count: 219 },
    { name: "Two Pointers", count: 203 },
    { name: "Binary Tree", count: 175 },
    { name: "Heap (Priority Queue)", count: 170 },
    { name: "Prefix Sum", count: 166 },
    { name: "Stack", count: 158 },
    { name: "Simulation", count: 154 },
    { name: "Graph", count: 143 },
    { name: "Counting", count: 136 },
    { name: "Design", count: 123 },
    { name: "Sliding Window", count: 122 },
    { name: "Backtracking", count: 102 },
    { name: "Enumeration", count: 88 },
    { name: "Union Find", count: 83 },
    { name: "Linked List", count: 77 },
    { name: "Ordered Set", count: 61 },
    { name: "Monotonic Stack", count: 61 },
    { name: "Number Theory", count: 56 },
    { name: "Trie", count: 53 },
    { name: "Segment Tree", count: 48 },
  ];

  

  const handleToggleExpand = () => {
    setExpanded((prevState) => {
      return !prevState;
    });
  };

  const openTagsModal = () => {
    console.log("clicked");
    setTagsModalOpen(true);
  };
  const closeTagsModal = () => setTagsModalOpen(false);

  const filterQuestions = () => {
    console.log("Filtering questions based on difficulty");
  };

  const searchQuestions = () => {
    console.log("Searching questions");
  };

  const filterTags = () => {
    console.log("Applying tag filters");
    closeTagsModal();
  };

  useEffect(() => {
    generateCalendar();
  }, [currentDate]);

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const matrix = [];
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row.push(null);
        } else if (date > daysInMonth) {
          row.push(null);
        } else {
          row.push(date);
          date++;
        }
      }
      matrix.push(row);
    }
    setDaysMatrix(matrix);
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
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
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/codexuslabs">
            <i className="fas fa-home icon"></i> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/system-design">
            <i className="fab fa-python icon"></i> Python Programming
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/machine-learning-course">
            <i className="fas fa-brain icon"></i> Machine Learning
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ai">
            <i className="fas fa-project-diagram icon"></i> Artificial
            Intelligence
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/data-struct">
            <i className="fas fa-cogs icon"></i> DSA
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/30-days-js">
            <i className="fab fa-js icon"></i> JS
          </Link>
        </li>
      </ul>
      <br />
      {/* <div className="toggle-theme-btn" id="toggle-theme">
            <i className="fas fa-moon"></i>
        </div> */}
      <div className="container">
        <div className="row">
          {/* Big Boxes Section */}
          <div className="col-lg-4 mb-4">
            <div className="big-box">
              <Link
                to="/system-design"
                className="no-underline"
                style={{ textDecoration: "none", border: "none" }}
              >
                <img
                  src="/image/1.png"
                  alt="System Design"
                  style={{ border: "none", display: "block" }}
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="big-box">
              <a href="/machine_learning-course" className="no-underline">
                <img src="/image/3.png" alt="Machine Learning" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="big-box">
              <a href="/ai" className="no-underline">
                <img src="/image/2.png" alt="AI" />
              </a>
            </div>
          </div>

          {/* Interview Crash Courses */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <i className="fas fa-cogs fa-2x me-3 text-primary"></i>
                <a
                  href="sys_des_for_int.html"
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <h5 className="mb-0">System Design for Interviews</h5>
                    <p className="mb-0">Start Learning</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <i className="fas fa-database fa-2x me-3 text-success"></i>
                <a href="data_strut.html" style={{ textDecoration: "none" }}>
                  <div>
                    <h5 className="mb-0">Data Structures and Algorithms</h5>
                    <p className="mb-0">Start Learning</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card p-3">
              <div className="d-flex align-items-center">
                <i className="fas fa-question-circle fa-2x me-3 text-info"></i>
                <a href="top_inter.html" style={{ textDecoration: "none" }}>
                  <div>
                    <h5 className="mb-0">Top Interview Questions</h5>
                    <p className="mb-0">Get Started</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* More cards */}
          {/* Add other cards here similarly */}

          {/* Study Plan Section */}
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-list-ul fa-2x me-3 text-warning"></i>
                    <a
                      href="interview_150.html"
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <h5 className="mb-0">Top Interview 50</h5>
                        <p className="mb-0">Must-do List for Interview Prep</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-graduation-cap fa-2x me-3 text-danger"></i>
                    <a href="GG_75.html" style={{ textDecoration: "none" }}>
                      <div>
                        <h5 className="mb-0">Codexus 60</h5>
                        <p className="mb-0">Ace Coding Interview with 60 Qs</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-database fa-2x me-3 text-info"></i>
                    <a href="sql_50.html" style={{ textDecoration: "none" }}>
                      <div>
                        <h5 className="mb-0">SQL 50</h5>
                        <p className="mb-0">Crack SQL Interview in 50 Qs</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <i className="fab fa-js-square fa-2x me-3 text-warning"></i>
                    <a
                      href="30_days_js.html"
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <h5 className="mb-0">30 Days of JavaScript</h5>
                        <p className="mb-0">Learn JS Basics with 30 Qs</p>
                      </div>
                    </a>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="col-lg-4">
            <div className="card p-3">
              <div className="calendar">
                <div className="calendar-header" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <button className="calendar-nav-btn" onClick={handlePrevMonth}><i className="fas fa-chevron-left"></i></button>
                  <h6 id="calendar-month-year">
                    {monthName} {year}
                  </h6>
                  <button className="calendar-nav-btn" onClick={handleNextMonth}><i className="fas fa-chevron-right"></i></button>
                </div>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th>S</th>
                      <th>M</th>
                      <th>T</th>
                      <th>W</th>
                      <th>T</th>
                      <th>F</th>
                      <th>S</th>
                    </tr>
                  </thead>
                  <tbody>
                    {daysMatrix.map((week, weekIndex) => (
                      <tr key={weekIndex}>
                        {week.map((day, dayIndex) => (
                          <td
                            key={dayIndex}
                            className={
                              day === currentDate.getDate() &&
                              currentDate.getMonth() ===
                                new Date().getMonth() &&
                              currentDate.getFullYear() ===
                                new Date().getFullYear()
                                ? "current-day"
                                : ""
                            }
                          >
                            {day || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* category section  */}
          <div className="categories-questions">
            {mainCategories.map((category, index) => (
              <span key={index} className="category-question">
                {category.name} <span className="count">{category.count}</span>
              </span>
            ))}
            <span
              id="expand"
              className="expand-collapse-question"
              onClick={handleToggleExpand}
            >
              {expanded ? "▼" : "▲"}
            </span>
          </div>

          {expanded && (
            <div id="extra-categories-question" className="extra-categories-question">
              {extraCategories.map((category, index) => (
                <span key={index} className="category-question">
                  {category.name}{" "}
                  <span className="count">{category.count}</span>
                </span>
              ))}
            </div>
          )}
          {/* Filter Section */}
          <div className="tab-content">
            <div className="tab-pane fade show active" id="leetcode-filter">
              <div className="container">
                <div className="filter-container">
                  <div className="label-select-wrapper">
                    <br />
                    <label htmlFor="lists-filter">Lists:</label>
                    <select id="lists-filter">
                      <option value="all">All</option>
                      <option value="favorite">Favorite</option>
                      <option value="recent">Recent</option>
                    </select>
                  </div>
                  <div className="label-select-wrapper">
                    <br />
                    <label htmlFor="difficulty-filter">Difficulty:</label>
                    <select id="difficulty-filter" onChange={filterQuestions}>
                      <option value="all">All</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <div className="label-select-wrapper">
                    <br />
                    <label htmlFor="status-filter">Status:</label>
                    <select id="status-filter">
                      <option value="all">All</option>
                      <option value="solved">Solved</option>
                      <option value="unsolved">Unsolved</option>
                    </select>
                  </div>
                  <div className="label-select-wrapper">
                    <br />
                    <label htmlFor="tags-button">Tags:</label>
                    <button id="tags-button" onClick={openTagsModal}>
                      Select Tags
                    </button>
                  </div>
                  <div
                    className="label-select-wrapper"
                    style={{ marginTop: "12px" }}
                  >
                    <br />
                    <input
                      type="text"
                      id="search-bar"
                      placeholder="Search questions..."
                    />
                  </div>
                  <div className="input-question-btn">
                    <br />
                    <button onClick={searchQuestions}>Search</button>
                  </div>
                </div>
                {/* Question table */}
                <div className="advanced-question-table">
                  <table className="questions-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Acceptance</th>
                        <th>Difficulty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {questionData.map((question, index) => (
                        <tr key={index}>
                          <td>
                            <Link
                              to={`/question-page/${index}`}
                            >
                              {question.title}
                            </Link>
                          </td>
                          <td>{question.acceptance}</td>
                          <td>
                            {" "}
                            <button
                              className={`difficulty ${question.difficulty.toLowerCase()}`}
                            >
                              {question.difficulty}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {tagsModalOpen && (
                <div className="tag-modal">
                  <div className="tag-modal-content">
                    <div className="tag-modal-header">
                      <h2>Select Tags</h2>
                      <span
                        className="tag-modal-close"
                        onClick={closeTagsModal}
                      >
                        &times;
                      </span>
                    </div>
                    <div className="tag-modal-tags-container">
                      {[
                        "Array",
                        "String",
                        "Hash Table",
                        "Dynamic Programming",
                        "Math",
                        "Sorting",
                        "Greedy",
                        "Depth-First Search",
                        "Database",
                        "Binary Search",
                        "Tree",
                        "Breadth-First Search",
                        "Matrix",
                      ].map((tag) => (
                        <div key={tag} className="tag-item">
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="tag-modal-footer">
                      <button onClick={filterTags}>Apply</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Codexuslab;
