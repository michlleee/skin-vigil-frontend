// src/components/UploadSection.jsx
import "./UploadSectionStyles.css";
import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

const sampleImages = [
  {
    url: "./samples/sample1.jpg",
    name: "sample1.jpg"
  },
  {
    url: "./samples/sample2.jpg",
    name: "sample2.jpg"
  },
  {
    url: "./samples/sample3.jpeg",
    name: "sample3.jpeg"
  },
  {
    url: "./samples/sample4.jpg",
    name: "sample4.jpg"
  },
  {
    url: "./samples/sample5.jpg",
    name: "sample5.jpg"
  },
  {
    url: "./samples/sample6.jpg",
    name: "sample6.jpg"
  },
];

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
      // const API_URL = process.env.REACT_APP_API_URL;

      const res = await fetch(`https://skin-vigil-backend-production.up.railway.app/api/detect_upload`, {
        method: "POST",
        body: formData,
        mode: "cors",
      });

      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("❌ Backend error:", errorText);
        alert(`Backend error: ${errorText}`);
        return;
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Failed to detect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (img) => {
    const link = document.createElement("a");
    link.href = img.url;
    link.download = img.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      
      <div className="available-images">
        <h4>Try with these sample images:</h4>
        <div className="sample-images-row">
          {sampleImages.map((img, idx) => (
            <img
              key={idx}
              src={img.url}
              alt={`Sample ${idx + 1}`}
              className="sample-image"
              onClick={() => handleDownload(img)}
              title="Click to download"
            />
          ))}
        </div>
      </div>

      {result && (
        <div className="result-box">
          <div className="result-header">
            <span className="result-icon">📝</span>
            <span className="result-title">Detection Result</span>
          </div>
          <div className="result-details">
            <div className="result-label">Prediction</div>
            <div className="result-value">{result.prediction}</div>
            <div className="result-label">Confidence</div>
            <div className="result-confidence">
              <span className="confidence-bar-bg">
                <span
                  className="confidence-bar"
                  style={{ width: `${(result.confidence * 100).toFixed(2)}%` }}
                ></span>
              </span>
              <span className="confidence-text">{(result.confidence * 100).toFixed(2)}%</span>
            </div>
          </div>
          {result.prediction.toLowerCase().includes("cancer detected") ? (
            <div className="warning-box">
              <h4>⚠️ Possible Skin Cancer Detected</h4>
              <p>
                Please contact the nearest hospital or a certified dermatologist as soon as possible for further examination.
              </p>
              <a className="contact-link" href="tel:112">
                📞 Call Emergency: 112
              </a>
            </div>
          ) : (
            <div className="safe-box">
              <h4>✅ No Cancer Detected</h4>
              <p>
                Your result does not indicate skin cancer. Keep monitoring your skin and stay vigilant!
              </p>
            </div>
          )}
        </div>
      )}


    </div>
  );
}

export default UploadSection;
