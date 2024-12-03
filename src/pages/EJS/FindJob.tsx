import { Box, Card, Typography, Pagination, Grid } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


interface Company {
  id: number;
  C_pic: string;
  C_name: string;
  C_detail: string;
  // Add other fields here as needed (e.g., C_address, C_email, etc.)
}


function FindJob() {
  const [companyData, setCompanyData] = useState<Company[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Pagination state
  const itemsPerPage = 5; // Number of items to display per page
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/PASS`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCompanyData(data.data);
      } catch {
      //   setError(error.message);
      // } finally {
      //   setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  // Calculate the displayed companies based on current page
  const displayedCompanies = companyData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = ( value:any) => {
    setPage(value);

    // Scroll to the top of the page when pagination is changed
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  const handleCardClick = (company: Company) => {
    navigate(`/company/${company.id}`, { state: { company } }); // Pass the company data as state
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar status={false} />
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: { xs: "370px", sm: "700px", md: "800px", lg: "1000px" },
          marginTop: "125px",
          padding: "20px",
          boxSizing: "border-box",
          color: "#333",
      }}>
        <div className="text-topic" style={{ marginTop: "10%" }}>
          สมัครงาน(บุคลากร/นักศึกษา)
        </div>
        <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
        
        {/* Display companies with pagination */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          {displayedCompanies.map((company) => (
            <Card key={company.id} sx={{ width: '90%', marginBottom: 2,boxShadow: 3,}} onClick={() => navigate(`/apply-job/${company.id}`)} >
              <Grid container >
                <Grid item xs={12} sm={6} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {company.C_pic && (
                      <img
                        src={company.C_pic}
                        alt={company.C_name}
                        loading="lazy"
                        style={{ width: '100%', height: '100%'
                          ,maxHeight:'500px',maxWidth:'354px'
                          ,objectFit:'scale-down',padding:15 }}
                      />
                    )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    padding: 2,
                    maxHeight: '500px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 10, // Adjust the number of lines to fit within 500px
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: 'Prompt', fontSize: { xs: 20, sm: 20 } }}>
                    {company.C_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Prompt',
                      whiteSpace: 'pre-wrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 16, // Adjust based on the content and font size
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {company.C_detail}
                  </Typography>
                </Grid>

              </Grid>
              
           
                
                
                {/* <Typography variant="body2"  sx={{fontFamily:'Prompt'}}>ที่อยู่บริษัท:{company.C_address}</Typography>
                <Typography variant="body2"  sx={{fontFamily:'Prompt'}}>อีเมลบริษัท:{company.C_email}</Typography>
                <Typography variant="body2"  sx={{fontFamily:'Prompt'}}>เบอร์ติดต่อ:{company.C_tel}</Typography> */}
           
            </Card>
          ))}
        </Box>
        <Grid>
          
        </Grid>
        {/* <Grid item xs={8}  >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
            {displayedCompanies.map((company) => (
              <Card key={company.id} sx={{ width: '100%', marginBottom: 2}}>
                <CardContent>
                  <Typography variant="h6" sx={{fontFamily:'Prompt'}}>ชื่อบริษัท:{company.C_name}</Typography>
                  <Typography variant="body2"  sx={{fontFamily:'Prompt'}} style={{ whiteSpace: 'pre-line' }}>{company.C_detail}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid> */}
        

        {/* Pagination control */}
        <Pagination
          count={Math.ceil(companyData.length / itemsPerPage)} // Total pages
          page={page}
          onChange={handlePageChange}
          sx={{ marginTop: 2 ,justifyContent:'center',alignItems:'center'}}
        />

<Box sx={{ flexGrow: 1, padding: 2 }}>
  <Grid container spacing={2}>
    {displayedCompanies.map((company) => (
      <Grid item xs={12} sm={6} key={company.id}>
        <Card sx={{ height: '100%' }}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              {company.C_pic && (
                <img
                  src={company.C_pic}
                  alt={company.C_name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'scale-down', padding: 10 }}
                />
              )}
            </Grid>
            <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    padding: 2,
                    maxHeight: '500px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 10, // Adjust the number of lines to fit within 500px
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: 'Prompt', fontSize: { xs:14, sm: 16 } }}>
                    {company.C_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Prompt',
                      whiteSpace: 'pre-wrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 5, // Adjust based on the content and font size
                      WebkitBoxOrient: 'vertical',
                      fontSize: { xs:14, sm: 16 }
                    }}
                  >
                    {company.C_detail}
                  </Typography>
                </Grid>

          </Grid>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

        <Box 
            sx={{
              borderBottom: '4px solid #801111',
              marginBottom: '60px',
              marginTop: '30%',
              width: '40%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
        ></Box>
      </Box>
      <Footer />
    </div>
  );
}

export default FindJob;
