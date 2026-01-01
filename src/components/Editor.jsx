import { useContext, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { EditorContext } from "../context/EditorContext";
import { useDebouncedSave } from "../hooks/useDebouncedSave";
import { saveToStorage, loadFromStorage } from "../services/storageService";
import EditorToolbar from "./EditorToolbar";

const Editor = () => {
  const { content, setContent } = useContext(EditorContext);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    const saved = loadFromStorage("content");
    if (saved && editor) {
      editor.commands.setContent(saved);
    }
  }, [editor]);

  useDebouncedSave(content, (val) => {
    saveToStorage("content", val);
  });

  return (
    <div>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
