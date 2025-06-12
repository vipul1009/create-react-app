import React from "react";

export default function Home() {
  return (
    <div id="home" className="bg-[#000002] text-white py-12 px-4 min-h-[80vh]">
      <div className="max-w-[100%] h-[100%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-[60%]">
          <img
            src="/homePage.gif" // Replace with your image path
            alt="SAP handshake"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Partner in SAP Excellence
          </h2>
          <p className="text-lg md:text-[1.2rem] text-gray-300 mb-6">
            With a deep understanding of your organization&apos;s unique requirements, our team of SAP specialists delivers tailored, innovative solutions designed to drive operational efficiency and strategic growth.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Speak to an SAP expert today
          </a>
        </div>
      </div>
    </div>
  );
}
