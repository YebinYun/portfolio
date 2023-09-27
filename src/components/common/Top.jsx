import React from 'react';
import { Icon } from "@iconify/react";

const Top = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
      <div className="w-fit bottom-16 right-16 fixed z-50 shadow bg-white rounded-full p-2 hover:opacity-80">
        <button className="w-fit" onClick={scrollToTop}>
          <Icon
            className="w-14 h-14 opacity-90"
            icon="fluent-emoji-high-contrast:top-arrow"
            color="#444"
          />
        </button>
      </div>
    );
};

export default Top;