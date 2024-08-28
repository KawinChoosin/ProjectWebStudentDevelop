import { Box,Card,CardMedia,CardContent,Grid} from '@mui/material';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer'; 
import "../../../component/text.css";
import pic1 from "./pic/image.png"
import pic2 from "./pic/2.png"
import pic3 from "./pic/3.png"
import pic4 from "./pic/4.png"
import pic5 from "./pic/5.png"
import pic6 from "./pic/6.png"
import pic7 from "./pic/7.png"
import pic8 from "./pic/8.png"
import pic9 from "./pic/9.png"


function Scholarship() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
            <Navbar status={false} />
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "1000px",
                marginTop: "125px",
                padding: "20px",
                boxSizing: "border-box",
                color: "#333",
            }}>
                <div className="text-topic" style={{marginTop:"10%"}} >
                    งานทุนการศึกษา
                </div>
                <Box sx={{ borderBottom: '3px solid #801111', marginBottom: '40px', width: '40%' }}></Box>
                <div className="text-detail-indent" >
                ทุนการศึกษามีหลากหลายประเภทเพื่อสนับสนุนนักศึกษาในคณะวิศวกรรมศาสตร์ให้เข้าถึงการศึกษาได้โดยทั่วถึง ตั้งแต่ทุนการศึกษาขัดสนที่ช่วยเหลือค่าใช้จ่ายในการศึกษาและอุปกรณ์การเรียน ทุนการศึกษาเรียนดีที่สนับสนุนนักศึกษาที่มีผลการเรียนดีมากที่สุด และทุนการศึกษาวิศวกรรมฯที่สนับสนุนผู้มีผลการเรียนดีเด่น ความมุ่งมั่นในการศึกษา และการทำงานที่ตรงไปตรงมา ส่งเสริมและสนับสนุนนักศึกษาให้ได้มีโอกาสศึกษาเล่าเรียนจนสำเร็จการศึกษา โดยอาศัยแหล่งทุน 2 ส่วน ประกอบด้วย
                </div>
                <img src={pic1} alt="" />
                <div className="text-bold">1.ทุนการศึกษาจากคณะวิศวกรรมศาสตร์</div>
                <div className="text-detail-indent">หมายถึงทุนการศึกษาที่ใช้งบประมาณเงินรายได้คณะวิศวกรรมศาสตร์จัดสรรให้แก่นักศึกษาคณะวิศวกรรมศาสตร์ที่ขาดแคลนทุนทรัพย์ นักศึกษาที่มีผลการเรียนดี นักศึกษาที่ทำกิจกรรมวิชาการ กิจกรรมเสริมหลักสูตร กิจกรรมกีฬานักศึกษาที่ต้องการทำงานเพื่อช่วยเหลือและแบ่งเบาภาระของครอบครัว นักศึกษาที่ประสบปัญหาความเดือดร้อนทางเศรษฐกิจ อุบัติเหตุ วินาศภัย ทุพพลภาพ แยกประเภทได้ดังนี้</div>
                <Box 
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between',  // Ensures cards are aligned left and right
                    width: '100%', // Full width for proper spacing
                    gap:'20px',
                    justifyContent:'center',
                    marginBottom:"20px"
                    }}
                > 
                    <Card sx={{Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic2}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษา ประเภทขัดสน 
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic3}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษา ประเภทเรียนดี 
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between',  // Ensures cards are aligned left and right
                    width: '100%', // Full width for proper spacing
                    gap:'20px',
                    justifyContent:'center',
                    marginBottom:"20px"
                    }}
                > 
                    <Card sx={{Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic4}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษา ประเภทวิศวฯ ปัญญาเลิศ 
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic5}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษา ประเภททำงาน
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between',  // Ensures cards are aligned left and right
                    width: '100%', // Full width for proper spacing
                    gap:'20px',
                    justifyContent:'center',
                    marginBottom:"20px"
                    }}
                > 
                    <Card sx={{Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic6}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษา ประเภทฉุกเฉิน  
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic7}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษา ประเภทกิจกรรมวิชาการ กิจกรรมเสริมหลักสูตร และกิจกรรมกีฬา
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between',  // Ensures cards are aligned left and right
                    width: '100%', // Full width for proper spacing
                    gap:'20px',
                    justifyContent:'center',
                    marginBottom:"20px"
                    }}
                > 
                    <Card sx={{Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic8}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษาประเภทผลงานประกวดทางวิชาการของนักศึกษา 
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ Width: '450px', margin: '0 auto',Height:"550px"}}>
                        <CardMedia
                        component="img"
                        image={pic9}
                        alt=" "
                        />
                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                fontSize: '20px',
                                fontWeight: 'regular',
                                color: '#000000',
                                fontFamily: 'Prompt',
                                marginBottom: '8px',
                            }}>
                                ทุนการศึกษาสำหรับผู้มีผลการเรียนดีเยี่ยม
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <div className="text-bold">2.ทุนการศึกษาจากหน่วยงานภายนอก</div>
                <div className="text-detail-indent">หมายถึงทุนการศึกษาที่ใช้งบประมาณบริจาคจากมูลนิธิ บริษัท ห้าง ร้าน สมาคมนักศึกษาเก่าคณะวิศวกรรมศาสตร์และผู้มีจิตศรัทธาที่บริจาคสนับสนุนการศึกษาแก่นักศึกษาคณะวิศวกรรมศาสตร์ จัดสรรให้แก่นักศึกษาที่ขาดแคลนทุนทรัพย์ นักศึกษาที่มีผลการเรียนดี และนักศึกษาที่ทำกิจกรรมวิชาการกิจกรรมเสริมหลักสูตร กิจกรรมกีฬา ตามความประสงค์ของผู้บริจาค</div>

            </Box>
            <Box sx={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px', height: '100px', width: '100%', position: 'relative' }}>
                <Box
                sx={{
                    position: 'absolute',
                    bottom: '50%',
                    left: '50%',
                    width: '30%',
                    height: '5px',
                    backgroundColor: '#b00020',
                    transform: 'translateX(-50%)', // Center horizontally
                }}
                />
            </Box>
            <Footer/>
        </div>
      );
}

export default Scholarship

