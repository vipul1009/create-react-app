import React from 'react';
import Header from './components/NavBar.jsx';
import InfoCard from './components/Card.jsx';
import AtmcDivider from './components/DiagnolElement.jsx';
import Home from './components/Home.jsx';
import { Contact } from 'lucide-react';
import ContactForm from './components/ContactForm.jsx';
import ClientLogos from './components/Organizations.jsx';
// import AtmcDividerRev from './components/ReversedAtmc.jsx';

function App() {
  return (
    <>
      <Header />
      <Home />
     <AtmcDivider topColor='#000002' otherColor='#f3f4f6'/>
      <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
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
          "SAP Security"
        ]}
        buttonText="Read More"
        buttonLink="#"
      />

      <InfoCard
        title="Enterprise Automation"
        points={[
          "UiPath RPA & Test Automation",
          "SAP Build Apps & Workzone",
          "Automation Fast Start Packs"
        ]}
        buttonText="Explore"
        buttonLink="#"
      />

      <InfoCard
        title="Data & Analytics"
        points={[
          "SAP Analytics Cloud",
          "SAP Data Governance",
          "SAP GRC",
          "Custom Dashboards"
        ]}
        buttonText="Discover"
        buttonLink="#"
      />
    </div>
  </div>
</div>
<AtmcDivider topColor='#f3f4f6' otherColor='#1f2937'/>
<ContactForm />
<AtmcDivider topColor='#1f2937' otherColor='#f3f4f6'/>
<ClientLogos />
    </>
  );
}

export default App;
