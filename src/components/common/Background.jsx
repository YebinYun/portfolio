import React from 'react';

const Background = ({ mainclassName, divclassName, children }) => {
  return (
    <main
      className={`relative w-full h-screen flex justify-center ${mainclassName}`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 121, 121, 0.68) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
      }}>
      <div
        className={`flex flex-col items-center justify-center ${divclassName}`}>
        {children}
      </div>
    </main>
  );
};

export default Background;