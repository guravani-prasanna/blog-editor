import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import DOMPurify from "dompurify";

const Preview = () => {
  const { content } = useContext(EditorContext);

  return (
    <div>
      <h3>Preview</h3>
      <div
        className="preview"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      />
    </div>
  );
};

export default Preview;
