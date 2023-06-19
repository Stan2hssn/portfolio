"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const CursorContext = createContext({});

export const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isScaled, setScaled] = useState("scale(1)");
  const [isOn, setIsOn] = useState(false);
  const [isColor, setColor] = useState("difference");

  useEffect(() => {
    function handleMouseMove(e) {
      if (!isHovered) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <CursorContext.Provider
      value={{
        cursorPos,
        setCursorPos,
        isHovered,
        setIsHovered,
        isScaled,
        setScaled,
        isOn,
        setIsOn,
        isColor,
        setColor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
