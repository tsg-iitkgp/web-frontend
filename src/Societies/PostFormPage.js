import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/api";

const inputTypes = {
  text: (props) => <input type="text" {...props} />,
  email: (props) => <input type="email" {...props} />,
  phone: (props) => <input type="tel" {...props} />,
  textarea: (props) => <textarea {...props} />,
  date: (props) => <input type="date" {...props} />,
  checkbox: ({ options = [], name, value = [], onChange, required }) => (
    <div>
      {options.map((opt, idx) => (
        <label key={idx} style={{ marginRight: 16 }}>
          <input
            type="checkbox"
            name={name}
            value={opt}
            checked={value.includes(opt)}
            onChange={onChange}
            required={required && value.length === 0}
          />{" "}
          {opt}
        </label>
      ))}
    </div>
  ),
  radio: ({ options = [], name, value, onChange, required }) => (
    <div>
      {options.map((opt, idx) => (
        <label key={idx} style={{ marginRight: 16 }}>
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={onChange}
            required={required}
          />{" "}
          {opt}
        </label>
      ))}
    </div>
  ),
};

const PostFormPage = () => {
  const { postid } = useParams();
  const [post, setPost] = useState(null);
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/posts/${postid}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        if (data.form_structure) {
          try {
            const parsed = JSON.parse(data.form_structure);
            setFormFields(parsed);
            // Initialize formData with empty values
            const initial = {};
            parsed.forEach((f) => {
              if (f.input_type === "checkbox") initial[f.label] = [];
              else initial[f.label] = "";
            });
            setFormData(initial);
          } catch {
            setFormFields([]);
          }
        }
        setLoading(false);
      });
  }, [postid]);

  const handleChange = (label, input_type) => (e) => {
    if (input_type === "checkbox") {
      const valueArr = formData[label] || [];
      const value = e.target.value;
      if (e.target.checked) {
        setFormData({ ...formData, [label]: [...valueArr, value] });
      } else {
        setFormData({ ...formData, [label]: valueArr.filter((v) => v !== value) });
      }
    } else if (input_type === "radio") {
      setFormData({ ...formData, [label]: e.target.value });
    } else {
      setFormData({ ...formData, [label]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to your backend here
    setSubmitted(true);
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found.</div>;
  if (!post.form_structure) return <div>No form available for this post.</div>;
  if (submitted) return <div style={{ color: "#16a34a", fontWeight: 700, fontSize: "1.3rem", margin: "2rem" }}>Form submitted successfully!</div>;

  return (
    <div style={{ maxWidth: 540, margin: "2.5rem auto", background: "#232323", borderRadius: 16, padding: "2.5rem 2rem", boxShadow: "0 2px 16px #0004" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <img src={post.society_logo} alt={post.society_name} style={{ width: 48, height: 48, borderRadius: "50%" }} />
        <div>
          <div style={{ fontWeight: 900, fontSize: "1.3rem", color: "#fbbf24" }}>{post.society_name}</div>
          <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff" }}>{post.title}</div>
        </div>
      </div>
      <div style={{ color: "#fbbf24", fontWeight: 600, marginBottom: 12 }}>{post.description}</div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, idx) => (
          <div key={idx} style={{ marginBottom: 22 }}>
            <label style={{ color: "#fff", fontWeight: 600, display: "block", marginBottom: 6 }}>
              {field.label}
              {field.required && <span style={{ color: "#f87171", marginLeft: 4 }}>*</span>}
            </label>
            {inputTypes[field.input_type] &&
              inputTypes[field.input_type]({
                name: field.label,
                value: formData[field.label],
                onChange: handleChange(field.label, field.input_type),
                required: field.required,
                options: field.options,
              })}
          </div>
        ))}
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #fbbf24 60%, #f59e0b 100%)",
            color: "#232323",
            fontWeight: 800,
            fontSize: "1.1rem",
            borderRadius: 10,
            border: "none",
            padding: "0.9rem 2.2rem",
            marginTop: 18,
            cursor: "pointer",
            boxShadow: "0 2px 12px #fbbf2430",
            transition: "background 0.2s, color 0.2s, transform 0.2s",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostFormPage;