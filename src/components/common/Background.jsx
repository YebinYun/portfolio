import React from 'react';

const Background = ({ mainclassName, divclassName, children, customStyle }) => {
  return (
    <main
      className={`w-full h-full flex justify-center px-40 ${mainclassName}`}
      style={{
        ...customStyle,
      }}
    >
      <div
        className={`flex flex-col items-center justify-center ${divclassName}`}>
        {children}
      </div>
    </main>
  );
};

export default Background;