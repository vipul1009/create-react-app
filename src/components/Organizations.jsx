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
<div className="flex gap-4 items-center justify-center flex-wrap mb-8">
        <div className="flex flex-wrap justify-start ml-4 items-center gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-[20vw] md:w-[30vw] object-fit"
            />
          ))}
        </div>
        <div className="text-center w-[80%] md:w-[40%] mt-8">
          <p className="text-gray-[min(1.5vw,12px)] text-lg">
            Acme Intralog Fzco is one of the leading material handling & warehouse automation solution providers in the Middle East, developing tailor-made approaches for complex needs. Founded in 1975 with headquarter in Dubai, we optimise intralogistics for customers across multiple industries, including retail, e-commerce, FMCG, food & beverage, pharma.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
