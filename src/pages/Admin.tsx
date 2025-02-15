import React, { useState } from 'react';
import styles from './Admin.module.css';
import { FaUpload, FaTrash } from 'react-icons/fa';
import { storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

interface Image {
  url: string;
  name: string;
  storageRef: string;
}

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  const [imageName, setImageName] = useState('');

  // Load images when component mounts
  React.useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('gymImages') || '[]');
    setImages(storedImages);
  }, []);

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
      // Create a unique filename
      const filename = `${Date.now()}-${imageName}`;
      const storageRef = `gym-images/${filename}`;
      const fileRef = ref(storage, storageRef);
      
      // Upload the file
      await uploadBytes(fileRef, selectedFile);
      
      // Get the download URL
      const url = await getDownloadURL(fileRef);
      
      // Save the image data to localStorage
      const imageData: Image = {
        url,
        name: imageName,
        storageRef
      };
      
      const updatedImages = [...images, imageData];
      localStorage.setItem('gymImages', JSON.stringify(updatedImages));
      setImages(updatedImages);
      
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

  const handleDelete = async (image: Image, index: number) => {
    try {
      // Delete from Firebase Storage
      const fileRef = ref(storage, image.storageRef);
      await deleteObject(fileRef);

      // Remove from local state and localStorage
      const updatedImages = images.filter((_, i) => i !== index);
      localStorage.setItem('gymImages', JSON.stringify(updatedImages));
      setImages(updatedImages);

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
                onClick={() => handleDelete(image, index)}
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