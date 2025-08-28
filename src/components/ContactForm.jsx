import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [error, setError] = useState("");

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name || !form.email || !form.phone || !form.message) {
      return "All fields are required.";
    }
    if (!nameRegex.test(form.name)) {
      return "Name can only contain letters and spaces.";
    }
    if (!phoneRegex.test(form.phone)) {
      return "Phone number must be 10–15 digits.";
    }
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    alert("Message submitted!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-sky-400 mb-10">Contact Us</h2>

        <div className="bg-gray-800/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-lg mx-auto border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-600 p-3 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-600 p-3 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full border border-gray-600 p-3 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full border border-gray-600 p-3 rounded-lg bg-gray-900/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
