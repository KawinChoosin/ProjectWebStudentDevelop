import { Box, Card, Typography, TextField, Button, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import AddressForm from './addressform';
import StyledTextField from './StyledTextField'; 

interface Company {
  C_name: string;
  C_address: string;
  C_email: string;
  C_pic: string;
  C_tel: string;
  C_detail: string;
  C_coordinate: string;
  // Add other fields here as needed (e.g., C_address, C_email, etc.)
}

interface ImageData {
  imgPath: string;
  // Add other fields if necessary (e.g., title, description, etc.)
}

function GetJob() {
  const [formData, setFormData] = useState<Company[]>({
    C_name: '',
    C_salary
    C_address: '',
    C_email: '',
    C_pic: '',
    C_tel: '',
    C_detail: '',
    C_coordinate:''
  });
  const [image, setImage] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Control alert visibility
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'C_name':
        if (!/^[\w\s\u0E00-\u0E7F]+$/.test(value)) {
          error = 'ชื่อบริษัทต้องประกอบด้วยอักษรไทย อักษรภาษาอังกฤษ หรือ ตัวเลขเท่านั้น';
        }
        break;
      case 'C_address':
        if (value.length < 10) error = 'กรุณากรอกที่อยู่ให้ถูกต้อง';
        break;
      case 'C_email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'กรุณากรอกอีเมลให้ถูกต้อง';
        break;
      // case 'C_tel':
      //   if (!/^\d{10}$/.test(value)) error = 'หมายเลขโทรศัพท์ต้องมี 10 หลัก';
      //   break;
      case 'C_pic':
        if (image == null) error = 'กรุณาอัพโหลดรูปภาพ';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleOpenDialog = (event: any) => {
    event.preventDefault();
    
    // Check if any errors exist or if reCAPTCHA is missing
    const hasErrors = Object.values(errors).some(error => error);
    
    if (hasErrors || !recaptchaToken) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนและผ่านการตรวจสอบ reCAPTCHA");
      return;
    }
    
    // Check if image is uploaded
    if (image === null) {
      alert("กรุณาอัพโหลดรูปภาพ"); // Alert if image is missing
      return;
    }
  
    setIsDialogOpen(true); // Open confirmation dialog if no errors and reCAPTCHA is checked
  };
  

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close dialog without submitting
  };

  const handleConfirmSubmit = async () => {
    // Logic to submit form data and image after confirmation
    if(image !== null){
      const formDataObj = new FormData();
      formDataObj.append('C_name', formData.C_name);
      formDataObj.append('C_address', formData.C_address);
      formDataObj.append('C_email', formData.C_email);
      formDataObj.append('C_tel', formData.C_tel);
      formDataObj.append('C_detail', formData.C_detail);
      formDataObj.append('C_coordinate', formData.C_coordinate);
      formDataObj.append('P_id', '1'); // Example P_id, replace with dynamic data if needed
      if (image) formDataObj.append('C_pic', image);
      formDataObj.append('recaptchaToken', recaptchaToken || ''); // Send reCAPTCHA token
  
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/create`, {
          method: 'POST',
          body: formDataObj,
        });
        const result = await response.json();
        console.log(result);
  
        // Show success alert
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  
        // Reset form values
        setFormData({
          C_name: '',
          C_address: '',
          C_email: '',
          C_pic: '',
          C_tel: '',
          C_detail: '',
          C_coordinate:''
        });
        setImage(null);
        setRecaptchaToken(null); // Reset reCAPTCHA
        setIsDialogOpen(false); // Close the dialog on successful submission
        scrollToTop(); 
      } catch (error) {
        console.error('Error:', error);
        setIsDialogOpen(false);
      }
    }else{
        alert("กรุณาอัพโหลดรูปภาพ");
        setIsDialogOpen(false);
        return;
    }
    
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar status={false}/>
      
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: { xs: "370px", sm: "700px", md: "800px", lg: "1000px" },
          marginTop: "125px",
          padding: "20px",
          boxSizing: "border-box",
          color: "#333",
          fontFamily: 'Prompt',
      }}>
        
        <div className="text-topic" style={{ marginTop: "10%", fontFamily: 'Prompt' }}>
          จัดหางาน(หน่วยงานภายนอก)
        </div>
        <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
        
        <Card sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: 4 }}>
        {showAlert && (
          <Alert severity="success" sx={{ width: '100%', position: 'static', zIndex: 1000 ,justifyContent:'center',mb:2 }}>
            เพิ่มข้อมูลสำเร็จ
          </Alert>
        )}
          <Typography variant="h4" sx={{ fontFamily: 'Prompt', marginBottom: 4, display: 'flex', justifyContent: 'center' }}>
            จัดหางาน
          </Typography>
          
          <form onSubmit={handleOpenDialog}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <StyledTextField
                  id="C_name"
                  label="ชื่อบริษัท"
                  name="C_name"
                  value={formData.C_name}
                  onChange={handleChange}
                  error={!!errors.C_name}
                  helperText={errors.C_name}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  id="C_salary"
                  label="เงินเดือน (เช่น 500-1000 บาท/เดือน)"
                  name="C_salary"
                  value={formData.C_name}
                  onChange={handleChange}
                  error={!!errors.C_name}
                  helperText={errors.C_name}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  id="C_address"
                  label="ที่อยู่บริษัท"
                  name="C_address"
                  value={formData.C_address}
                  onChange={handleChange}
                  error={!!errors.C_address}
                  helperText={errors.C_address 
                    // || "กรุณากรอกที่อยู่ของบริษัท"
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
        
                <TextField
                  required
                  id="C_address"
                  label="ที่อยู่บริษัท"
                  name="C_address"
                  value={formData.C_address}
                  onChange={handleChange}
                  error={!!errors.C_address}
                  helperText={errors.C_address 
                    // || "กรุณากรอกที่อยู่ของบริษัท"
                  }
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="C_email"
                  label="อีเมลบริษัท"
                  name="C_email"
                  value={formData.C_email}
                  onChange={handleChange}
                  error={!!errors.C_email}
                  helperText={errors.C_email 
                    // || "กรุณากรอกอีเมลที่ใช้ติดต่อ"
                  }
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="C_coordinate"
                  label="รายชื่อผู้ติดต่อประสานงาน"
                  name="C_coordinate"
                  value={formData.C_coordinate}
                  onChange={handleChange}
                  // helperText="กรุณากรอกรายชื่อผู้ติดต่อประสานงาน"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="C_tel"
                  label="หมายเลขโทรศัพท์"
                  name="C_tel"
                  value={formData.C_tel}
                  onChange={handleChange}
                  error={!!errors.C_tel}
                  helperText={errors.C_tel }
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="C_detail"
                  label="รายละเอียดเพิ่มเติม (แสดงให้บุคคลภายนอกเห็นในหน้าสมัครงาน)"
                  name="C_detail"
                  value={formData.C_detail}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  defaultValue="Line1\nLine2\nLine3\nLine4"
                  
                  
                />
              </Grid>


              <Grid item xs={12}>
                <Button
                
                  variant="outlined"
                  component="label"
                  color="primary"
                  fullWidth
                >
                  อัพโหลดรูปภาพบริษัท
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
                {image && (
                  <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
                    {`Selected Image: ${image.name}`}
                  </Typography>
                )}
                {image && (
                  <Box sx={{ marginTop: 2 }}>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                    />
                  </Box>
                )}
              </Grid>

              <Grid item xs={12}>
                
                <ReCAPTCHA
                  sitekey="6Lf5mXcqAAAAAIm3fMPKT6ArErnl8OA_0yAiShx_" // replace with your reCAPTCHA site key
                  onChange={handleRecaptchaChange}
                  sx

                />
              </Grid>
              {/* <Grid item xs={12}>
                <AddressForm/>
              </Grid> */}
              
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  ตรวจสอบข้อมูล
                </Button>
              </Grid>
            </Grid>
          </form>
 
          
       
          
        </Card>
        
        <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth sx={{overflow: 'auto',mt:'10%'}}>
          <DialogTitle sx={{ fontFamily: 'Prompt' }}>ยืนยันข้อมูลก่อนส่ง</DialogTitle>
          <DialogContent dividers sx={{ maxHeight: 400, overflowY: 'auto' }}>
            <DialogContentText sx={{ fontFamily: 'Prompt' }}>
              โปรดตรวจสอบข้อมูลทั้งหมดก่อนที่จะส่ง
            </DialogContentText>
            <Box sx={{ mt: 2 }}>
              <Typography>ชื่อบริษัท: {formData.C_name}</Typography>
              <Typography>ที่อยู่บริษัท: {formData.C_address}</Typography>
              <Typography>อีเมลบริษัท: {formData.C_email}</Typography>
              <Typography>หมายเลขโทรศัพท์: {formData.C_tel}</Typography>
              <Typography>รายชื่อผู้ติดต่อ: {formData.C_detail}</Typography>
              {image && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </Box>
              )}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              ยกเลิก
            </Button>
            <Button onClick={handleConfirmSubmit} color="primary">
              ยืนยันและส่งข้อมูล
            </Button>
          </DialogActions>
        </Dialog>
        
      </Box>
      <Footer/>
    </div>
  );
}

export default GetJob;
