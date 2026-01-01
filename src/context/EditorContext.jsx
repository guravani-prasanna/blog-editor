import { createContext, useState } from "react";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);

  return (
    <EditorContext.Provider value={{ content, setContent, files, setFiles }}>
      {children}
    </EditorContext.Provider>
  );
};
