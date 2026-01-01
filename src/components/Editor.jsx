import { useContext, useEffect } from "react";
import { EditorContext } from "../context/EditorContext";
import { useDebouncedSave } from "../hooks/useDebouncedSave";
import { saveToStorage, loadFromStorage } from "../services/storageService";

const Editor = () => {
  const { content, setContent } = useContext(EditorContext);

  useEffect(() => {
    const saved = loadFromStorage("content");
    if (saved) setContent(saved);
  }, [setContent]);

  useDebouncedSave(content, (val) => saveToStorage("content", val));

  return (
    <textarea
      placeholder="Start typing..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows={6}
    />
  );
};

export default Editor;
