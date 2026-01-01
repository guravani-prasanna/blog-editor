import { useState } from "react";
import LinkModal from "./LinkModal";

const EditorToolbar = ({ editor }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);

  if (!editor) return null;

  const insertLink = (url) => {
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>

      <button onClick={() => setShowLinkModal(true)}>Insert Link</button>

      <button onClick={() => editor.chain().focus().unsetLink().run()}>
        Remove Link
      </button>

      <LinkModal
        isOpen={showLinkModal}
        onClose={() => setShowLinkModal(false)}
        onSubmit={insertLink}
      />
    </div>
  );
};

export default EditorToolbar;
