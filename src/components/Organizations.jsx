import React from "react";

export default function ClientLogos() {
  const logos = [
    { src: "/AcmeLogo.png", alt: "E.ON" },
    // { src: "/logos/npower.png", alt: "npower" },
    // { src: "/logos/deutsche-telekom.png", alt: "Deutsche Telekom" },
    // { src: "/logos/subsea7.png", alt: "Subsea 7" },
  ];

  return (
    <section className="bg-[#f3f4f6] py-12 px-4">
      <div className="max-w-[80vw] mx-auto ">
        <h2 className="text-[max(3vw,30px)] font-bold ml-10vw text-gray-800 mb-10">
          Global Organisations{" "}
          <span className="text-sky-400 font-semibold">We Serve</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-[10vw] md:w-[15vw] object-fit"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
