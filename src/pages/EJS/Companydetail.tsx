import { useParams } from 'react-router-dom';
import { Box, Typography, Card, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface Company {
  id: number;
  C_pic: string;
  C_name: string;
  C_detail: string;
  // Add other fields as needed
}

function CompanyDetails() {
  const { id } = useParams<{ id: string }>(); // Extract the company ID from the URL
  const [company, setCompany] = useState<Company | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/getcompany/${id}`);
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar status={false} />
      
    <Box sx={{ padding: 4 ,mt:20,mb:10}}>
        <Button  variant="contained" color="error"onClick={() => navigate(`/apply-job`)} sx={{colorAdjust:'red'}}>Back</Button>
      <Card sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ fontFamily: 'Prompt', marginBottom: 2 }}>
          {company.C_name}
        </Typography>
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          {company.C_pic && (
            <img
              src={company.C_pic}
              alt={company.C_name}
              style={{ width: '100%', objectFit: 'scale-down' }}
            />
          )}
        </Box>
        <Typography variant="h6" sx={{ fontFamily: 'Prompt' }}>
          รายละเอียดเพิ่มเติม : 
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Prompt', whiteSpace: 'pre-wrap',ml:2 }}>
          {company.C_detail}
        </Typography>
        {/* Add other fields like address, email, etc., if needed */}
      </Card>
    </Box>
    <Footer />
    </div>
  );
}

export default CompanyDetails;
