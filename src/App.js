import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="container">
      <Header />
      <Editor />
      <FileUpload />
      <Preview />
    </div>
  );
}

export default App;
