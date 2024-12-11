import React from "react";
import Button from "./ui/Button";

const libraries = [
  "Mapbox",
  "AntDesign",
  "MaterialUI",
  "ShadcnUI",
  "RadixUI",
  "ChakraUI",
  "JQuery",
  "Bootstrap",
  "State Management",
  "Redux",
  "API Integration",
  "Axios",
  "Dinamic Data Fetching",
  "Search Engine Optimization",
  "Clean Code",
  "Responsive Design",
  "Cross Browser Testing",
  "Debugging",
];

const Library = () => {
  return (
    <section id="library">
      <div className="justify-center w-full text-center">
        <h2 className="text-xl font-bold mb-4">Familiar With</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {libraries.map((library) => (
            <Button key={library}>{library}</Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Library;
