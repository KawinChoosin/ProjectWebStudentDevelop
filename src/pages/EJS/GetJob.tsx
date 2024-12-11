import { Box, Card, Typography, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, SelectChangeEvent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import StyledTextField from './StyledTextField'; 
import MultipleSelectChip from './MultipleSelectChip';

interface Company {
  C_name: string;
  C_salary: string;
  C_logo: string;
  C_pic: string;
  C_detail: string;
  C_address: Address[];
  C_major: number[]; 
  C_worktype: number[]; 
}

interface Address {
  A_address: string;
  A_subdist: string;
  A_dist: string;
  A_province: string;
  A_post: string;
  A_email: string;
  A_tel: string;
  A_coordinate: string;
}

interface AddressFormProps {
  address: Address;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  index: number;
  errors: any;
}

interface Major {
  M_id: number; 
}

interface Worktype {
  WT_id: number; 
}

function GetJob() {
  const [image, setImage] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Control alert visibility
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [selectedMajors, setSelectedMajors] = useState<string[] >([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [formData, setFormData] = useState<Company>({
    C_name: '',
    C_salary: '',
    C_logo: '',
    C_pic: '',
    C_detail: '',
    C_address: [
      {
        A_address: '',
        A_subdist: '',
        A_dist: '',
        A_province: '',
        A_post: '',
        A_email: '',
        A_tel: '',
        A_coordinate: '',
      },
    ],
    C_major: [],
    C_worktype: []
  });
  

  const companyMajors = [
    { id: 1, name: 'วิศวกรรมโยธา' },
    { id: 2, name: 'วิศวกรรมไฟฟ้า' },
    { id: 3, name: 'วิศวกรรมอุตสาหการ' },
    { id: 4, name: 'วิศวกรรมสิ่งแวดล้อม' },
    { id: 5, name: 'วิศวกรรมเครื่องกล' },
    { id: 6, name: 'วิศวกรรมเหมืองแร่และปิโตรเลียม' },
    { id: 7, name: 'วิศวกรรมคอมพิวเตอร์' },
    { id: 8, name: 'วิศวกรรมระบบสารสนเทศและเครือข่าย' },
    { id: 9, name: 'วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์' },
    { id: 10, name: 'วิศวกรรมบูรณาการ' },
  ];
  
  const companyWorkTypes = [
    { id: 1, name: 'ฝึกงาน' },
    { id: 2, name: 'สหกิจศึกษา' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMajorChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedMajors(event.target.value);
  };

  const handleWorkTypeChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedWorkTypes(event.target.value);
  };

  const validateField = (name: string, value: string | number, index?: number) => {
    let error = '';
    if (index !== undefined) {
      name = `${name}_${index}`; // Add index to the name for errors
    }
    switch (name) {
      case 'C_name':
        if (value.trim().length < 3 ) {
          error = 'กรุณากรอกชื่อบริษัทให้ถูกต้อง';
        }
        break;
      case 'C_salary':
        if (value === '' || value === null || value === undefined) {
           error = 'โปรดระบุเงินเดือน หากไม่ต้องการระบุให้ใส่ -';
        }
        break;

      case 'C_logo':
        if (!value) {
          error = 'กรุณาอัพโหลดโลโก้บริษัท';
        }
        break;
        case 'C_pic':
          if (!value) {
            error = 'กรุณาอัพโหลดรูปภาพโปสเตอร์ประชาสัมพันธ์';
          }
          break;
        
      case 'C_detail':
        if (typeof value === 'string' && value.trim().length < 10) {
          error = 'กรุณากรอกรายละเอียดของบริษัท';
        }
        break;
      case `A_address_${index}`:
          if (typeof value === 'string' && value.trim().length < 5) {
              error = 'กรุณากรอกที่อยู่ให้ถูกต้อง (อย่างน้อย 5 ตัวอักษร)';
          }
          break;
      case `A_email_${index}`:
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) {
            error = 'กรุณากรอกอีเมลให้ถูกต้อง';
          }
          break;
      case `A_subdist_${index}`:
          if (typeof value === 'string' && value.trim().length < 3) {
              error = 'กรุณากรอกชื่อตำบลให้ถูกต้อง (อย่างน้อย 3 ตัวอักษร)';
          }
          break;
      case `A_dist_${index}`:
          if (typeof value === 'string' && value.trim().length < 3) {
              error = 'กรุณากรอกชื่ออำเภอให้ถูกต้อง (อย่างน้อย 3 ตัวอักษร)';
          }
          break;
      case `A_province_${index}`:
          if (typeof value === 'string' && value.trim().length < 3) {
              error = 'กรุณากรอกชื่อจังหวัดให้ถูกต้อง (อย่างน้อย 3 ตัวอักษร)';
          }
          break;
      case `A_post_${index}`:
          if (!/^\d{5}$/.test(value as string)) {
              error = 'กรุณากรอกรหัสไปรษณีย์ให้ถูกต้อง (5 ตัวเลข)';
          }
          break;
      case `A_tel_${index}`:
          if (!/^\d{9,10}$/.test(value as string) ) {
            error = 'กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง (9-10 ตัวเลข)';
          }
          break;
      default:
        break;
    }
  
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: error,
    }));
  };
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  
    validateField(name, value); // Keep validation call here.
  };
  

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setImage(selectedImage);
      setFormData({ ...formData, C_pic: selectedImage.name }); // Save the image name or other relevant info
      validateField('C_pic', selectedImage.name); // Validate the image after selection
    }
  };

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setLogo(selectedImage);
      console.log(logo)
      setFormData({ ...formData, C_logo: selectedImage.name }); // Save the image name or other relevant info
      validateField('C_logo', selectedImage.name); // Validate the image after selection
    }
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: string
  ) => {
    const { value } = e.target;
  
    setFormData((prevFormData: { C_address: any; }) => {
      const updatedAddresses = [...prevFormData.C_address];
      updatedAddresses[index] = {
        ...updatedAddresses[index],
        [field]: value,
      };
      return {
        ...prevFormData,
        C_address: updatedAddresses,
      };
    });
  
    validateField(field, value, index); // Call validation function
  };
  
  

  const handleOpenDialog = (event: any) => {
    event.preventDefault();
    console.log(formData)
    // Check if any errors exist or if reCAPTCHA is missing
    const hasErrors = Object.values(errors).some(error => error);
    
    // if (hasErrors || !recaptchaToken) {
    //   console.log(Object.values(errors))
    //   alert("กรุณากรอกข้อมูลให้ครบถ้วนและผ่านการตรวจสอบ reCAPTCHA");
    //   return;
    // }
    
    // Check if image is uploaded
    if (image === null) {
      alert("กรุณาอัพโหลดรูปภาพ"); // Alert if image is missing
      return;
    }

    if (logo === null) {
      alert("กรุณาอัพโหลดโลโก้"); // Alert if image is missing
      return;
    }
  
    setIsDialogOpen(true); // Open confirmation dialog if no errors and reCAPTCHA is checked
  };
  

  const handleCloseDialog = () => {
    console.log(formData)
    setIsDialogOpen(false); // Close dialog without submitting
  };

  const handleConfirmSubmit = async () => {
    // Validate that the form is complete before submission
    if (!formData.C_logo || !formData.C_pic) {
      alert("กรุณาอัพโหลดรูปภาพ");
      setIsDialogOpen(false);
      return;
    }
  
    // Check if required fields are empty
    if (
      !formData.C_name.trim() || 
      !formData.C_detail.trim() || 
      !selectedWorkTypes.length || 
      formData.C_address.some(address =>
        !address.A_address.trim() ||
        !address.A_subdist.trim() ||
        !address.A_dist.trim() ||
        !address.A_province.trim() ||
        !address.A_post.trim() ||
        !address.A_email.trim() ||
        !address.A_tel.trim()
      )
    ) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      setIsDialogOpen(false);
      return;
    }
  
    if (!recaptchaToken) {
      alert("กรุณายืนยันตัวตนด้วย reCAPTCHA");
      return;
    }
  
    try {
      const formDataObj = new FormData();
      formDataObj.append('C_name', formData.C_name);
      formDataObj.append('C_detail', formData.C_detail);
      formDataObj.append('P_id', '1'); // Dynamic P_id if needed
      formDataObj.append('C_pic', image);
      formDataObj.append('C_logo', logo);
      formDataObj.append('C_salary', formData.C_salary);
      selectedMajors.forEach((major: string | Blob, index: any) => {
          formDataObj.append(`C_major[${index}]`, major);
      });

      // Append multiple work types
      selectedWorkTypes.forEach((workType: string | Blob, index: any) => {
          formDataObj.append(`C_worktype[${index}]`, workType);
      });

      // Append multiple addresses
      formData.C_address.forEach((address: { A_address: string | Blob; A_subdist: string | Blob; A_dist: string | Blob; A_province: string | Blob; A_post: string | Blob; A_email: string | Blob; A_tel: string | Blob; }, index: any) => {
        formDataObj.append(`C_address[${index}][A_address]`, address.A_address);
        formDataObj.append(`C_address[${index}][A_subdist]`, address.A_subdist);
        formDataObj.append(`C_address[${index}][A_dist]`, address.A_dist);
        formDataObj.append(`C_address[${index}][A_province]`, address.A_province);
        formDataObj.append(`C_address[${index}][A_post]`, address.A_post);
        formDataObj.append(`C_address[${index}][A_email]`, address.A_email);
        formDataObj.append(`C_address[${index}][A_tel]`, address.A_tel);
        formDataObj.append(`C_address[${index}][A_coordinate]`, address.A_coordinate);
      });
  
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/create`, {
        method: 'POST',
        body: formDataObj,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        console.log(result);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
  
        // Reset form
        setFormData({
          C_name: '',
          C_salary: '',
          C_logo: '',
          C_pic: '',
          C_detail: '',
          C_address: [
            {
              A_address: '',
              A_subdist: '',
              A_dist: '',
              A_province: '',
              A_post: '',
              A_email: '',
              A_tel: '',
              A_coordinate: '',
            },
          ],
          C_major: [],
          C_worktype: []

        });
        setImage(null);
        setLogo(null);
        setRecaptchaToken(null);
        setIsDialogOpen(false);
        setSelectedMajors([]);
        setSelectedWorkTypes([]);
        scrollToTop();
      } else {
        throw new Error(result.message || 'เกิดข้อผิดพลาดในการส่งข้อมูล');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'เกิดข้อผิดพลาดในการส่งข้อมูล');
      setIsDialogOpen(false);
    }
  };
  
  const handleRecaptchaChange = (token: any) => {
    console.log("formData")
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
          <Typography variant="h4" sx={{ fontFamily: 'Prompt', marginBottom: 4, display: 'flex', justifyContent: 'center',fontSize:{xs:'24px',sm:'32px',md:'36px'}}}>
            จัดหางาน
          </Typography>
          
          <form onSubmit={handleOpenDialog}>
            <Grid container spacing={3}>
              <Grid size={12}>
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
              <Grid size={12}>
                <StyledTextField
                  id="C_salary"
                  label="เงินเดือน (เช่น 500-1000 บาท/เดือน)"
                  name="C_salary"
                  value={formData.C_salary}
                  onChange={handleChange}
                  error={!!errors.C_salary}
                  helperText={errors.C_salary}
                />
              </Grid>
              <Grid size={12}>
                <MultipleSelectChip
                  label="ชนิดงาน (สหกิจศึกษา หรือฝึกงาน) *"
                  options={companyWorkTypes}
                  value={selectedWorkTypes}
                  onChange={handleWorkTypeChange}
                />
              </Grid>
              <Grid size={12}>
                <MultipleSelectChip
                  label="สาขาที่เปิดรับ *"
                  options={companyMajors}
                  value={selectedMajors}
                  onChange={handleMajorChange}
                />
              </Grid>
        
                {formData.C_address.map((address: { A_address: string; A_subdist: string; A_dist: string; A_province: string; A_post: string; A_email: string; A_tel: string; A_coordinate: string; }, index: number) => (
                  <React.Fragment key={`address_${index}`}>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_address_${index}`}
                        label={`ที่อยู่ ${index + 1}`}
                        name={`C_address[${index}].A_address`}
                        value={address.A_address}
                        onChange={(e) => handleAddressChange(e, index, 'A_address')}
                        error={!!errors[`A_address_${index}`]}
                        helperText={errors[`A_address_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_subdist_${index}`}
                        label="ตำบล"
                        name={`C_address[${index}].A_subdist`}
                        value={address.A_subdist}
                        onChange={(e) => handleAddressChange(e, index, 'A_subdist')}
                        error={!!errors[`A_subdist_${index}`]}
                        helperText={errors[`A_subdist_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_dist_${index}`}
                        label="อำเภอ"
                        name={`C_address[${index}].A_dist`}
                        value={address.A_dist}
                        onChange={(e) => handleAddressChange(e, index, 'A_dist')}
                        error={!!errors[`A_dist_${index}`]}
                        helperText={errors[`A_dist_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_province_${index}`}
                        label="จังหวัด"
                        name={`C_address[${index}].A_province`}
                        value={address.A_province}
                        onChange={(e) => handleAddressChange(e, index, 'A_province')}
                        error={!!errors[`A_province_${index}`]}
                        helperText={errors[`A_province_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_post_${index}`}
                        label="รหัสไปรษณีย์"
                        name={`C_address[${index}].A_post`}
                        value={address.A_post}
                        onChange={(e) => handleAddressChange(e, index, 'A_post')}
                        error={!!errors[`A_post_${index}`]}
                        helperText={errors[`A_post_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>      
                      <StyledTextField
                        id={`A_email_${index}`}
                        label="อีเมล"
                        name={`C_address[${index}].A_email`}
                        value={address.A_email}
                        onChange={(e) => handleAddressChange(e, index, 'A_email')}
                        error={!!errors[`A_email_${index}`]}
                        helperText={errors[`A_email_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_tel_${index}`}
                        label="เบอร์โทรศัพท์"
                        name={`C_address[${index}].A_tel`}
                        value={address.A_tel}
                        onChange={(e) => handleAddressChange(e, index, 'A_tel')}
                        error={!!errors[`A_tel_${index}`]}
                        helperText={errors[`A_tel_${index}`]}
                      />
                    </Grid>
                    <Grid size={12}>
                      <StyledTextField
                        id={`A_coordinate_${index}`}
                        label="ผู้ติดต่อประสานงาน"
                        name={`C_address[${index}].A_coordinate`}
                        value={address.A_coordinate}
                        onChange={(e) => handleAddressChange(e, index, 'A_coordinate')}
                        error={!!errors[`A_coordinate_${index}`]}
                        helperText={errors[`A_coordinate_${index}`]}
                      />
                    </Grid>
                  </React.Fragment>
                ))}
              <Grid size={12}>
                <StyledTextField
                  id="C_detail"
                  label="รายละเอียดเพิ่มเติม"
                  name="C_detail"
                  value={formData.C_detail}
                  onChange={handleChange}
                  multiline
                  rows={4}
               
                  defaultValue="Line1\nLine2\nLine3\nLine4"
                />
              </Grid>


              <Grid size={12}>
                <Button
                  variant="outlined"
                  component="label"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: '30px',
                  }}
                >
                  <Typography variant="body2" sx={{fontFamily:'Prompt' }}>
                    อัพโหลดรูปภาพโลโก้บริษัท
                  </Typography>
                  
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleLogoChange}
                  />
                </Button>
                {logo && (
                  <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
                    {`Selected Image: ${logo.name}`}
                  </Typography>
                )}
                {logo && (
                  <Box sx={{ marginTop: 2 }}>
                    <img
                      src={URL.createObjectURL(logo)}
                      alt="Preview"
                      style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                    />
                  </Box>
                )}
              </Grid>
              <Grid size={12}>
                <Button
                  variant="outlined"
                  component="label"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: '30px',
                  }}
                >
                  <Typography variant="body2" sx={{fontFamily:'Prompt' }}>
                    อัพโหลดโปสเตอร์ประชาสัมพันธ์
                  </Typography>
                  
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
              <Grid size={12}>
                
                <ReCAPTCHA
                  sitekey="6Lf5mXcqAAAAAIm3fMPKT6ArErnl8OA_0yAiShx_" // replace with your reCAPTCHA site key
                  onChange={handleRecaptchaChange}
             

                />
              </Grid>
              {/* <Grid size={12}>
                <AddressForm/>
              </Grid> */}
              
              <Grid size={12}>
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
            <DialogContentText variant="h6" sx={{ fontFamily: 'Prompt' }}>
              โปรดตรวจสอบข้อมูลทั้งหมดก่อนที่จะส่ง
            </DialogContentText>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">ชื่อบริษัท: {formData.C_name}</Typography>
              <Typography variant="h6">เงินเดือน: {formData.C_salary}</Typography>
              <Typography variant="h6">ที่อยู่บริษัท: {formData.C_address[0]?.A_address} {formData.C_address[0]?.A_subdist} {formData.C_address[0]?.A_dist} {formData.C_address[0]?.A_province} {formData.C_address[0]?.A_post}</Typography>
              <Typography variant="h6">อีเมล: {formData.C_address[0]?.A_email}</Typography>
              <Typography variant="h6">เบอร์โทรศัพท์: {formData.C_address[0]?.A_tel}</Typography>
              <Typography variant="h6">ผู้ติดต่อประสานงาน: {formData.C_address[0]?.A_coordinate}</Typography>
              <Box>
                {/* Display Selected Majors */}
                <Typography variant="h6">สาขาที่เปิดรับ:</Typography>
                {selectedMajors.map((major, index) => (
                  <Typography key={index}>- {major}</Typography>
                ))}

                {/* Display Selected Work Types */}
                <Typography variant="h6" >ชนิดงาน:</Typography>
                {selectedWorkTypes.map((workType, index) => (
                  <Typography sx={{fontFamily: 'Prompt',}} key={index}>- {workType}</Typography>
                ))}
              </Box>

              <Typography variant="h6">รายละเอียดเพิ่มเติม: </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre-line', // Preserve line breaks and newlines
                  fontFamily: 'Prompt',   // Optional: Set the font if necessary
                }}
              >
                {formData.C_detail}
              </Typography>

              
              {logo && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={URL.createObjectURL(logo)}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </Box> 
               )}
               <Typography variant="h6" sx={{display:'flex',justifyContent:'center'}}>รูปภาพโลโก้</Typography>
              {image && (
                <Box sx={{ mt: 2 }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </Box> 
               )} 
                <Typography variant="h6" sx={{display:'flex',justifyContent:'center'}}>รูปภาพโปสเตอร์</Typography>
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
