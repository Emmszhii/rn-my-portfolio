import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: "general",
    contactMethods: [],
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      contactMethods: checked
        ? [...prev.contactMethods, value]
        : prev.contactMethods.filter((m) => m !== value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="page">
        <h1>Thank You!</h1>
        <p>
          Thanks for reaching out, {formData.name}! I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label>Inquiry Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="inquiryType"
                value="general"
                checked={formData.inquiryType === "general"}
                onChange={handleChange}
              />
              General
            </label>
            <label>
              <input
                type="radio"
                name="inquiryType"
                value="feedback"
                checked={formData.inquiryType === "feedback"}
                onChange={handleChange}
              />
              Feedback
            </label>
            <label>
              <input
                type="radio"
                name="inquiryType"
                value="job"
                checked={formData.inquiryType === "job"}
                onChange={handleChange}
              />
              Job Opportunity
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Contact Method</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="email"
                checked={formData.contactMethods.includes("email")}
                onChange={handleCheckbox}
              />
              Email
            </label>
            <label>
              <input
                type="checkbox"
                value="phone"
                checked={formData.contactMethods.includes("phone")}
                onChange={handleCheckbox}
              />
              Phone
            </label>
          </div>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
