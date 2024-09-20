// CardComponent.js
import React from 'react';
import { Box, Card, CardContent, CardMedia } from '@mui/material';

function CardComponent({ image, title, subtitle, contact }) {
  return (
    <Card sx={{ width: '100%', maxWidth: '540px', boxShadow: 'none', margin: '0 auto' }}>
      <CardMedia
        component="img"
        height="470"
        image={image}
        alt={title}
        sx={{ margin: '0 auto', boxShadow: 5 }}
      />
      <CardContent>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'medium',
            fontFamily: 'Prompt',
            textAlign: 'center',
            marginBottom: '10px',
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 'medium',
            fontFamily: 'Prompt',
            textAlign: 'center',
            marginBottom: '5px',
            whiteSpace: 'pre-line',
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 'ExtraLight',
            fontFamily: 'Prompt',
            textAlign: 'center',
            whiteSpace: 'pre-line',
          }}
        >
          {contact}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
