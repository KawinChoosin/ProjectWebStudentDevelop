import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mainpic from './pages/Homepage/mainpic';
import ButtonService from './pages/Homepage/ButtonService';
import ActivityImage from './pages/Homepage/ActivityImage'
import News from './pages/Homepage/News';
import { Box } from '@mui/material';

const App = () => {
  const slides = [
    { url: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/461309036_1098616628291504_829843249522718961_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGEYrqWblWn7yovrwbSOz0UCAwrFIAjuG0IDCsUgCO4bcg8XkSqSpDN1u8qz-29Q6eBIU7AXy2stcrZhkC3Tzrh&_nc_ohc=Vg-Y2fplZx8Q7kNvgE8F4U1&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AIovH3DxdCb5IajLRZ7b5Wn&oh=00_AYB210DxEIIG-dohJB9-7TuW-7f_3o34x4nXtK7AmMbSNw&oe=670286A4", title: "pic1" },
    { url: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/461306521_1098616711624829_3529812947482163316_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGIjOuKa1xv8tNnc7JKjg-1AyBPdjD8CTcDIE92MPwJNyQhC-LE97JnEiw7bfMvU6MptC_ui_7v09NXyXq0vbs4&_nc_ohc=wpyTsy0ApXMQ7kNvgF1cEU5&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AZElprKPqclL0tbLgvOi9Sy&oh=00_AYDQySNk5WQ_swBWB2VeuqLEyqIxEdk19qzKCdcaPo4Mgg&oe=6702A7A6", title: "pic2" },
    { url: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/461506836_1098618004958033_8930108864104676039_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE7nziLdXBH_38OK-gQ-JP4zHOXcVE5kI7Mc5dxUTmQjlOIDuOz2fyarfqtzf2iUPcKZILJUscofolC-u__jB3y&_nc_ohc=4GKdDjkseCcQ7kNvgFjl04N&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AcZsS3KX5bIV4UP5g-mUwAU&oh=00_AYB7zU9YtIIOx7vURCWvuui2aKFofUP5S4cFqBDvifit6g&oe=67027C8F", title: "pic3" },
    { url: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/461569677_1099887348164432_1372154389926905043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG_odEZ0d-94JSgp-ZTKY1YBnH5O2qtWL8Gcfk7aq1YvwaXsmtelXcE4JuP1ciT8vFNMt5oROJg9ehMHu-L3PKp&_nc_ohc=y_ihmKvl8yUQ7kNvgFIgw7w&_nc_ht=scontent.fcnx1-1.fna&oh=00_AYC8oFRg2myPmfCY_frcv4jgxyjM88dct4OPMFCb7gu-BQ&oe=6702AE67", title: "pic4" },
    { url: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/460567562_1093287218824445_7686024311975191678_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHegye27YOq2uRurrR-jDhpVrABfMypKQFWsAF8zKkpAYYlv78iQ6QvJ9oqqmUGgX6v6YAUd71NxvEOPkZqhAwF&_nc_ohc=PpTV9VK_QhQQ7kNvgFeZGkS&_nc_ht=scontent-bkk1-1.xx&oh=00_AYBebAEx7iihL68zlhPmVvcg8NzfnRtTvOlf1MYlS2dpbQ&oe=66F7138B", title: "pic5" },
    { url: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/460529179_1093325922153908_7023764172352723214_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH2rzzJGw92neJUWaS_Rm_Pxes7cic6aezF6ztyJzpp7AnVmsBXJpHn8wnuEc8joyfVH5MhgSpdpPeYqQlRetp7&_nc_ohc=7vof8QI-Ky4Q7kNvgGtdgLZ&_nc_ht=scontent-bkk1-1.xx&_nc_gid=ArLzykAfkKwkP04x-rspbN-&oh=00_AYBx2sk6dd1ErGWMp-HzrpCYrLOaYnjvxMiFfTHb1GDF7A&oe=66F715F7", title: "pic6" },
    { url: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/460645235_1093326278820539_7336431512285434225_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE8PnWMRPdqqWyJ6je26RFGOrfu1ArAOkQ6t-7UCsA6RKKSd_K73BmjFVYve-XXBKU44MbfSANkPjvU3x6qFyiE&_nc_ohc=O7GuUiViOU0Q7kNvgEgXkY0&_nc_ht=scontent-bkk1-2.xx&_nc_gid=AhjdlKo5Pa0czMc-KdNW1Je&oh=00_AYBv4A1_oRyj2yhz6YlWRpSyUXdcyN8rOTGHILtm3gvSWQ&oe=66F726DD", title: "pic7" },
    
  
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    
      }}
    >
      <Navbar status={true} />
      <Mainpic />
      <Box sx={{height:"800px"}}></Box>
      <ButtonService />
      <ActivityImage slides={slides} />
      <News />
      <Footer />
    </div>
  );
};

export default App;
