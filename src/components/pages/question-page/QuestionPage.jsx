import { useState } from "react";
import "./question-page.css"
import { useParams } from "react-router-dom";
import { questionData } from "../../utils/data";

const QuestionPage = () => {
    const [output, setOutput] = useState('');
    const { id } = useParams();
  const question = questionData[id];

  const handleRunCode = () => {
    setOutput('Output: [2, 4, 3, 1]');
  }
  if (!question) {
    return <div>Question not found!</div>; 
  }
  return (
    <div>
        <div className="container">
      <div className="row">
        {/* Description Section */}
        <div className="col-md-6 description-section">
          <h2 className="animate__animated animate__fadeInLeft">
            <i className="fas fa-file-alt"></i> {question?.title}
          </h2>
          <p>
            {question?.description}
          </p>
          <h5 className="animate__animated animate__fadeInLeft">
            <i className="fas fa-lightbulb"></i> Example 1:
          </h5>
          <pre>
            <code>Input: nums = [3,1,2,4]</code>
            <code>Output: [2,4,3,1]</code>
          </pre>
          <h5 className="animate__animated animate__fadeInLeft">
            <i className="fas fa-lightbulb"></i> Example 2:
          </h5>
          <pre>
            <code>Input: nums = [0]</code>
            <code>Output: [0]</code>
          </pre>
          <h5 className="animate__animated animate__fadeInLeft">
            <i className="fas fa-check-circle"></i> Constraints:
          </h5>
          <ul>
          <li>1 &lt;= nums.length &lt;= 5000</li>
          <li>0 &lt;= nums[i] &lt;= 5000</li>
          </ul>
        </div>

        {/* Code Section */}
        <div className="col-md-6 code-section">
          <h5 className="animate__animated animate__fadeInRight">
            <i className="fas fa-code"></i> Code
          </h5>
          <div className="editor-container">
            {/* Textarea for Python Code */}
            <textarea
              id="editor"
              className="form-control"
              rows="10"
              defaultValue="# Your Python code here"
            />
            <button
              id="run-btn"
              className="btn btn-primary mt-3"
              onClick={handleRunCode}
            >
              Run Code
            </button>
          </div>
          <div className="result-container">
            <h4>Output:</h4>
            <div
              id="output"
              className="border border-gray-300 p-4 rounded-md colorful-output"
            >
              {output}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default QuestionPage