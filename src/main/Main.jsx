import React from "react";

const Main = ({ section, sections }) => {
  const selectSection = sections.find((select) => select.name === section);
  console.log(section);
  console.log(sections);
  console.log(selectSection);

  return (
    <main className="relative h-[80vh] top-10">
      <div className="w-full h-full flex items-center justify-center">
        <div className="overflow-y-auto flex items-center justify-center w-[80%] h-[90%] border border-red-200 shadow-lg rounded-xl">
          {selectSection ? selectSection.component : section}
        </div>
      </div>
    </main>
  );
};

export default Main;
