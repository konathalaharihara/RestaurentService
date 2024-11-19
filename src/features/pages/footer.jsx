import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                position: 'bottom',
                bottom: 0,
                width: '100%',
                backgroundColor: 'primary.main',
                color: 'white',
                py: 2,
                textAlign: 'center',
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Plate Manager. All Rights Reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
