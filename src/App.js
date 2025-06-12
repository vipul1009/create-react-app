import React from 'react';
import Header from './components/NavBar.jsx';
import InfoCard from './components/Card.jsx';
import AtmcDivider from './components/DiagnolElement.jsx';
import Home from './components/Home.jsx';
import { Contact } from 'lucide-react';
import ContactForm from './components/ContactForm.jsx';
import ClientLogos from './components/Organizations.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
// import AtmcDividerRev from './components/ReversedAtmc.jsx';

function App() {
  return (
    <>
      <Header />
      <Home />
     <AtmcDivider topColor='#000002' otherColor='#f3f4f6'/>
      <div id="services" className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-[max(4vw,30px)] font-bold ml-10vw text-gray-800 mb-10">
      Our Services
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Example Cards */}
      <InfoCard
        title="SAP Consultancy"
        points={[
          "SAP Optimisation",
          "SAP Integration & Implementation Services", 
          "SAP Migration Services",
          "SAP Security",
          "SAP Strategy & Roadmap Planning",
          "SAP System Architecture Consulting",
          "SAP License Optimization"
        ]}
        buttonText="Read More"
        buttonLink="#"
      />

      <InfoCard
        title="SAP Support"
        points={[
          "SAP Application Management",
          "SAP Cloud Management",
          "SAP Data Management",
          "SAP Business Process Management",
          "SAP Upgrade & Patch Management",
          "SAP Performance Tuning & Monitoring",
          "SAP Help Desk & End-User Support"
        ]}
        buttonText="Explore"
        buttonLink="#"
      />

      <InfoCard
        title="SAP Implementation"
        points={[
          "Requirement Analysis & Business Blueprinting",
          "System Design & Configuration",
          "Data Migration & Validation",
          "Integration with Third-party Systems",
          "User Training & Change Management",
          "Quality Assurance & Testing",
          "Go-Live & Post-Implementation Support",
          "Project Management & Governance"
        ]}
        buttonText="Discover"
        buttonLink="#"
      />
    </div>
  </div>
</div>
<AtmcDivider topColor='#f3f4f6' otherColor='#1f2937'/>
<About />
<AtmcDivider topColor='#1f2937' otherColor='#f3f4f6'/>
<ClientLogos />
<AtmcDivider topColor='#f3f4f6' otherColor='#1f2937'/>
<ContactForm />
<Footer />

    </>
  );
}

export default App;
