import { Box } from '@mui/material';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer'; 
import "../../component/text.css";

const announcements = [
  {
    category: "ประกาศ",
    links: [
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      // Add more links as needed
    ]
  },
  {
    category: "ระเบียบ",
    links: [
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      // Add more links as needed
    ]
  },
  {
    category: "ข้อบังคับ",
    links: [
      { href: "https://administer.eng.cmu.ac.th/download/doc-adminis_1.pdf", text: "-ประกาศของมหาวิทยาลัยเชียงใหม่ เรื่อง กำหนดประเภทรายรับ รายการ..." },
      // Add more links as needed
    ]
  }
];

function Announcement() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar status={false} />
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth:{xs:"370px",sm:"700px",md:"800px",lg:"1000px"},
          marginTop: "160px",
          padding: "20px",
          boxSizing: "border-box",
      }}>
        {announcements.map((section, index) => (
          <Box key={index}>
            <Box sx={{
              height: "80px",
              width: "100%",
              padding: "20px",
              fontWeight: "medium",
              boxSizing: 'border-box', // Ensure padding is included in height
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <div className="text-topic" style={{ padding:"15px 35px", marginBottom: '5px', backgroundColor: '#FFBBBB' }}>
                {section.category}
              </div>
            </Box>

            <Box sx={{
              width: "100%",
              padding: "20px",
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {section.links.map((link, linkIndex) => (
                <a key={linkIndex} className="text-detail" style={{ textAlign: 'left', marginBottom: '8px' }} href={link.href}>
                  {link.text}
                </a>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Footer />
    </div>
  );
}

export default Announcement;
