import React from 'react';
import { Typography } from '@mui/material';

const FooterTitle = ({ text }) => {
  return (
    <Typography
      variant='h6'
      component='h6'
      sx={{
        fontWeight: '700',
        textTransform: 'capitalize',
        pb: 1,
        borderBottom: '2px solid red',
        display: 'inline-block',
      }}
    >
      {text}
    </Typography>
  );
}

export default FooterTitle;
