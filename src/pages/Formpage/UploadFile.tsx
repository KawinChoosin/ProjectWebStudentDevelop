import React, { useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DropzoneArea } from 'mui-file-dropzone';
import axios from 'axios';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [info, setInfo] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDropzoneChange = (files) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('info', info);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);

      // Add the uploaded file to the list of uploaded files
      setUploadedFiles([...uploadedFiles, response.data.data]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }

    // Clear the form
    setFile(null);
    setFilePreview(null);
    setInfo('');
  };

  const fetchUploadedFiles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/files');
      setUploadedFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  useEffect(() => {
    fetchUploadedFiles();
  }, []);

  return (
    <Box sx={{ padding: '10% 10%' }}>
      <div style={{ fontFamily: 'prompt', fontSize: '30px' }}>ImageSlider</div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        <TextField
          label="PicDetail"
          variant="outlined"
          value={info}
          onChange={handleInfoChange}
          required
        />
        <DropzoneArea
          acceptedFiles={['image/*']}
          dropzoneText="Drag and drop an image here or click"
          onChange={handleDropzoneChange}
          filesLimit={1}
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<CloudUploadIcon />}>
          Submit
        </Button>
      </form>

      {filePreview && (
        <Card style={{ marginTop: '16px' }}>
          <CardMedia component="img" alt="Uploaded File" height="140" image={filePreview} />
          <CardContent>
            <Typography variant="h6">Uploaded Image</Typography>
            <Typography color="textSecondary">{info}</Typography>
          </CardContent>
        </Card>
      )}

      <div>
        <Typography variant="h5" style={{ marginTop: '20px' }}>Uploaded Files:</Typography>
        {uploadedFiles.map((file) => (
          <Card key={file.id} style={{ marginTop: '16px' }}>
            <CardMedia component="img" alt="Uploaded File" height="140" image={`http://localhost:5000/ImageSlide/${file.filePath}`} />
            <CardContent>
              <Typography variant="h6">Description: {file.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
};

export default FileUploadForm;
