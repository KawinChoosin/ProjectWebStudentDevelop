import React, { useState, useEffect } from 'react';
import Navbar from '../../../component/NavbarAdmin';
import Footer from '../../../component/Footer';
import { Box, Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, MenuItem, Select } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid2'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';


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


function Company() {
  const [companyData, setCompanyData] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('WAIT'); // Default status is 'WAIT'
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>({
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
  const [delopen,setDelopen] = useState(false);
  const [currentiddel,setCurrentiddel] = useState<number | null>(null);
  const [countpass,setCountpass] = useState<number | null>(null);
  const [countwait,setCountwait] = useState<number | null>(null);

  const handleOpenDialog = (company: any) => {
    setSelectedCompany(company);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCompany(null);
  };

  const handleOpendelete = (id:number) => {
    setCurrentiddel(id);
    setDelopen(true);
  };

  const handleClosedelete = () => {
    setDelopen(false);
    setCurrentiddel(null);
  };


  const cardStyles = (cardStatus:any) => ({
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 3,
  backgroundColor:
    cardStatus === 'WAIT' ? 'gray' :
    cardStatus === 'PASS' ? 'green' :
    cardStatus === 'DELETE' ? 'red' :
    cardStatus === status ? 'rgba(0, 0, 0, 0.6)' : undefined,
  '&:hover': {
    boxShadow: 6
  },
  color: cardStatus === 'WAIT' || cardStatus === 'PASS' || cardStatus === 'DELETE' || cardStatus === status ? '#fff' : 'inherit'
});


  const fetchCompanyData = async (status:any) => {
    try {
      let url = `${import.meta.env.VITE_BACKEND_URL}/company`;  // Set default URL
      
      // Dynamically append the status to the URL based on the status passed in
      if (status === "PASS") {
        url += "/PASS";
      } else {
        url += "/WAIT";  // Default to "WAIT" status if no specific status
      }
  
      // Fetch the data from the API
      const response = await fetch(url);
      const pass=`${import.meta.env.VITE_BACKEND_URL}/company/PASS`;
      const wait=`${import.meta.env.VITE_BACKEND_URL}/company/WAIT`;
      const countpass= await fetch(pass);
      const countwait= await fetch(wait);
      const datapass = await countpass.json();
      const datawait = await countwait.json();
      setCountpass(datapass.data.length);
      setCountwait(datawait.data.length);
    
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setCompanyData(data.data);  // Update state with the fetched data
  
    } catch (error) {
      setError(error.message);  // Handle errors
    } finally {
      setLoading(false);  // Set loading state to false once the fetch is done
    }
  };
  
  // Fetch data on mount or when status changes
  useEffect(() => {
    fetchCompanyData(status);

  }, [status,companyData]);  // Dependency array ensures it refetches when status changes
  
  const handlechangeStatus = async (id: number, newStatus: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/update-show-status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, show_status: newStatus }), // Send newStatus to backend
      });
      const data = await response.json();
      if (data.success) {
        setCompanyData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, show_status: newStatus } : item
          )
        );
      }
    } catch (error) {
      console.error('Error updating show_status:', error);
    }
  };

  const handleDeleteCompany = async (id:any) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }), // Send the ID of the company to delete
      });
      const data = await response.json();
      
      if (data.success) {
        setCompanyData((prevData) => prevData.filter((item) => item.id !== id));
      } else {
        console.error('Failed to delete company:', data.message);
      }
    } catch (error) {
      console.error('Error deleting company:', error);
    }
  };
  

  const handleSwapIndices = async (rowId: number, direction: 'up' | 'down') => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/company/swap-index`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rowId, direction }),
      });
      const data = await response.json();
      if (data.success) {
        setCompanyData(data.data);
      }
    } catch (error) {
      console.error('Error swapping indices:', error);
    }
  };

  const handleTypeClick = (newStatus:any) => {
    setStatus(newStatus);
    setLoading(true);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'actions',
      headerName: <Typography sx={{ fontFamily: 'Prompt'}}>Move</Typography>,
      width: 230,
      
      renderCell: (params) => (
        <div>
          <Button onClick={() => handleSwapIndices(params.row.id, 'up')}><KeyboardDoubleArrowUpIcon/></Button>
          <Button onClick={() => handleSwapIndices(params.row.id, 'down')}><KeyboardDoubleArrowDownIcon/></Button>
          <Button onClick={() => handleOpendelete(params.row.id)} color="error">
          <DeleteIcon/>
          </Button>
        </div>
      ),
    },
    // { field: 'index', headerName: <Typography variant="paragraph" sx={{ fontFamily: 'Prompt'}}>ลำดับ</Typography>, width: 90 },
    {
      field: 'C_name',
      headerName: <Typography sx={{ fontFamily: 'Prompt'}}>ชื่อบริษัท</Typography>,
      width: 200,
      renderCell: (params) => (
        <Typography
          variant="inherit"
          onClick={() => handleOpenDialog(params.row)} // Open dialog with selected company data
          sx={{ fontFamily: 'Prompt', cursor: 'pointer', textDecoration: 'underline' }}
        >
          {params.value}
        </Typography>
      ),

    },
    
    // { field: 'C_address', headerName: <Typography variant="paragraph" sx={{ fontFamily: 'Prompt'}}>ที่อยู่</Typography>, width: 200 },
    // { field: 'C_email', headerName: <Typography variant="paragraph" sx={{ fontFamily: 'Prompt'}}>อีเมล</Typography>, width: 200 },
    {
      field: 'C_pic',
      headerName: <Typography  sx={{ fontFamily: 'Prompt'}} >รูปภาพโปสเตอร์</Typography>,
      width: 150,
      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1976d2', textDecoration: 'underline' }}
        >
          ดูรูป
        </a>
      ),
    },
    // { field: 'C_tel', headerName: <Typography variant="paragraph" sx={{ fontFamily: 'Prompt'}}>เบอร์โทรศัพท์</Typography>, width: 150 },
    // { field: 'C_detail', headerName:<Typography variant="paragraph" sx={{ fontFamily: 'Prompt'}}>รายละเอียด</Typography>, width: 100 },
    {
      field: 'status',
      headerName: <Typography sx={{ fontFamily: 'Prompt'}}>สถานะ</Typography>,
      width: 150,
      renderCell: (params) => (
        <Select
          value={params.row.show_status} // Use show_status from data
          onChange={(e) => handlechangeStatus(params.row.id, e.target.value)} // Update status on change
          label="Status"
          sx={{ height: '85%' }}
          defaultValue={status}
        >
          <MenuItem value="WAIT">รอตรวจสอบ</MenuItem>
          <MenuItem value="PASS">อนุมัติ</MenuItem>
          {/* <MenuItem value="DELETE">ลบ</MenuItem> */}
        </Select>
      ),

      
    },


    
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' ,justifyContent:'center'}}>
      <Navbar status={true} />
      <Box
        sx={{
          padding:'4',
          height: 800,
          width: '100%',
          marginTop: '125px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',  // Centers items horizontally
        }}
      >
       <Typography variant="h4" sx={{ fontFamily: 'Prompt', marginBottom: 4, display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          Company Details
        </Typography>
        <Box sx={{ padding: 4 }}>
          <Grid container spacing={2}>
            <Grid size={6} display="flex" justifyContent="center" alignItems="center">
              <Badge badgeContent={countwait} color="secondary">
                <Button 
                  onClick={() => handleTypeClick('WAIT')}
                  variant="outlined"
    
                  sx={{
                    width: '300px',
                    height: '100px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3,
                    color:status === 'WAIT' ? '#5B171E': '',
                    bgcolor: status === "WAIT" ? '#C0C0C0' : 'initial',
                    '&:hover': {
                      boxShadow: 6
                    }
                
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: 'Prompt', display: 'flex', justifyContent: 'center'}}>รอตรวจสอบ</Typography>
                </Button>
              </Badge>
            </Grid>

            <Grid size={6} display="flex" justifyContent="center" alignItems="center">
            <Badge badgeContent={countpass} color="success">
              <Button
                onClick={() => handleTypeClick('PASS')}
                variant="outlined"
                color='success'
                sx={{
                  width: '300px',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: 3,
                  color:status === 'PASS' ? '#5B171E': '',
                  bgcolor: status === "PASS" ? '#C0C0C0' : 'initial',
                  '&:hover': {
                    boxShadow: 6
                  }
              
                }}
              >
                <Typography variant="h6" sx={{ fontFamily: 'Prompt', display: 'flex', justifyContent: 'center'}}>อนุมัติ</Typography>
              </Button>
              </Badge>
            </Grid>
         
          </Grid>
        </Box>

        <Box sx={{ maxHeight: 600, width: '80%', padding: 4 }}>
        <DataGrid
        rows={companyData}
        columns={columns}
        getRowId={(row) => row.C_id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
        </Box>
      </Box>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth sx={{ mt: '10%' }}>
  <DialogTitle sx={{ fontFamily: 'Prompt' }}>รายละเอียด</DialogTitle>
  <DialogContent dividers sx={{ maxHeight: 400, overflowY: 'auto' }}>
    {selectedCompany && (
       <Box sx={{ mt: 2 }}>
              <Typography variant="h6">ชื่อบริษัท: {selectedCompany.C_name}</Typography>
              <Typography variant="h6">เงินเดือน: {selectedCompany.C_salary}</Typography>
              <Typography variant="h6">ที่อยู่บริษัท: {selectedCompany.C_address[0]?.A_address} {selectedCompany.C_address[0]?.A_subdist} {selectedCompany.C_address[0]?.A_dist} {selectedCompany.C_address[0]?.A_province} {selectedCompany.C_address[0]?.A_post}</Typography>
              <Typography variant="h6">อีเมล: {selectedCompany.C_address[0]?.A_email}</Typography>
              <Typography variant="h6">เบอร์โทรศัพท์: {selectedCompany.C_address[0]?.A_tel}</Typography>
              <Typography variant="h6">ผู้ติดต่อประสานงาน: {selectedCompany.C_address[0]?.A_coordinate}</Typography>
             

              <Typography variant="h6">รายละเอียดเพิ่มเติม: </Typography>
              <Typography>  {selectedCompany.C_detail}</Typography>
                <Box sx={{ mt: 2 }}>
                  <img
                    src={selectedCompany.C_logo}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </Box> 
               <Typography variant="h6" sx={{display:'flex',justifyContent:'center'}}>รูปภาพโลโก้</Typography>
                <Box sx={{ mt: 2 }}>
                  <img
                    src={selectedCompany.C_pic}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
                  />
                </Box> 
                <Typography variant="h6" sx={{display:'flex',justifyContent:'center'}}>รูปภาพโปสเตอร์</Typography>
            </Box>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseDialog} color="secondary">
      ปิด
    </Button>
  </DialogActions>
</Dialog>

<Dialog
        open={delopen}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClosedelete}
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
        if (currentiddel !== null) {
          handleDeleteCompany(currentiddel);
        }
        handleClosedelete();
      }}
     >ลบ</Button>
          <Button onClick={handleClosedelete}>ยกเลิก</Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </div>
  );
}

export default Company;
