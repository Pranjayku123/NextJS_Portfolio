"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate API logic here
  };

  return (
    <div className="w-[600px] mx-auto p-6 shadow-md rounded-2xl bg-[var(----bodyBg)]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--bodyColor)]">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border-b focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your Name"
            required
            style={{ borderBottomColor: "var(--bgColor)" }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--bodyColor)]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border-b focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="your@email.com"
            required
            style={{ borderBottomColor: "var(--bgColor)" }}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[var(--bodyColor)]">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full mt-1 px-4 py-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your message..."
            required
            style={{ borderColor: "var(--bgColor)" }}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-2 mt-4 rounded-2xl bg-[var(--colorPrimary)] text-black font-bold shadow hover:opacity-80 hover:cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
