import { useState } from "react";

const LinkModal = ({ isOpen, onClose, onSubmit }) => {
  const [url, setUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!url.startsWith("http")) {
      alert("Please enter a valid URL (http/https)");
      return;
    }
    onSubmit(url);
    setUrl("");
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Insert Link</h3>
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: "100%" }}
        />
        <div style={{ marginTop: "10px" }}>
          <button onClick={handleSubmit}>Insert</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  width: "300px",
  margin: "100px auto",
};

export default LinkModal;
