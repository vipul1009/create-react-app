import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Logo */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/logo.png" // replace with your logo path
            alt="Logo"
            className="w-[30vw] h-auto object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
            Get in touch with SAP experts!
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">First name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white border-b-2 border-white p-2"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Last name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white border-b-2 border-white p-2"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm mb-1">
                  Email<span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-700 text-white border-b-2 border-white p-2"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm mb-1">Phone number</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 text-white border-b-2 border-white p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">
                Job title<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white border-b-2 border-white p-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Message<span className="text-red-400">*</span>
              </label>
              <textarea
                rows="4"
                className="w-full bg-gray-700 text-white border-b-2 border-white p-2"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-400 text-white font-semibold px-6 py-2 rounded hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
