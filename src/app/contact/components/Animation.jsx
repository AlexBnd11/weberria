"use client";
import { useEffect, useState } from "react";

export default function Animation({ children, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`
        transition-all duration-400 ease-out
        ${visible ? "scale-100 opacity-100" : "opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}