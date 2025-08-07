import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

const PostFormPage = () => {
  const { formid } = useParams();
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/forms/${formid}`)
      .then(res => res.json())
      .then(data => {
        setForm(data);
        setLoading(false);
      });
  }, [formid]);

  if (loading) return <div>Loading...</div>;
  if (!form) return <div>Form not found.</div>;

  return (
    <div>
      <h2>{form.title} - Registration Form</h2>
      {/* Render your form here */}
    </div>
  );
};

export default PostFormPage;