import { useParams } from 'react-router-dom';
import { Box, Typography, Card, Button, Stack, Chip } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

interface Company {
  id: number;
  C_pic: string;
  C_name: string;
  C_detail: string;
  C_companyWorkType: string[];
  Address: Array<any>; // Adjust according to your data structure
  C_companyMajor: string[];
}

function CompanyDetails() {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/company/getcompany/${id}`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCompany(data.data); // Assuming the API returns the company data
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  if (!company) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Navbar status={false} />

      <Box
        sx={{
          
          width: '100%',
          bgcolor: '#FA8072',
          mt: '125px',
          paddingLeft: { xs: 6, sm: 10, md: 22 },
          paddingTop: { xs: 6, sm: 10, md: 10 },
          paddingBottom: { xs: 6, sm: 10, md: 10 },
        }}
      >
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Typography variant="body2" sx={{ fontFamily: 'Prompt', fontSize: '16px' }}>
                หน้าหลัก
              </Typography>
            </Link>
            <Link underline="hover" color="inherit" href="/apply-job">
              <Typography variant="body2" sx={{ fontFamily: 'Prompt', fontSize: '16px' }}>
                สมัครงาน(บุคลากร/นักศึกษา)
              </Typography>
            </Link>
            <Link underline="hover" color="inherit">
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Prompt',
                  fontSize: '16px',
                  maxWidth: '200px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  color: 'white',
                }}
              >
                {company.C_name} 
              </Typography>
            </Link>
          </Breadcrumbs>

          {/* Work Type Chips */}
          <Grid container>
            <Grid size={12} sx={{ display: 'flex', mt: 4 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: 'left',
                  width: '100%',
                  marginTop: 0.5,
                }}
              >
                {company.C_companyWorkType.map((workType, idx) => (
                  <Chip key={idx} label={workType} variant="filled" size="medium" color="success" />
                ))}
              </Stack>
            </Grid>

            <Grid size={12}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Prompt',
                  fontSize: { xs: 20, sm: 30 },
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  textAlign: 'left',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontWeight: 600,
                  textOverflow: 'ellipsis',
                  maxWidth: '90%',
                  color: 'white',
                  mt: 1,
                }}
              >
                {company.C_name}
              </Typography>
            </Grid>

            <Grid container>
            {/* First Line: LocationOnIcon on the left, Address on the right */}
            <Grid size={12} sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ color: '#E9EAEC', marginRight: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Prompt',
                  fontSize: { xs: 14, sm: 20 },
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  textAlign: 'left',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontWeight: 600,
                  textOverflow: 'ellipsis',
                  maxWidth: '90%',
                  color: '#E9EAEC',
                }}
              >
                {company.Address[0]?.A_dist} {company.Address[0]?.A_province}
              </Typography>
            </Grid>

            {/* Second Line: Address on the left, LocationOnIcon on the right */}
           
          </Grid>

            <Grid size={12}>
              <Typography variant="inherit" sx={{ fontFamily: 'Prompt', fontSize: 14, fontWeight: 'normal', color: '#E9EAEC', mt: 1 }}>
                สาขาที่เปิดรับ
              </Typography>
            </Grid>

            <Grid size={12} sx={{ display: 'flex', mt: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: 'flex-start', // Align chips to the left
                  width: '90%',
                  flexWrap: 'wrap', // Allow wrapping to the next line when there's no space
                  gap: '10px', // Adjust the gap between rows and columns of chips
                }}
              >
                {company.C_companyMajor.map((major, idx) => (
                  <Chip
                    key={idx}
                    label={major}
                    variant="filled"
                    size="medium"
                    color="warning"
                  />
                ))}
              </Stack>
            </Grid>


          </Grid>
        </Box>
      </Box>

      {/* New Section with White Background for Image and Details */}
      <Card
        sx={{
          backgroundColor: 'white',
          width: '80%',
          marginTop: 4,
          padding: 3,
          borderRadius: 2,
          boxShadow: 4, // Optional: Adds some shadow effect to the container
          mb:4
        }}
      >
        <Grid container spacing={4}>
          {/* Company Image */}
          <Grid size={{xs:12}} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}>
              <img src={company.C_pic} alt={company.C_name} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>
          </Grid>

          {/* Company Details */}
          <Grid size={{xs:12}}>
            <Typography
              variant="h5"
                sx={{
                  fontFamily: 'Prompt',
                  fontSize: { xs: 20, sm: 30 },
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  textAlign: 'left',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  fontWeight: 600,
                  textOverflow: 'ellipsis',
                  maxWidth: '90%',
                  color: '#333',
                  mt: 1,
                }}
            >
              {company.C_name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Prompt',
                fontSize: {xs:16,sm:18},
                color: '#555',
                whiteSpace: 'pre-line',
                wordBreak: 'break-word',
              }}
            >
              {company.C_detail}
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Card
  sx={{
    backgroundColor: 'white',
    width: '80%',
    marginTop: 0,
    padding: 3,
    borderRadius: 2,
    boxShadow: 4, // Optional: Adds some shadow effect to the container
    mb: 4,
  }}
>
  <Grid container spacing={4}>
    {/* Additional Information Section */}
    {company.Address.length > 0 && (
      <Grid size={12}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Prompt',
            fontWeight: 600,
            fontSize: 20,
            color: '#333',
            marginBottom: 4,
          }}
        >
          ข้อมูลเพิ่มเติม
        </Typography>
    

        {company.Address.map((address, idx) => (
          <Box key={idx} sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
            <LocationOnIcon sx={{ marginRight: 1 }} />
            <Typography variant="body2" sx={{ fontFamily: 'Prompt',fontSize: {xs:16,sm:18}, color: '#555' }}>
              {address.A_address} {address.A_subdist} {address.A_dist} {address.A_province} {address.A_post}
            </Typography>
          </Box>
        ))}
      </Grid>
    )}

    {/* Email Section */}
    {company.Address.length > 0 && (
      <Grid size={{xs:12,sm:6}} sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
        <MailIcon sx={{ marginRight: 1 }} />
        <Typography variant="body2" sx={{ fontFamily: 'Prompt', fontSize: {xs:16,sm:18}, color: '#555' }}>
          {company.Address[0]?.A_email}
        </Typography>
      </Grid>
    )}

    {/* Phone Section */}
    {company.Address.length > 0 && (
      <Grid size={{xs:12,sm:6}} sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ marginRight: 1 }} />
        <Typography variant="body2" sx={{ fontFamily: 'Prompt', fontSize: {xs:16,sm:18}, color: '#555' }}>
          {company.Address[0]?.A_tel}
        </Typography>
      </Grid>
    )}

    {/* Coordinates Section */}
    <Grid size={{xs:12,sm:6}} sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
      <PersonIcon sx={{ marginRight: 1 }} />
      <Typography variant="body2" sx={{ fontFamily: 'Prompt', fontSize: {xs:16,sm:18}, color: '#555' }}>
        {company.Address[0]?.A_coordinate}
      </Typography>
    </Grid>

    {/* Salary Section */}
    <Grid size={{xs:12,sm:6}} sx={{ marginBottom: 1, display: 'flex', alignItems: 'center' }}>
      <MonetizationOnIcon sx={{ marginRight: 1 }} />
      <Typography variant="body2" sx={{ fontFamily: 'Prompt', fontSize: {xs:16,sm:18}, color: '#555' }}>
        {company.C_salary}
      </Typography>
    </Grid>
  </Grid>
</Card>


      <Footer />
    </div>
  );
}

export default CompanyDetails;
