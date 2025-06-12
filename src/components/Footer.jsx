import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Aventis Consultancy Services</h3>
          <p className="text-sm">
            Address - OFFICE NO-1039,10TH FLOOR,GALAXY BLUE SAPPHIRE PLAZA SECTOR-04,GREATER NOIDA WEST,G.B.NAGAR,U.P
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>SAP Consulting</li>
            <li>SAP Support</li>
            <li>SAP Implementation</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            {/* <li>Careers</li> */}
            <li><a href="#contact">Contact</a></li>
            {/* <li>Privacy Policy</li> */}
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Connect with Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-sky-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="mailto:support@aventis-consultancy.com" className="hover:text-sky-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Aventis Consultancy Services. All rights reserved.
      </div>
    </footer>
  );
}
