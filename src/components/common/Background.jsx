import React from 'react';

const Background = ({ mainclassName, divclassName, children, customStyle }) => {
  return (
    <div
      className={`w-full h-screen ${mainclassName}`}
      style={{
        ...customStyle,
        backgroundImage:
          "linear-gradient(180deg, rgb(255, 187, 187) -34.2%, rgba(255, 102, 102, 0.40) 42.5%, rgba(255, 0, 0, 0.00) 223.53%)",
      }}>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Background;