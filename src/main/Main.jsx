import React from "react";

const Main = ({ section }) => {
  return (
    <main className="relative h-[80vh] top-10">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[80vw] h-[70vh] overflow-y-auto flex items-center justify-center border border-red-200 shadow-lg rounded-xl">
          {section}
        </div>
      </div>
    </main>
  );
};

export default Main;
