import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { FaUpload, FaTrash } from 'react-icons/fa';

interface Image {
  url: string;
  name: string;
  public_id: string;
}

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [imageName, setImageName] = useState('');

  // Load images when component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/images');
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();
      setImages(data.map((img: any) => ({
        url: img.url,
        name: img.public_id.split('/').pop()?.replace(/_/g, ' ') || 'Gym Image',
        public_id: img.public_id
      })));
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Error loading images');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setImageName(file.name);
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !imageName) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('name', imageName);

      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      // Refresh images list
      await fetchImages();
      
      // Reset form
      setSelectedFile(null);
      setImageName('');
      setPreviewUrl(null);
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (image: Image) => {
    try {
      const response = await fetch('http://localhost:5000/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ public_id: image.public_id }),
      });

      if (!response.ok) throw new Error('Delete failed');

      // Refresh images list
      await fetchImages();
      alert('Image deleted successfully!');
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Error deleting image');
    }
  };

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.uploadSection}>
        <h2>Upload New Image</h2>
        <form onSubmit={handleUpload} className={styles.uploadForm}>
          <div className={styles.fileUploadArea}>
            <div className={styles.previewArea}>
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" />
              ) : (
                <div className={styles.uploadPlaceholder}>
                  <FaUpload />
                  <p>Click or drag image to upload</p>
                </div>
              )}
            </div>
            <input 
              type="file" 
              onChange={handleFileChange}
              accept="image/*"
              id="fileInput"
              className={styles.fileInput}
            />
          </div>

          <div className={styles.formFields}>
            <div className={styles.inputGroup}>
              <label>Image Name</label>
              <input
                type="text"
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                placeholder="Enter image name"
                required
              />
            </div>

            <button type="submit" disabled={loading || !selectedFile} className={styles.submitButton}>
              {loading ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
        </form>
      </div>

      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageItem}>
            <img src={image.url} alt={image.name} />
            <div className={styles.imageOverlay}>
              <p>{image.name}</p>
              <button 
                onClick={() => handleDelete(image)}
                className={styles.deleteButton}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin; 