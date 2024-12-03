import { useState, useEffect } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import logoNav from '../component/logo-nav.png';
import { useMediaQuery } from '@mui/material';

interface NavbarProps {
  status: boolean;
}

function Navbar({ status }: NavbarProps) {
  const [studentServicesDropdownOpen, setStudentServicesDropdownOpen] = useState<boolean>(false);
  const [ejsDropdownOpen, setEjsDropdownOpen] = useState<boolean>(false);
  const [color, setColor] = useState<boolean>(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState<boolean>(false);

  const isMobile = useMediaQuery('(max-width:1300px)');

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (status) {
      if(hamburgerMenuOpen){
        setColor(true);
      }else{
        window.addEventListener('scroll', changeColor);
      }
    } else {
      setColor(true);
    }
    return () => window.removeEventListener('scroll', changeColor);
  }, [status,hamburgerMenuOpen]);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = (menu: string) => {
    if (menu === 'บริการนักศึกษา') setStudentServicesDropdownOpen(true);
    if (menu === 'ENTANEER JOB SEARCH') setEjsDropdownOpen(true);
  };

  const handleMouseLeave = (menu: string) => {
    if (menu === 'บริการนักศึกษา') setStudentServicesDropdownOpen(false);
    if (menu === 'ENTANEER JOB SEARCH') setEjsDropdownOpen(false);
  };

  const dropdownHambergerStyles = {
    display: 'block',
    position: 'absolute',
    top: '100%',
    left: 0,
    textAlign: 'left',
    fontFamily: 'Prompt',
    fontWeight: 'Regular',
    fontSize: '18px',
    backgroundColor: '#C33443',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
    zIndex: 10,
    borderRadius: '0px',
    width:"100%",
    ...(studentServicesDropdownOpen && {
      maxHeight: '800px', // Adjust based on content height
      backgroundColor: '#C33443',
  
    }),
    
    ...(ejsDropdownOpen && {
      maxHeight: '800px', // Adjust based on content height
      backgroundColor: '#C33443',

    }),
    
  };

  const slideDownAnimation = {
    '@keyframes slideDown': {
      '0%': {
        opacity: 0,
        transform: 'translateY(-20px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  };

  const dropdownMenuStyles = () => ({
    display: 'block',
    position: 'absolute',
    top: '100%',
    left: 0,
    textAlign: 'left',
    fontFamily: 'Prompt',
    fontWeight: 'Regular',
    fontSize: '18px',
    backgroundColor: 'rgba(128, 17, 17)',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
    zIndex: 10,
    borderRadius: '0px',
    overflow: 'hidden',
    maxHeight: 0,
    opacity: 0,
    transition: 'max-height 0.4 ease, opacity 0.4s ease',
    
    ...(studentServicesDropdownOpen && {
      maxHeight: '500px', // Adjust based on content height
      backgroundColor: '#C33443',
      animation: studentServicesDropdownOpen ? 'slideDown 0.4s ease forwards' : 'slideUp 0.4s ease forwards',
    }),
    
    ...(ejsDropdownOpen && {
      maxHeight: '500px', // Adjust based on content height
      backgroundColor: '#C33443',
      animation: ejsDropdownOpen ? 'slideDown 0.4s ease forwards' : 'slideUp 0.4s ease forwards',
    }),
    
    

   
    ...slideDownAnimation,
  });

  const dropdownButtonStyles = {
    color: '#fff',
    padding: '16px',
    fontSize: '20px',
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
    transition: 'transform 0.3s ease', // Smooth transition for the movement
    '&:hover': {
      backgroundColor: '#C33443',
      transform: 'translateX(10px)', // Move text 10px to the right on hover
      
    },
  };
  

  const topics = {
    aboutUs: { name: 'เกี่ยวกับเรา', href: '/aboutus' },
    studentServices: {
      name: 'บริการนักศึกษา',
      href: '#',
      subtopics: [
        { name: 'งานทุนการศึกษา', href: '/scholarship' },
        { name: 'งานส่งเสริมกิจกรรมนักศึกษา', href: '/activities' },
        { name: 'งานวินัยนักศึกษา', href: '/discipline' },
        { name: 'งานให้คำปรึกษาและดูแลสุขภาพจิต', href: '/entaneermind' },
        { name: 'สวัสดิการสุขภาพนักศึกษา', href: '/welfare' },
        { name: 'Entaneer Upskill', href: '/entaneer-upskill' },
        { name: 'จองสถานที่', href: '/reserve-place' },
        { name: 'หนังสือรับรอง', href: '/certificate' },
      ],
    },
    ejs: {
      name: 'ENTANEER JOB SEARCH',
      href: '#',
      subtopics: [
        { name: 'CAREER DAY', href: '/career-day' },
        { name: 'จัดหางาน(หน่วยงานภายนอก)', href: '/external-jobs' },
        { name: 'สมัครงาน(บุคลากร/นักศึกษา)', href: '/apply-job' },
      ],
    },
    executives: { name: 'ผู้บริหาร/บุคลากร', href: '/executive' },
    announcements: { name: 'ประกาศ/ข้อบังคับ/ระเบียบ', href: '/announcements' },
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
        zIndex: 2000,
      }}
    >
      <Button component="a" href="/" sx={{ height: '100%', cursor: 'pointer' }}>
        <Box component="img" src={logoNav} alt="Logo" sx={{ height: '80%' }} />
      </Button>

      {isMobile ? (
        <>
          <IconButton onClick={toggleHamburgerMenu} sx={{ color: '#fff' }}>
            <MenuIcon sx={{ fontSize: '35px' }} />
          </IconButton>
          {hamburgerMenuOpen && (
            
              <Box sx={dropdownHambergerStyles}>
              {/* All the topics from the full menu */}
              <Button sx={[dropdownItemStyles, { width: '100%', height: '40px' ,}]} component="a" href="/aboutus">เกี่ยวกับเรา</Button>
              
      
              {/* Dropdown for บริการนักศึกษา */}
              <Box sx={{ display: 'block' }}>
                <Button sx={[dropdownItemStyles, { width: '100%', height: '40px',display:"flex",alignItems:"center",justifyContent:"left"}]} onClick={() => setStudentServicesDropdownOpen((prev) => !prev)}>
                  บริการนักศึกษา
                  {studentServicesDropdownOpen ? (
                    <ArrowDropUpIcon sx={{ fontSize: '30px' }}  /> // Adjust size here
                  ) : (
                    <ArrowDropDownIcon sx={{ fontSize: '30px' }}   /> // Adjust size here
                  )}
                </Button>
                {studentServicesDropdownOpen && (
                  <Box>
                    <Box>
                      {topics.studentServices.subtopics.map((item, index) => (
                        <Button key={index} sx={[dropdownItemStyles, { width: '100%', height: '40px',textIndent:"20px"}]} component="a" href={item.href}>
                          {item.name}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
      
              {/* Dropdown for ENTANEER JOB SEARCH */}
              <Box sx={{ display: 'block' }}>
                <Button sx={[dropdownItemStyles, { width: '100%', height: '40px' ,fontSize:"17px",display:"flex",alignItems:"center",justifyContent:"left"}]} onClick={() => setEjsDropdownOpen((prev) => !prev)}>
                  ENTANEER JOB SEARCH
                  {ejsDropdownOpen ? (
                    <ArrowDropUpIcon sx={{ fontSize: '30px' }}  /> // Adjust size here
                  ) : (
                    <ArrowDropDownIcon sx={{ fontSize: '30px' }}   /> // Adjust size here
                  )}
                </Button>
                {ejsDropdownOpen && (
                  <Box>
                  {topics.ejs.subtopics.map((item, index) => (
                    <Button key={index} sx={[dropdownItemStyles, { width: '100%', height: '40px',textIndent:"20px" }]} component="a" href={item.href}>
                      {item.name}
                    </Button>
                  ))}
                </Box>
                )}
              </Box>
              <Button sx={[dropdownItemStyles, { width: '100%', height: '40px' }]} component="a" href="/executive">ผู้บริหาร/บุคลากร</Button>
              <Button sx={[dropdownItemStyles, { width: '100%', height: '40px' }]} component="a" href="/announcements">ประกาศ/ข้อบังคับ/ระเบียบ</Button>
            </Box>
            )}
        </>
      ) : (
        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <Box sx={{ position: 'relative' }}>
            <Button sx={dropdownButtonStyles} href="/aboutus">เกี่ยวกับเรา</Button>
          </Box>
          <Box
              sx={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('บริการนักศึกษา')}
              onMouseLeave={() => handleMouseLeave('บริการนักศึกษา')}
            >
              <Button
                sx={dropdownButtonStyles}
                endIcon={studentServicesDropdownOpen ? (
                  <ArrowDropUpIcon sx={{ fontSize: '30px' }} />
                ) : (
                  <ArrowDropDownIcon sx={{ fontSize: '30px' }} />
                )}
              >
                บริการนักศึกษา
              </Button>
              {studentServicesDropdownOpen && (
                <Box sx={dropdownMenuStyles}>
                  <Box>
                    {topics.studentServices.subtopics.map((item, index) => (
                      <Button key={index} sx={[dropdownItemStyles, { width: '320px', height: '40px' }]} component="a" href={item.href}>
                        {item.name}
                      </Button>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          <Box
            sx={{ position: 'relative' }}
            onMouseEnter={() => handleMouseEnter('ENTANEER JOB SEARCH')}
            onMouseLeave={() => handleMouseLeave('ENTANEER JOB SEARCH')}
          >
            <Button
              sx={[dropdownButtonStyles, { fontSize: '17px' }]}
              endIcon={ejsDropdownOpen ? (
                <ArrowDropUpIcon sx={{ fontSize: '40px' }}  /> // Adjust size here
              ) : (
                <ArrowDropDownIcon sx={{ fontSize: '40px' }}   /> // Adjust size here
              )}
            >
              ENTANEER JOB SEARCH
            </Button>
            {ejsDropdownOpen && (
              <Box sx={dropdownMenuStyles}>
                {/* Job search items */}
                <Box>
                      {topics.ejs.subtopics.map((item, index) => (
                        <Button key={index} sx={[dropdownItemStyles, { width: '270px', height: '40px' }]} component="a" href={item.href}>
                          {item.name}
                        </Button>
                      ))}
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Button sx={dropdownButtonStyles} href="/executive">ผู้บริหาร/บุคลากร</Button>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Button sx={dropdownButtonStyles} href="/announcements">ประกาศ/ข้อบังคับ/ระเบียบ</Button>
          </Box> 
          
        </Box>
       
      )}
    </div>
  );
}

export default Navbar;
