import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';


function App() {
  // Initialize editor
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: localStorage.getItem("blogDraft") || "",
    onUpdate: ({ editor }) => {
      localStorage.setItem("blogDraft", editor.getHTML());
      toast.info("Draft auto-saved!", { autoClose: 1000 });
    },
  });

  const [imageUploading, setImageUploading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Load saved posts from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleSavePost = () => {
    const newPost = { id: Date.now(), content: editor.getHTML() };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    toast.success("Post saved successfully!");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageUploading(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      editor.chain().focus().setImage({ src: reader.result }).run();
      setImageUploading(false);
      toast.success("Image uploaded!");
    };
    reader.readAsDataURL(file);
  };

  // Filter posts based on search
  const filteredPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <ToastContainer />
      <h1>Blog Editor</h1>

      <div className="editor-toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>Bullet List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>Ordered List</button>
        <input type="file" onChange={handleImageUpload} />
        {imageUploading && <span>Uploading...</span>}
      </div>

      <EditorContent editor={editor} className="editor" />

      <button onClick={handleSavePost} className="save-btn">Save Post</button>

      <h2>Search Posts</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="posts">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
