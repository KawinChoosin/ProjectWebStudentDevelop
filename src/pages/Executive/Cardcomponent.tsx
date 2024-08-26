// CardComponent.js
import React from 'react';
import { Box, Card, CardContent, CardMedia } from '@mui/material';

const CardComponent = ({ image, title, subtitle, contact }) => {
  return (
    <Card sx={{ maxWidth: '530px', margin: '0 auto' }}>
      <CardMedia
        component="img"
        image={image}
        alt="Executive Image"
      />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Box sx={{
          fontSize: '20px',
          fontWeight: 'Medium',
          color: '#000000',
          fontFamily: 'Prompt',
          marginBottom: '8px',
        }}>
          {title}
        </Box>
        <Box sx={{
          fontSize: '16px',
          fontWeight: 'Regular',
          color: '#000000',
          fontFamily: 'Prompt',
          marginBottom: '8px',
        }}>
          {subtitle}
        </Box>
        <Box sx={{
          fontSize: '16px',
          fontWeight: 'ExtraLight',
          color: '#000000',
          fontFamily: 'Prompt',
        }}>
          {contact}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
