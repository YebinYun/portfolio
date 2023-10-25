import React from 'react';

const Background = ({ mainclassName, divclassName, children, customStyle }) => {
  return (
    <main
      className={`w-full h-full flex justify-center px-80 ${mainclassName}`}
      style={{
        ...customStyle,
      }}
    >
      <div
        className={`flex flex-col items-center justify-center px-20 ${divclassName}`}>
        {children}
      </div>
    </main>
  );
};

export default Background;