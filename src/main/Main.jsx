import React from "react";

const Main = ({ section, sections }) => {
  const currentSection =
    section && sections && sections.length > 0
      ? sections.find((item) => item.id === section)
      : sections;

  return (
    <main className="relative h-[90vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-center w-[90%] h-[85%] border border-red-200 shadow-lg rounded-xl">
          {currentSection ? currentSection.component : sections}
        </div>
      </div>
    </main>
  );
};

export default Main;
