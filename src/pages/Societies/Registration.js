import { useEffect, useState } from "react";
import Styles from "../../styles/pages/Society/Registration.module.css";

const api = "http://localhost:5050";

export default function Registration() {
  const [formQuestions, setFormQuestions] = useState([]);
  const [formAnswers, setFormAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchFormQuestions = async () => {
      try {
        const response = await fetch(`${api}/api/societies/yukriyf`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch form questions");
        }
        const data = await response.json();
        const questions = data.society.formQuestions;

        setFormQuestions(questions);
        setLoading(false);
        console.log(response)
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    

    fetchFormQuestions();
  }, []);
  
  const handleInputChange = (questionText, value) => {
    setFormAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionText]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}/api/societies/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: formAnswers }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      setSuccessMessage("Form submitted successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div className={Styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={Styles.error}>Error: {error}</div>;
  }

  return (
    <div className={Styles.parentDiv}>
      <h1 className={Styles.heading}>Registration</h1>
      {successMessage && <div className={Styles.success}>{successMessage}</div>}
      <form onSubmit={handleSubmit} className={Styles.form}>
        {formQuestions.map((question, index) => (
          <div key={index} className={question.type === "radio" || question.type === "checkbox" ? Styles.radio : Styles.group}>
            <label className={Styles.label}>{question.questionText}</label>
            {question.type === "text"  ? (
              <input
                type={question.type}
                className={Styles.input}
                name={question.questionText}
                required={question.required}
                onChange={(e) => handleInputChange(question.questionText, e.target.value)}
              />
            ) : question.type === "textarea" ? (
              <textarea
                className={Styles.input}
                name={question.questionText}
                required={question.required}
                onChange={(e) => handleInputChange(question.questionText, e.target.value)}
              />
            ) : question.type === "radio" ? (
              question.options.map((option, optIndex) => (
                <div key={optIndex} className={Styles.radioOpt}>
                  <input
                    type="radio"
                    className={Styles.radioInput}
                    name={question.questionText}
                    value={option}
                    required={question.required}
                    onChange={(e) => handleInputChange(question.questionText, e.target.value)}
                  />
                  <label>{option}</label>
                </div>
              ))
            ) : question.type === "checkbox" ? (
              question.options.map((option, optIndex) => (
                <div key={optIndex} className={Styles.radioOpt}>
                  <input
                    type="checkbox"
                    className={Styles.radioInput}
                    name={`${question.questionText}_${option}`}
                    value={option}
                    onChange={(e) => {
                      const values = formAnswers[question.questionText] || [];
                      const updatedValues = e.target.checked
                        ? [...values, option]
                        : values.filter((val) => val !== option);
                      handleInputChange(question.questionText, updatedValues);
                    }}
                  />
                  <label>{option}</label>
                </div>
              ))
            ) : null}
          </div>
        ))}
        <div className={Styles.btnDiv}>
          <button type="submit" className={Styles.btn}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
