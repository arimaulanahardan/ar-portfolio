import React from "react";
import { DATA } from "@/data/resume";
import ReferenceCard from "@/components/ReferenceCard";

const References = () => {
  return (
    <section id="reference" className="relative">
      <h2 className="text-xl font-bold mb-4">Reference and Testimonial</h2>
      <div className="relative flex flex-col gap-4">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          ></div>
        </div>

        {/* Reference Cards */}
        <div className="relative z-10 grid sm:grid-cols-3 grid-cols-1 gap-2">
          {DATA.references.map((reference) => (
            <ReferenceCard
              key={reference.name}
              description={reference.description}
              image={reference.image}
              name={reference.name}
              position={reference.position}
              instagram={reference.instagram}
              linkedin={reference.linkedin}
              whatsapp={reference.whatsapp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
