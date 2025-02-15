import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { FaUpload, FaTrash, FaImage, FaFolder } from 'react-icons/fa';

interface Image {
  _id: string;
  url: string;
  description: string;
  category: string;
  uploadedAt: string;
}

const Admin = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('upload');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(selectedFile);
    } else {
      setPreviewUrl(null);
    }
  }, [selectedFile]);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      } else {
        alert('Please select an image file');
      }
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('description', description);
    formData.append('category', category);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        fetchImages();
        setSelectedFile(null);
        setDescription('');
        setCategory('');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/api/images/${id}`, {
        method: 'DELETE',
      });
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const filteredImages = images.filter(image => {
    const matchesSearch = image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(images.map(image => image.category))];

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.sidebar}>
        <h2>Dashboard</h2>
        <nav>
          <button 
            className={`${styles.tabButton} ${activeTab === 'upload' ? styles.active : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            <FaUpload /> Upload
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'manage' ? styles.active : ''}`}
            onClick={() => setActiveTab('manage')}
          >
            <FaImage /> Manage Images
          </button>
        </nav>
      </div>

      <div className={styles.mainContent}>
        {activeTab === 'upload' ? (
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
                  <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter image description"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Category</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter image category"
                  />
                </div>

                <button type="submit" disabled={loading || !selectedFile} className={styles.submitButton}>
                  {loading ? 'Uploading...' : 'Upload Image'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.manageSection}>
            <h2>Manage Images</h2>
            
            <div className={styles.filterControls}>
              <div className={styles.searchBar}>
                <input
                  type="text"
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className={styles.categoryFilter}>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.imageGrid}>
              {filteredImages.map((image) => (
                <div key={image._id} className={styles.imageCard}>
                  <div className={styles.imageWrapper}>
                    <img src={image.url} alt={image.description} />
                    <div className={styles.imageOverlay}>
                      <button 
                        onClick={() => handleDelete(image._id)}
                        className={styles.deleteButton}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className={styles.imageInfo}>
                    <h3>{image.description}</h3>
                    <span className={styles.category}>
                      <FaFolder /> {image.category}
                    </span>
                    <span className={styles.date}>
                      {new Date(image.uploadedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin; 