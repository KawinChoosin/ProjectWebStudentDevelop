import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography, CardMedia, Box, Grid } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DropzoneArea } from 'mui-file-dropzone';
import axios from 'axios';

const FileUploadForm = () => {
  // State for imgslide table form
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [fileImg, setFileImg] = useState(null);
  const [filePreviewImg, setFilePreviewImg] = useState(null);
  const [infoImg, setInfoImg] = useState('');
  const [imgFiles, setImgFiles] = useState([]);
  const [docFiles, setDocFiles] = useState([]);

  // State for filept table form
  const [fileDoc, setFileDoc] = useState(null);
  const [filePreviewDoc, setFilePreviewDoc] = useState(null);
  const [fileName, setFileName] = useState('');

  // Handle file selection for imgslide
  const handleDropzoneChangeImg = (files:any) => {
    setImgFiles(files);
    const selectedFile = files.length > 0 ? files[0] : null;
    setFileImg(selectedFile);
    setFilePreviewImg(selectedFile ? URL.createObjectURL(selectedFile) : null);
  };

  // Handle file selection for filept
  const handleDropzoneChangeDoc = (files) => {
    setDocFiles(files);
    const selectedFile = files.length > 0 ? files[0] : null;
    setFileDoc(selectedFile);
    setFilePreviewDoc(selectedFile ? URL.createObjectURL(selectedFile) : null);
  };

  // Handle image form submission
  const handleSubmitImg = async (e) => {
    e.preventDefault();
    if (!fileImg) return alert("Please select an image");

    const formData = new FormData();
    formData.append('imgFile', fileImg);
    formData.append('detail', infoImg);

    try {
      const response = await axios.post('http://localhost:2222/imgslide', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadedImages([...uploadedImages, response.data]);
      setImgFiles([]); // Clear the DropzoneArea
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    setFileImg(null);
    setFilePreviewImg(null);
    setInfoImg('');
  };

  // Handle document form submission
  const handleSubmitDoc = async (e) => {
    e.preventDefault();
    if (!fileDoc) return alert("Please select a file");

    const formData = new FormData();
    formData.append('file', fileDoc);
    formData.append('name', fileName);

    try {
      const response = await axios.post('http://localhost:2222/filept', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setUploadedDocs([...uploadedDocs, response.data]);
      setDocFiles([]); // Clear the DropzoneArea
    } catch (error) {
      console.error('Error uploading document:', error);
    }

    setFileDoc(null);
    setFilePreviewDoc(null);
    setFileName('');
  };

  // Fetch uploaded data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imgResponse, docResponse] = await Promise.all([
          axios.get('http://localhost:2222/imgslide'),
          axios.get('http://localhost:2222/filept'),
        ]);
        setUploadedImages(imgResponse.data);
        setUploadedDocs(docResponse.data);
        setImgFiles([]); // Clear imgFiles after fetching
        setDocFiles([]); // Clear docFiles after fetching
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ padding: '10% 10%' }}>
      <Typography variant="h4" gutterBottom>Image and File Uploads</Typography>

      {/* Form for imgslide */}
      <form onSubmit={handleSubmitImg} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        <Typography variant="h5">Upload Image</Typography>
        <TextField
          label="Image Description"
          variant="outlined"
          value={infoImg}
          onChange={(e) => setInfoImg(e.target.value)}
          required
        />
        <DropzoneArea
          acceptedFiles={['image/*']}
          dropzoneText="Drag and drop an image here or click"
          onChange={handleDropzoneChangeImg}
          initialFiles={imgFiles}
          filesLimit={1}
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<CloudUploadIcon />}>
          Submit Image
        </Button>
      </form>

      {/* Image Preview */}
      {filePreviewImg && (
        <Card sx={{ marginTop: 2 }}>
          <CardMedia component="img" height="140" image={filePreviewImg} alt="Uploaded Image" />
          <CardContent>
            <Typography>{infoImg}</Typography>
          </CardContent>
        </Card>
      )}

      {/* Form for filept */}
      <form onSubmit={handleSubmitDoc} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        <Typography variant="h5">Upload File</Typography>
        <TextField
          label="File Name"
          variant="outlined"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          required
        />
        <DropzoneArea
          acceptedFiles={['application/*']}
          dropzoneText="Drag and drop a file here or click"
          onChange={handleDropzoneChangeDoc}
          initialFiles={docFiles}
          filesLimit={1}
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<CloudUploadIcon />}>
          Submit File
        </Button>
      </form>

      {/* Document Preview */}
      {filePreviewDoc && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography>{fileName}</Typography>
          </CardContent>
        </Card>
      )}

      {/* Uploaded Files Section */}
      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>Uploaded Files</Typography>
      <Grid container spacing={3}>
        {uploadedImages.map((img) => (
          <Grid item xs={12} sm={6} md={4} key={img.id}>
            <Card>
              <CardMedia component="img" height="200" image={`../../../BackendPT/uploads/${img.imgPath}`} alt={img.detail} />
              <CardContent>
                <Typography>{img.detail}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        {uploadedDocs.map((doc) => (
          <Grid item xs={12} sm={6} md={4} key={doc.id}>
            <Card>
              <CardContent>
                <Typography>{doc.name}</Typography>
                <a href={`../../../BackendPT/uploads/${doc.filePath}`} target="_blank" rel="noopener noreferrer">Download</a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FileUploadForm;
