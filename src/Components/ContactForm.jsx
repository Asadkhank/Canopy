import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    help: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-semibold mb-6">Drop us an email</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              How can we help?
            </label>
            <select
              name="help"
              value={formData.help}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">* Please select *</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white font-medium px-6 py-2 rounded mt-4 hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
