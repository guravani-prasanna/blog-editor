import { useState } from "react";

const FileUpload = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setError("");
    setProgress(0);

    let uploaded = 0;
    const interval = setInterval(() => {
      uploaded += 10;
      setProgress(uploaded);

      if (uploaded >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {progress > 0 && <progress value={progress} max="100" />}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
