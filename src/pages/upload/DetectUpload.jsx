// src/components/UploadSection.jsx
import "./UploadSectionStyles.css";
import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

function UploadSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage({
        preview: URL.createObjectURL(file),
        file: file,
      });
      setResult(null);
    }
  };
  
  const handleDetect = async () => {
    if (!selectedImage || !selectedImage.file) {
      alert("Please upload an image first!");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage.file);
  
    try {
      const res = await fetch("http://localhost:5000/DetectUpload", {
        method: "POST",
        body: formData,
        mode: "cors",
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to detect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">UPLOAD A PICTURE</h2>
      <div className="upload-box">
        {selectedImage
          ? <img src={selectedImage.preview} alt="preview" className="preview-image" />
          : <FaFolderOpen className="upload-icon" />
        }
      </div>

      <div className="upload-controls">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <input
          type="text"
          className="upload-input"
          placeholder="Upload a picture here"
          value={selectedImage ? selectedImage.file.name : ""}
          readOnly
        />
        <label htmlFor="file-upload" className="browse-btn">
          BROWSE
        </label>
      </div>

      <button
        className="detect-btn"
        onClick={handleDetect}
        disabled={loading}
      >
        {loading ? "Detecting..." : "DETECT"}
      </button>

      {result && (
        <div className="result-box">
          <h3>Result:</h3>
          <p><strong>Prediction:</strong> {result.prediction}</p>
          <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
}

export default UploadSection;
