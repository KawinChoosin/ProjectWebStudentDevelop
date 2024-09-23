import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mainpic from './pages/Homepage/mainpic';
import ButtonService from './pages/Homepage/ButtonService';
import ActivityImage from './pages/Homepage/ActivityImage'
import News from './pages/Homepage/News';
import { Box } from '@mui/material';

const App = () => {
  const slides = [
    { url: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/460589986_1093323712154129_7965618943854089940_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHtfOVREfClUeg_pZv1_XX7ojZx57MG_RWiNnHnswb9FZWn8_5Mfs_ym6g2uQJwPf3ZLXi-L51BVKdEK5OFAstq&_nc_ohc=-Qx2HjYSL7UQ7kNvgFei2pK&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDL0O5siJ3JBdW1Lu5LMp6k8Y_3RcObu8wiSlKtrlBzsA&oe=66F72949", title: "pic1" },
    { url: "https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/460580573_1093323332154167_4453701938306281800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEY7ndNa2IGqowrHb4vzFsOK5DC5-W-nDkrkMLn5b6cOcu-FZAtDNh0vzL0jlZTxD_S0Yxswxu2MoaHvvM6Ppry&_nc_ohc=PNY2kKDXuJEQ7kNvgEpmxtb&_nc_ht=scontent-bkk1-1.xx&_nc_gid=AWTs4ToENjDH-Z39JuhSuK8&oh=00_AYBzzFla8t1VnbJLKJa4Y2wOgm1oraG7-wQEM2uq0v2Czg&oe=66F704DE", title: "pic2" },
    { url: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/460552196_1093323425487491_628170184742668692_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFpuWxtQtIyWefEDc_llSgl7dFZ0JxutzPt0VnQnG63M30_Nb3lIGtRIpPk0imcCXzn-c7-jpxet-Wv5kyYXnuv&_nc_ohc=ic1-hdZHQicQ7kNvgE2T8mK&_nc_ht=scontent-bkk1-2.xx&_nc_gid=AUunJVxtFl9neIkFkhC1x9f&oh=00_AYCkPAEmbio6CRlPAxFSFBscolLvqT_NjE88US2vR1YAzQ&oe=66F71190", title: "pic3" },
    { url: "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/460624112_1093286895491144_1921136076930073592_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeE2pI9Ipi9wrnkNTbia4HsvBc3P8YjFMnQFzc_xiMUydPswb4PnwDANxAM6CY-h9Sf_THUvQMZGgAzfZp4GFIQO&_nc_ohc=YOkLa-EU4_4Q7kNvgFSiQv5&_nc_ht=scontent-bkk1-2.xx&_nc_gid=AGiG40aJWSqEce1CxU4MJdB&oh=00_AYBhQs5cN4gp-z7nTQzPm3fFGfvWrZLy2NEvwK6GlpAEMw&oe=66F72CB7", title: "pic4" },
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
