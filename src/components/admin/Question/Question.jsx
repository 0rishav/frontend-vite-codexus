import { useState } from "react";
import "./question.css";

const Question = () => {
  const [activeSection, setActiveSection] = useState("categorySection");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <div>
      <div className="question-container">
        <div className="grid-question">
          {/* Tabs */}
          <div className="tabs">
            <div
              style={{
                backgroundColor:
                  activeSection === "categorySection" ? "#007bff" : "#f0f0f0",
                color: activeSection === "categorySection" ? "#fff" : "#000",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => showSection("categorySection")}
            >
              <i className="fas fa-list"></i> Category
            </div>
            <div
              style={{
                backgroundColor:
                  activeSection === "questionSection" ? "#007bff" : "#f0f0f0",
                color: activeSection === "questionSection" ? "#fff" : "#000",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => showSection("questionSection")}
            >
              <i className="fas fa-question-circle"></i> Questions
            </div>
            <div
              style={{
                backgroundColor:
                  activeSection === "answersSection" ? "#007bff" : "#f0f0f0",
                color: activeSection === "answersSection" ? "#fff" : "#000",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => showSection("answersSection")}
            >
              <i className="fas fa-check"></i> Answers
            </div>
          </div>

          {/* Category Section */}
          <div
            style={{
              display: activeSection === "categorySection" ? "block" : "none",
            }}
          >
            <h1>Create Category Section...</h1>
            <div className="form-group-cat">
              <label htmlFor="categoryName">Category Name:</label>
              <input
                type="text"
                id="categoryName"
                name="categoryName"
                required
                placeholder="Enter category name"
              />
              <button>Create</button>
            </div>
          </div>

          {/* Question Section */}
          <div
            style={{
              display: activeSection === "questionSection" ? "block" : "none",
            }}
          >
            <h1>Question Section...</h1>
            <form className="create-question-form">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select id="category" name="category" required>
                  <option value="">Select a category</option>
                  <option value="arrays">Arrays</option>
                  <option value="linked-lists">Linked Lists</option>
                  <option value="trees">Trees</option>
                  <option value="graphs">Graphs</option>
                  <option value="hashing">Hashing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="questionTitle">Question Title:</label>
                <input
                  type="text"
                  id="questionTitle"
                  name="questionTitle"
                  required
                  placeholder="Enter question title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="questionDescription">
                  Question Description:
                </label>
                <textarea
                  id="questionDescription"
                  name="questionDescription"
                  required
                  rows="4"
                  placeholder="Enter question description"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="difficulty">Difficulty Level:</label>
                <input
                  type="text"
                  id="difficulty"
                  name="difficulty"
                  required
                  placeholder="Enter difficulty level (e.g., Easy, Medium, Hard)"
                />
              </div>

              <button type="submit">Create Question</button>
            </form>
          </div>

          {/* Answer Section */}
          <div
            style={{
              display: activeSection === "answersSection" ? "block" : "none",
            }}
          >
            <h1>Answers Section...</h1>
            <form className="answer-form">
              <div className="form-group">
                <label htmlFor="questionTitle">Question Title:</label>
                <input
                  type="text"
                  id="questionTitle"
                  name="questionTitle"
                  required
                  value="Question Title"
                  disabled
                />
              </div>

              <div className="form-group">
                <label htmlFor="yourAnswer">Your Answer:</label>
                <textarea
                  id="yourAnswer"
                  name="yourAnswer"
                  required
                  rows="5"
                  placeholder="Enter your answer here"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="codeSubmission">Code Submission:</label>
                <textarea
                  id="codeSubmission"
                  name="codeSubmission"
                  required
                  rows="5"
                  placeholder="Enter your code here"
                ></textarea>
                <select id="languageSelect" name="languageSelect">
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="c++">C++</option>
                  <option value="c#">C#</option>
                  <option value="ruby">Ruby</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="testCases">Test Cases:</label>
                <textarea
                  id="testCases"
                  name="testCases"
                  required
                  rows="4"
                  placeholder="Enter test cases here, one per line"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="explanation">Explanation (optional):</label>
                <textarea
                  id="explanation"
                  name="explanation"
                  rows="3"
                  placeholder="Enter your explanation here (optional)"
                ></textarea>
              </div>

              <button type="submit">Submit Answer</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
