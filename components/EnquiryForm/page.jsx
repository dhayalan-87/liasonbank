"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    company: "",
    person: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
        {/* Grid Fields */}
        <div className="grid md:grid-cols-2 gap-6">
        {/* Company Name */}
        <div>
            <label className="block mb-2 text-lg font-medium">
            Company Name <span className="text-red-500">*</span>
            </label>
            <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full h-12 px-4 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-black"
            />
        </div>

        {/* Contact Person */}
        <div>
            <label className="block mb-2 text-lg font-medium">
            Contact Person <span className="text-red-500">*</span>
            </label>
            <input
            type="text"
            name="person"
            value={form.person}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-xl bg-gray-100 outline-none focus:ring-1 focus:ring-black"
            />
        </div>

        {/* Phone Number */}
        <div>
            <label className="block mb-2 text-lg font-medium">
            Phone Number <span className="text-red-500">*</span>
            </label>

            <PhoneInput
            country={"in"}
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            searchPlaceholder="Search for countries..."
            enableSearch={true}
            inputClass="!w-full py-3 !pl-14 py-3 !rounded-xl !bg-gray-100 !border-none"
            buttonClass="!border-none !bg-gray-100 !rounded-l-xl"
            containerClass="!w-full"
            dropdownClass="!rounded-xl !shadow-lg"
            />
        </div>

        {/* Email */}
        <div>
            <label className="block mb-2 text-lg font-medium">
            Email ID <span className="text-red-500">*</span>
            </label>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded-xl bg-gray-100 outline-none focus:ring-1 focus:ring-black"
            />
        </div>
        </div>

        {/* Message */}
        <div className="mt-6">
        <textarea
            rows="6"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message..."
            className="w-full p-4 rounded-xl bg-gray-100 outline-none resize-none focus:ring-2 focus:ring-black"
        />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
        <button
            type="button"
            className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
        >
            Discard
        </button>

        <button
            type="submit"
            className="px-10 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
            Save
        </button>
        </div>
    </form>
  );
}