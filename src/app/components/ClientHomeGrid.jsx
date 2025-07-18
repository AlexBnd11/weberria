"use client";
import React, { useState, useEffect } from "react";

export default function ClientHomeGrid({ children }) {
  const [loadedElements, setLoadedElements] = useState([]);

  useEffect(() => {
    // Add homepage class to body
    document.body.classList.add('homepage');
    
    const elements = ['hero', 'offer', 'projects', 'logo', 'about', 'marquee'];
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        setLoadedElements(prev => [...prev, element]);
      }, index * 100);
    });

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('homepage');
    };
  }, []);

  // Clone children and add animation classes
  const animatedChildren = React.Children.map(children, (child, index) => {
    const elementName = ['hero', 'offer', 'projects', 'logo', 'about', 'marquee'][index];
    
    if (!child) return child;

    return React.cloneElement(child, {
      className: `${child.props.className || ''} transition-all duration-350 ease-out ${
        loadedElements.includes(elementName) 
          ? 'scale-100 opacity-100' 
          : 'scale-130 opacity-0'
      }`.trim()
    });
  });

  return (
    <div className="
    grid grid-cols-12 grid-rows-5 h-full w-full gap-10
    max-lg:grid-cols-12 max-lg:grid-rows-5
    max-lg:h-full max-lg:w-full
    max-lg:gap-5
    max-md:flex flex-col
    max-sm:gap-4
    ">
      {animatedChildren}
    </div>
  );
} 