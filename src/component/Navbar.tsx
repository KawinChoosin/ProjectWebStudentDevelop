import { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import logoNav from '../component/logo-nav.png'; // Make sure to provide the correct path

interface NavbarProps {
  status: boolean;
}

function Navbar({ status }: NavbarProps) {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState<boolean>(false);
  const [studentServicesDropdownOpen, setStudentServicesDropdownOpen] = useState<boolean>(false);
  const [ejsDropdownOpen, setEjsDropdownOpen] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (status) {
      window.addEventListener('scroll', changeColor);
    } else {
      setColor(true);
    }
    return () => window.removeEventListener('scroll', changeColor);
  }, [status]);

  // Hover state management for dropdown menus
  const handleMouseEnter = (menu: string) => {
    if (menu === 'เกี่ยวกับเรา') setAboutDropdownOpen(true);
    if (menu === 'บริการนักศึกษา') setStudentServicesDropdownOpen(true);
    if (menu === 'ENTANEER JOB SEARCH') setEjsDropdownOpen(true);
  };

  const handleMouseLeave = (menu: string) => {
    if (menu === 'เกี่ยวกับเรา') setAboutDropdownOpen(false);
    if (menu === 'บริการนักศึกษา') setStudentServicesDropdownOpen(false);
    if (menu === 'ENTANEER JOB SEARCH') setEjsDropdownOpen(false);
  };

  const dropdownMenuStyles = {
    display: 'block',
    position: 'absolute',
    top: '100%',
    left: 0,
    textAlign: 'left',
    fontFamily: 'Prompt',
    fontWeight: 'Regular',
    fontSize: '18px',
    backgroundColor: '#f1f1f1',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
    zIndex: 10, // Ensure dropdown is above other elements
    borderRadius: '0px',
  };

  const dropdownButtonStyles = {
    color: '#fff',
    padding: '16px',
    fontSize: '20px',
    left: 0,
    fontFamily: 'Prompt',
    fontWeight: 'SemiBold',
    height: '40px',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: 'rgba(128, 17, 17, 0.5)',
    },
  };

  const dropdownItemStyles = {
    display: 'block',
    padding: '6px 16px',
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'left',
    fontFamily: 'Prompt',
    fontWeight: 'Regular',
    fontSize: '18px',
    backgroundColor: 'rgba(128, 17, 17)',
    borderRadius: '0',
    '&:hover': {
      backgroundColor: '#C33443',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '125px',
        background: color
          ? 'linear-gradient(to right, #5C181F 0%, #C23341 60%, #F09711 100%)'
          : 'transparent',
        padding: '0 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        boxSizing: 'border-box',
        zIndex: 20, // Ensure navbar is on top of other content
      }}
    >
      <Button component="a" href="/" sx={{ height: '100%', cursor: 'pointer' }}>
        <Box component="img" src={logoNav} alt="Logo" sx={{ height: '80%' }} />
      </Button>
      
      <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {/* Dropdown menus */}
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('เกี่ยวกับเรา')}
          onMouseLeave={() => handleMouseLeave('เกี่ยวกับเรา')}
        >
          <Button
            sx={dropdownButtonStyles}
            endIcon={aboutDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          >
            เกี่ยวกับเรา
          </Button>
          {aboutDropdownOpen && (
            <Box sx={dropdownMenuStyles}>
              <Button sx={[dropdownItemStyles, { width: '180px', height: '40px' }]} component="a" href="/history">ประวัติความเป็นมา</Button>
              <Button sx={[dropdownItemStyles, { width: '180px', height: '40px' }]} component="a" href="/vision-mission">วิสัยทัศน์/พันธกิจ</Button>
            </Box>
          )}
        </Box>
        {/* Other dropdown menus */}
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('บริการนักศึกษา')}
          onMouseLeave={() => handleMouseLeave('บริการนักศึกษา')}
        >
          <Button
            sx={dropdownButtonStyles}
            endIcon={studentServicesDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          >
            บริการนักศึกษา
          </Button>
          {studentServicesDropdownOpen && (
            <Box sx={dropdownMenuStyles}>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/scholarship">งานทุนการศึกษา</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/activities">งานส่งเสริมกิจกรรมนักศึกษา</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/discipline">งานวินัยนักศึกษา</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/entaneermind">งานให้คำปรึกษาและดูแลสุขภาพจิต</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/welfare">สวัสดิการสุขภาพนักศึกษา</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px', fontSize: '16px' }]} component="a" href="/entaneer-upskill">Entaneer Upskill</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/reserve-place">จองสถานที่</Button>
              <Button sx={[dropdownItemStyles, { width: '290px', height: '40px' }]} component="a" href="/certification">หนังสือรับรอง</Button>
            </Box>
          )}
        </Box>
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('ENTANEER JOB SEARCH')}
          onMouseLeave={() => handleMouseLeave('ENTANEER JOB SEARCH')}
        >
          <Button
            sx={[dropdownButtonStyles, { fontSize: '18px' }]}
            endIcon={ejsDropdownOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          >
            ENTANEER JOB SEARCH
          </Button>
          {ejsDropdownOpen && (
            <Box sx={dropdownMenuStyles}>
              <Button sx={[dropdownItemStyles, { width: '265px', height: '40px', fontSize: '16px' }]} component="a" href="#">CAREER DAY</Button>
              <Button sx={[dropdownItemStyles, { width: '265px', height: '40px' }]} component="a" href="#">จัดหางาน(หน่วยงานภายนอก)</Button>
              <Button sx={[dropdownItemStyles, { width: '265px', height: '40px' }]} component="a" href="#">สมัครงาน(บุคลากร/นักศึกษา)</Button>
            </Box>
          )}
        </Box>
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('ผู้บริหาร/บุคลากร')}
          onMouseLeave={() => handleMouseLeave('ผู้บริหาร/บุคลากร')}
        >
          <Button sx={dropdownButtonStyles} href="/executive">ผู้บริหาร/บุคลากร</Button>
        </Box>
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => handleMouseEnter('ประกาศ/ข้อบังคับ/ระเบียบ')}
          onMouseLeave={() => handleMouseLeave('ประกาศ/ข้อบังคับ/ระเบียบ')}
        >
          <Button sx={dropdownButtonStyles}>ประกาศ/ข้อบังคับ/ระเบียบ</Button>
        </Box>
      </Box>
    </div>
  );
};


export default Navbar;
