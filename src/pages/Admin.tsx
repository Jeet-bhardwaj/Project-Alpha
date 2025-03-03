import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';
import { FaUpload, FaTrash } from 'react-icons/fa';

interface Image {
  url: string;
  name: string;
  public_id: string;
}

interface Trainer {
  url: string;
  name: string;
  specialty: string;
  public_id: string;
}

const Admin = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imagesByFolder, setImagesByFolder] = useState<{ [key: string]: Image[] }>({});
  const [imageName, setImageName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('fitness-platinum'); // Default folder
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [trainerName, setTrainerName] = useState('');
  const [trainerSpecialty, setTrainerSpecialty] = useState('');
  const [activeTab, setActiveTab] = useState('images'); // 'images' or 'trainers'

  // Load images and trainers when component mounts
  useEffect(() => {
    fetchImages();
    fetchTrainers();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/images');
      if (!response.ok) throw new Error('Failed to fetch images');
      const data = await response.json();

      // Group images by folder
      const groupedImages: { [key: string]: Image[] } = {};
      data.forEach((img: any) => {
        const folder = img.public_id.split('/')[0]; // Get folder name from public_id
        if (!groupedImages[folder]) {
          groupedImages[folder] = [];
        }
        groupedImages[folder].push({
          url: img.url,
          name: img.public_id.split('/').pop()?.replace(/_/g, ' ') || 'Gym Image',
          public_id: img.public_id
        });
      });

      setImagesByFolder(groupedImages);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Error loading images');
    }
  };

  const fetchTrainers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/trainers');
      if (!response.ok) throw new Error('Failed to fetch trainers');
      const data = await response.json();
      setTrainers(data);
    } catch (error) {
      console.error('Error fetching trainers:', error);
      alert('Error loading trainers');
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
      formData.append('folder', selectedFolder);

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

  const handleTrainerUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !trainerName || !trainerSpecialty) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      // Format the name for Cloudinary: "Name_Specialty"
      const formattedName = `${trainerName.replace(/\s+/g, '-')}_${trainerSpecialty.replace(/\s+/g, '-')}`;
      formData.append('name', formattedName);
      formData.append('folder', 'Trainers');

      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      
      // Refresh trainers list
      await fetchTrainers();
      
      // Reset form
      setSelectedFile(null);
      setTrainerName('');
      setTrainerSpecialty('');
      setPreviewUrl(null);
      alert('Trainer added successfully!');
    } catch (error) {
      console.error('Error uploading trainer:', error);
      alert('Error adding trainer');
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

      const result = await response.json();
      if (result.message === 'Image deleted successfully') {
        // Refresh images list
        await fetchImages();
        alert('Image deleted successfully!');
      } else {
        alert('Image not found');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Error deleting image');
    }
  };

  return (
    <div className={styles.adminDashboard}>
      <h1 className={styles.dashboardTitle}>Admin Dashboard</h1>
      
      <div className={styles.tabsContainer}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'images' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('images')}
        >
          Manage Images
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'trainers' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('trainers')}
        >
          Manage Trainers
        </button>
      </div>

      {activeTab === 'images' ? (
        <div className={styles.contentSection}>
          <div className={styles.uploadSection}>
            <h2 className={styles.sectionTitle}>Upload New Image</h2>
            <form onSubmit={handleUpload} className={styles.uploadForm}>
              <div className={styles.fileUploadArea}>
                <div className={styles.previewArea}>
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className={styles.previewImage} />
                  ) : (
                    <div className={styles.uploadPlaceholder}>
                      <FaUpload size={40} />
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

                <div className={styles.inputGroup}>
                  <label>Folder</label>
                  <select 
                    value={selectedFolder} 
                    onChange={(e) => setSelectedFolder(e.target.value)}
                    className={styles.folderSelect}
                  >
                    {Object.keys(imagesByFolder).map((folder) => (
                      <option key={folder} value={folder}>{folder}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" disabled={loading || !selectedFile} className={styles.submitButton}>
                  {loading ? 'Uploading...' : 'Upload Image'}
                </button>
              </div>
            </form>
          </div>

          <div className={styles.manageSection}>
            <h2 className={styles.sectionTitle}>Manage Images</h2>
            
            <div className={styles.folderSelector}>
              <label>Select Folder:</label>
              <select 
                value={selectedFolder} 
                onChange={(e) => setSelectedFolder(e.target.value)}
              >
                {Object.keys(imagesByFolder).map((folder) => (
                  <option key={folder} value={folder}>{folder}</option>
                ))}
              </select>
            </div>

            <div className={styles.imageGrid}>
              {imagesByFolder[selectedFolder]?.map((image, index) => (
                <div key={index} className={styles.imageCard}>
                  <div className={styles.imageWrapper}>
                    <img src={image.url} alt={image.name} />
                    <div className={styles.imageOverlay}>
                      <p>{image.name}</p>
                      <button 
                        onClick={() => handleDelete(image)}
                        className={styles.deleteButton}
                        title="Delete image"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.contentSection}>
          <div className={styles.uploadSection}>
            <h2 className={styles.sectionTitle}>Add New Trainer</h2>
            <form onSubmit={handleTrainerUpload} className={styles.uploadForm}>
              <div className={styles.fileUploadArea}>
                <div className={styles.previewArea}>
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className={styles.previewImage} />
                  ) : (
                    <div className={styles.uploadPlaceholder}>
                      <FaUpload size={40} />
                      <p>Click or drag trainer photo to upload</p>
                    </div>
                  )}
                </div>
                <input 
                  type="file" 
                  onChange={handleFileChange}
                  accept="image/*"
                  id="trainerFileInput"
                  className={styles.fileInput}
                />
              </div>

              <div className={styles.formFields}>
                <div className={styles.inputGroup}>
                  <label>Trainer Name</label>
                  <input
                    type="text"
                    value={trainerName}
                    onChange={(e) => setTrainerName(e.target.value)}
                    placeholder="Enter trainer name"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Specialty</label>
                  <input
                    type="text"
                    value={trainerSpecialty}
                    onChange={(e) => setTrainerSpecialty(e.target.value)}
                    placeholder="Enter trainer specialty"
                    required
                  />
                </div>

                <button type="submit" disabled={loading || !selectedFile} className={styles.submitButton}>
                  {loading ? 'Adding...' : 'Add Trainer'}
                </button>
              </div>
            </form>
          </div>

          <div className={styles.manageSection}>
            <h2 className={styles.sectionTitle}>Current Trainers</h2>
            <div className={styles.trainerGrid}>
              {trainers.map((trainer, index) => (
                <div key={index} className={styles.trainerCard}>
                  <div className={styles.imageWrapper}>
                    <img src={trainer.url} alt={trainer.name} />
                  </div>
                  <div className={styles.trainerInfo}>
                    <h3>{trainer.name}</h3>
                    <p className={styles.specialty}>{trainer.specialty}</p>
                    <button 
                      onClick={() => handleDelete(trainer)}
                      className={styles.deleteTrainerButton}
                    >
                      <FaTrash /> Delete Trainer
                    </button>
                  </div>
                </div>
              ))}
              {trainers.length === 0 && (
                <p className={styles.noTrainers}>No trainers available. Add your first trainer above!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin; 