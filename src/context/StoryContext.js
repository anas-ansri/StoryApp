import React, { createContext, useState } from "react";

const StoryContext = createContext();

const StoryProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <StoryContext.Provider
      value={{ title, setTitle, subtitle, setSubtitle, body, setBody }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export { StoryContext, StoryProvider };
