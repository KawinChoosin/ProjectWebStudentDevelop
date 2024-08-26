import { Box ,Typography} from '@mui/material'
import Navbar from '../../../component/Navbar'
import Footer from '../../../component/Footer' 

function History() {
  return (
    <div>
        <Navbar status={false} />
        <Box sx={{width:"1000px",height:"1000px",marginTop:"125px"}}>
            <Typography variant="h1" component="h2">ประวัติความเป็นมา</Typography>
        </Box>
        <Footer/>

    </div>
  )
}

export default History