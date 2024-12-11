import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';

// Define the type for the component props
interface DisplayProps {
  pageId: string; // or 'number' if pageId is a number
}

const Display: React.FC<DisplayProps> = ({ pageId }) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/data/page/${pageId}`);
        setContent(response.data[0].P_data);
        console.log(response.data.P_data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, [pageId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: { xs: "370px", sm: "700px", md: "800px", lg: "1000px" }, marginTop: "125px", padding: "20px", boxSizing: "border-box", color: "#333" }}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </div>
  );
};

export default Display;
