import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Grid from '@mui/material/Grid2';
import { Box, Card, Pagination, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
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

function FindJob() {
  const [companyData, setCompanyData] = useState<Company[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Pagination state
  const itemsPerPage = 5; // Number of items to display per page
  const navigate = useNavigate(); 
  const [selectedMajors, setSelectedMajors] = useState<string[] >([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
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

  const fetchCompanyData = async () => {
    try {
      // Build query parameters
      const queryParams = new URLSearchParams();
      if (selectedMajors.length > 0) {
        queryParams.append('majors', selectedMajors.join(','));
      }
      if (selectedWorkTypes.length > 0) {
        queryParams.append('workTypes', selectedWorkTypes.join(','));
      }
      if (searchTerm.trim()) {
        queryParams.append('search', searchTerm.trim());
      }
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/company/showfillter?${queryParams.toString()}`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setCompanyData(data.data); // Update the company data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data whenever filters or page change
  useEffect(() => {
    console.log(searchTerm);
    fetchCompanyData();
  }, [selectedMajors, selectedWorkTypes,searchTerm]);
  

  // Calculate the displayed companies based on current page
  const displayedCompanies = companyData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    // Scroll to the top of the page when pagination is changed
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCardClick = (company: Company) => {
    navigate(`/company/${company.id}`, { state: { company } }); // Pass the company data as state
  };
  
  const handleMajorChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedMajors(event.target.value);
  };

  const handleWorkTypeChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedWorkTypes(event.target.value);
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
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
        <Box sx={{mt:2}}>
        <Card sx={{padding:5,mb:6,border: "1px solid #ccc",boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.3)"}}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Typography  sx={{display:'flex',justifyContent:'center',fontFamily:'Prompt',fontWeight:450,fontSize:{xs:'16px',sm:'22px',md:'26px'}}}>กรองข้อมูล</Typography>
            </Grid>
              <Grid size={12}>
                <StyledTextField
                  id="search"
                  label="กรุณากรอกชื่อบริษัทที่ต้องการค้นหา"
                  name="search"
                  value={searchTerm}
                  onChange={handleChange}
                
                />
              </Grid>
              <Grid size={12}>
                <MultipleSelectChip
                  label="ชนิดงาน (สหกิจศึกษา หรือฝึกงาน)"
                  options={companyWorkTypes}
                  value={selectedWorkTypes}
                  onChange={handleWorkTypeChange}
                />
              </Grid>
              <Grid size={12}>
                <MultipleSelectChip
                  label="สาขาที่เปิดรับ"
                  options={companyMajors}
                  value={selectedMajors}
                  onChange={handleMajorChange}
                />
              </Grid>
              </Grid>
          </Card>
        <Grid 
          container 
          spacing={4}
          sx={{
            width:'100%',
            justifyContent: 'center',  // Center the grid items horizontally
            alignItems: 'center',      // Center the grid items vertically
               // Ensure the container takes full viewport height
          }}
        >

          {companyData.length === 0 && <Typography sx={{fontFamily:'Prompt',mt:10,fontSize:{xs:'20px',sm:'24px',md:'28px'}}}>ไม่พบข้อมูลสถานประกอบการ</Typography>}
          
          {displayedCompanies.map((company, index) => (
            <Grid size={{xs:12,sm:6,md:5,lg:4}} key={company.C_id}>
             <Card
                sx={{
                  width: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
                  height: '370px',
                  marginBottom: 2,
                  boxShadow: 3,
                  padding: 2,
                  display: 'flex',
                  cursor: 'pointer', // Change cursor to pointer
                  transition: 'transform 0.3s ease', // Smooth transition for scaling
                  '&:hover': {
                    transform: 'scale(1.05)', // Increase card size slightly on hover
                    boxShadow: 6, // Optional: Increase box shadow for hover effect
                  },
                }}
                onClick={() => navigate(`/apply-job/${company.C_id}`)}
              >
                <Grid container>
                  {/* Work Type Chips */}
                  <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        justifyContent: 'flex-end',
                        width: '100%',
                        marginTop: 0.5,
                      }}
                    >
                      {company.C_companyWorkType.map((workType, idx) => (
                        <Chip
                          key={idx}
                          label={workType}
                          variant="outlined"
                          size="small"
                          color="success"
                        />
                      ))}
                    </Stack>
                  </Grid>

                  {/* Logo */}
                  <Grid
                    size={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: '170px',
                        height: '170px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: 3,
                      }}
                    >
                      <img
                        src={company.C_logo}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Company Name */}
                  <Grid
                    size={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt: 2,
                    }}
                  >
                    <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Prompt',
                      fontSize: { xs: 20, sm: 20 },
                      whiteSpace: 'pre-line', 
                      wordBreak: 'break-word', 
                      textAlign: 'center', 
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden', 
                      WebkitLineClamp: 2,  
                      textOverflow: 'ellipsis',
                      maxWidth: '90%', 
                    }}
                  >
                      {company.C_name}
                    </Typography>
                  </Grid>

                  {/* Salary */}
                  <Grid
                    size={12}
                    sx={{
                      mt: 1,
                      ml: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Prompt',
                        fontSize: { xs: 16, sm: 16 },
                      }}
                    >
                      {company.C_salary}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',mt:1}}>
        <Pagination
            count={Math.ceil(companyData.length / itemsPerPage)} // Total pages
            page={page}
            onChange={handlePageChange}
            sx={{ marginTop: 2 ,justifyContent:'center',alignItems:'center'}}
          />
      </Box>  
      <Box sx={{display:'flex',justifyContent:'center',mt:1}}>
         <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%',mt:10 }}></Box>
      </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default FindJob;
