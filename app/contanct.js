import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your Google Sheets Web App URL from the "Deploy as web app" step
      const response = await fetch("https://kingsbakerbackend-production.up.railway.app/save", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you! Your message has been submitted successfully."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
      } else {
        setSubmitMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-emerald-500 relative overflow-hidden">
      {/* Form header with farm theme */}
      <div className="absolute -top-6 -right-6 w-32 h-32">
        <div className="relative w-full h-full">
          <div className="absolute top-6 right-6 bg-yellow-400 text-white w-20 h-20 rounded-full flex items-center justify-center transform rotate-12 border-4 border-white shadow-lg">
            <span className="text-4xl">🧑‍🌾</span>
          </div>
        </div>
      </div>

      <div className="bg -mx-8 -mt-8 mb-8 py-4 px-8 rounded-t-3xl">
        <h3 className="text-2xl font-bold text-emerald-800">
          Plant Your Message Here!
        </h3>
        <p className="text-emerald-500">We'll grow your ideas into solutions</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-base font-bold text-emerald-700"
          >
            Your Name 🌾
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
            required
            placeholder="John Deere"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-bold text-emerald-700"
          >
            Your Email 📧
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
            required
            placeholder="farmer@example.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block mb-2 text-base font-bold text-emerald-700"
          >
            Subject 🌿
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
            required
            placeholder="What's growing on?"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-base font-bold text-emerald-700"
          >
            Your Message 💬
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
            required
            placeholder="Tell us how we can help your farm thrive..."
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-base font-bold text-emerald-700"
          >
            Phone Number 📱 (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-emerald-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50"
            placeholder="+91 98765 43210"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 text-lg font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group disabled:opacity-70"
        >
          <span className="relative z-10">
            {isSubmitting ? "Submitting..." : "Send & Grow With Us! 🌱"}
          </span>
          <div className="absolute bottom-0 left-0 w-full h-0 bg-emerald-500 transition-all duration-300 group-hover:h-full z-0"></div>
        </button>

        {submitMessage && (
          <div
            className={`mt-4 p-3 rounded text-center ${
              submitMessage.includes("Thank you")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
