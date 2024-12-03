import Navbar from '../../component/NavbarAdmin';
import Footer from '../../component/Footer';
import { Box, Button, Card, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import ActivityImage from '../../pages/Homepage/ActivityImage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import News from '../../pages/Homepage/News';

interface ImageData {
  imgPath: string;
  // Add other fields if necessary (e.g., title, description, etc.)
}


const App = () => {
  const [image, setImage] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [uploadurlStatus, setUploadurlStatus] = useState<string | null>(null);
  const [imagedata, setImagedata] = useState<ImageData[]>([]);
  const [allimage,setAllimage] = useState<ImageData[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isnewsDialogOpen, setIsnewsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // New state to store selected company
  const [selectedNews, setSelectedNews] = useState(null); // New state to store selected company
  const [newsurl, setNewsurl] = useState<ImageData[]>([]);
  const [allnewsurl,setAllnewsurl] = useState<ImageData[]>([]);
  const [urlnews,setUrlnews] = useState(null);
  const [nameurlselect,setNameurlselect] = useState(null);
  const [imagenews,setImagenews] = useState<File | null>(null);

  useEffect(() => {
    const fetchImageSlides = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/imgslide/show`);
        setImagedata(response.data.data);
        const responseimageall = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/imgslide/show-all`);
        setAllimage(responseimageall.data.data);
        const responseurlnews = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/news/show`);
        setNewsurl(responseurlnews.data.data);
        const responseurlnewsall = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/news/show-all`);
        setAllnewsurl(responseurlnewsall.data.data);
      } catch (error) {
        console.error('Error fetching image slides:', error);
      }
    };
   
    fetchImageSlides();
  }, [imagedata,allimage,newsurl,allnewsurl]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const changeStatus = async (IMG_id:number,status:boolean) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/imgslide/update-status`, {
        IMG_id: IMG_id,
        status: !status,
      });
      
      if (response.status === 200) {
        console.log("Status updated successfully:", response.data);
        return response.data; // Return data for further use if needed
      } else {
        console.error("Failed to update status:", response.statusText);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error while updating status:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }

  
  const changeStatusnews = async (link_id:number,status:boolean) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/news/update-status`, {
        link_id: link_id,
        status: !status,
      });
      
      if (response.status === 200) {
        console.log("Status updated successfully:", response.data);
        return response.data; // Return data for further use if needed
      } else {
        console.error("Failed to update status:", response.statusText);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error while updating status:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('P_id', '2');
    formData.append('img', image);


    try {
      const response = await axios.post('http://localhost:3000/api/imgslide/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.data.success) {
        setUploadStatus('Image uploaded successfully!');
      }
      setImage(null)
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus('Failed to upload image.');
    }
  };

  const handleOpenDialog = (IMG_id: any) => {
    setSelectedImage(IMG_id);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedImage(null);
  };

  const handleOpennewsDialog = (link_id: any) => {
    setSelectedNews(link_id);
    setIsnewsDialogOpen(true);
  };

  const handleClosenewsDialog = () => {
    setIsnewsDialogOpen(false);
    setSelectedNews(null);
  };

  const handleDeleteImage = async (selectedImage:number) => {
    console.log(selectedImage)
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/imgslide/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ IMG_id: selectedImage }),
      });
      const data = await response.json();
      
      // if (data.success) {
      //   setCompanyData((prevData) => prevData.filter((item) => item.id !== id));
      // } else {
      //   console.error('Failed to delete company:', data.message);
      // }
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  }

  const handleDeleteNews = async (selectedImage:number) => {
    console.log(selectedImage)
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/news/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link_id: selectedNews }),
      });
      const data = await response.json();
      
      // if (data.success) {
      //   setCompanyData((prevData) => prevData.filter((item) => item.id !== id));
      // } else {
      //   console.error('Failed to delete company:', data.message);
      // }
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  }
  

  const handleChangelink = (event: any) => {
    const { value } = event.target;
    setUrlnews(value);
  
  }
  
  const handleChangelinkname = (event: any) => {
    const { value } = event.target;
    setNameurlselect(value);
   
  }

  const handleSubmitNews = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('P_id', '2');
    formData.append('Url', urlnews);
    formData.append('Url_name', nameurlselect);
    if (imagenews) formData.append('imgPath', imagenews);
    setUrlnews(null);
    setNameurlselect(null);
    setImagenews(null);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/news/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.data.success) {
        setUploadurlStatus('News uploaded successfully!');
      }
      setImage(null)
    } catch (error) {
      console.error('Error uploading success:', error);
      setUploadurlStatus('Failed to upload success.');
    }
  };

  const handleImagenewsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImagenews(event.target.files[0]);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar status={true} />
      <Card >
      <Box sx={{ flex: 1, mt: '125px', display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'column',mb:20}}>
        <Box sx={{ width: '80%', maxWidth: '500px', textAlign: 'center' }}>
          <ActivityImage />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                  color="primary"
                  fullWidth
                >
                  อัพโหลดรูปภาพ
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
              </Grid>
              {image && (
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
                    {`Selected Image: ${image.name}`}
                  </Typography>
                </Grid>
              )}
              {image && (
                <Grid item xs={12}>
                  <Box sx={{ marginTop: 2 }}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                    />
                  </Box>
                </Grid>
              )}
              <Grid item xs={12} >
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  บันทึกรูปภาพ
                </Button>
              </Grid>
              {uploadStatus && (
                <Grid item xs={12}>
                  <Typography variant="body2" color={uploadStatus.includes('successfully') ? 'green' : 'red'}>
                    {uploadStatus}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </form>

          

        </Box>
        <Box sx={{width:'90%' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid container spacing={2} sx={{mt:4}} >
                {allimage.map((image, index) => (
                  <Grid item xs={4} sm={3} key={index}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: '1', // Maintain a square aspect ratio (1:1)
                        overflow: 'hidden', // Ensure content doesn't overflow
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5', // Optional: Add a background color if the image doesn't fill
                      }}
                    >
                      <Box
                        component="img"
                        src={image.imgPath} // Image path relative to the public folder
                        alt={`image-${index}`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'scale-down', // Ensures the image fills the box while maintaining its aspect ratio
                        }}
                      />
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                      <Button onClick={() => changeStatus(image.IMG_id, image.status)}>
                        {image.status ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </Button>
                      <Button onClick={() => handleOpennewsDialog(image.IMG_id)}>
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                
                ))}
              </Grid>
          </Box>
      </Box>
      </Card>
      <Box sx={{ 
            display: 'block',
            width: '100%',
            height: '3px',
            backgroundColor: '#b00020',
            marginTop: '5px',
            position: 'absolute',
            left: '0',}}>

      </Box>
      <Card>
      <News/>
      <Box sx={{ width: '100%',display: 'flex',flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{ width: '80%', maxWidth: '500px', textAlign: 'center' }}>
        <form onSubmit={handleSubmitNews}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  id="linkurl"
                  label="กรุณาระบุเพจที่ต้องการเพิ่ม"
                  name="linkurl"
                  value={urlnews}
                  onChange={handleChangelink}
                  // error="กรุณาเพิ่มข้อมูล"
                  // helperText={
                  //   "กรุณากรอกชื่อบริษัทที่ต้องการสมัคร"
                  // }
                  fullWidth
                  sx={{mt:1}}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  required
                  id="urlname"
                  label="กรุณาระบุชื่อของเพจ"
                  name="urlname"
                  value={nameurlselect}
                  onChange={handleChangelinkname}
                  fullWidth
                  multiline
                  sx={{mt:1}}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                
                  variant="outlined"
                  component="label"
                  color="primary"
                  fullWidth
                >
                  อัพโหลดiconสำหรับมุมมองมือถือ
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImagenewsChange}
                  />
                </Button>
                {imagenews && (
                  <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
                    {`Selected Image: ${imagenews.name}`}
                  </Typography>
                )}
                {imagenews && (
                  <Box sx={{ marginTop: 2 }}>
                    <img
                      src={URL.createObjectURL(imagenews)}
                      alt="Preview"
                      style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                    />
                  </Box>
                )}
              </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  เพิ่มข้อมูล
                </Button>
            </Grid>
          </Grid>
          {uploadurlStatus && (
                <Grid item xs={12}>
                  <Typography variant="body2" color={uploadurlStatus.includes('successfully') ? 'green' : 'red'}>
                    {uploadurlStatus}
                  </Typography>
                </Grid>
          )}
        </form>
        </Box>
        <Box sx={{width:'90%' ,display: 'flex', justifyContent: 'center', alignItems: 'center',mt:4,mb:4}}>
            <Grid container spacing={2} sx={{mt:4}} >
                {allnewsurl.map((image, index) => (
                  <Grid item xs={4} sm={3} key={index}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%' }}>
                    <Box
                      sx={{
                        width: '100%',
                        aspectRatio: '1', // Maintain a square aspect ratio (1:1)
                        overflow: 'hidden', // Ensure content doesn't overflow
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5', // Optional: Add a background color if the image doesn't fill
                      }}
                    >
                      <a href={image.Url} target="_blank" rel="noopener noreferrer">
                        <Box
                          component="img"
                          src={image.imgPath} // Image path relative to the public folder
                          alt={`image-${index}`}
                          sx={{
                            padding:1,
                            width: '100%',
                            height: '100%',
                            objectFit: 'scale-down', // Ensures the image fills the box while maintaining its aspect ratio
                            cursor: 'pointer', // Makes it clear that the box is clickable
                          }}
                        />
                      </a>

                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                      <Button onClick={() => changeStatusnews(image.link_id, image.status)}>
                        {image.status ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </Button>
                      <Button onClick={() => handleOpennewsDialog(image.link_id)}>
                        <DeleteIcon />
                      </Button>
                    </Box>
                  </Card>
                </Grid>
                
                ))}
            </Grid>
          </Box>    
      </Box>
      </Card>

          <Dialog
            open={isDialogOpen}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            aria-describedby="alert-dialog-slide-description"
          >
              <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                ยืนยันการลบ
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                    คุณแน่ใจใช่มั้ยที่ต้องการลบข้อมูลนี้
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button  onClick={() => {
              if (selectedImage !== null) {
                handleDeleteImage(selectedImage);
              }
              handleCloseDialog();
            }}
                  >ลบ</Button>
                <Button onClick={handleCloseDialog}>ยกเลิก</Button>
              </DialogActions>
        </Dialog>
        <Dialog
            open={isnewsDialogOpen}
            // TransitionComponent={Transition}
            keepMounted
            onClose={handleClosenewsDialog}
            aria-describedby="alert-dialog-slide-description"
          >
              <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                ยืนยันการลบ
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                    คุณแน่ใจใช่มั้ยที่ต้องการลบข้อมูลนี้
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button  onClick={() => {
              if (selectedNews !== null) {
                handleDeleteNews(selectedNews);
              }
              handleClosenewsDialog();
            }}
                  >ลบ</Button>
                <Button onClick={handleClosenewsDialog}>ยกเลิก</Button>
              </DialogActions>
        </Dialog>
      <Footer />
    </div>
  );
};

export default App;
