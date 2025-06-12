import React from "react";

export default function About() {
  return (
    <div className="bg-[#1f2937] text-white py-[-10] px-4">
      <div className="max-w-[100%] h-[100%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Left Image */}
        <div className="w-full aspect-square md:h-[60%] md:w-[40%] rounded-[50%] overflow-hidden">
          <img
            src="/image.png" // Replace with your image path
            alt="SAP handshake"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h2>
          <p className="text-sm md:text-[0.9rem] text-gray-300 mb-6">
             We founded Aventis with one mission in mind: to empower businesses with seamless, scalable, and sustainable SAP solutions. With a deep understanding of the evolving digital landscape, we provide end-to-end SAP consultancy, implementation, and support that truly transforms how our clients operate.
             <br /><br />

At Aventis, we believe technology should serve business goals—not complicate them. Our dedicated team combines technical excellence with industry insight to ensure every project delivers measurable value.
<br /><br />
Whether you're just starting your SAP journey or looking to optimize existing systems, we're here as your trusted partner.
          </p>
          <a
            href="#contact"
            className="inline-block text-white font-semibold px-6 py-3 rounded-full"
          >
           “We don’t just implement SAP—we implement change.”<br />
           <span className="italic">— Sumit Chaudhary, CEO</span>
          </a>
        </div>
      </div>
    </div>
  );
}
