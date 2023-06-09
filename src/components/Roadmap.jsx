import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Typography } from '@mui/material';

import roadmap from '../assets/roadmap.svg';

export default function Roadmap() {
    useEffect(() => {
        AOS.init({
            delay: 200,
        });
    }, []);
    return (
        <>
            <Box py={{ xs: 5, sm: 7, md: 10 }}>
                <Typography
                    data-aos="flip-left"
                    sx={{
                        fontFamily: 'Aileron',
                        fontStyle: 'normal',
                        fontWeight: '900',
                        fontSize: { xs: '32px', sm: '45px', md: '64px' },
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: '#000000',
                        mb: { xs: 3, sm: 4, md: 5 },
                    }}
                >
                    Roadmap
                </Typography>
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        overflowX: 'auto',
                        display: { sx: 'block', md: 'flex' },
                        justifyContent: 'center',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    <img
                        src={roadmap}
                        alt=""
                        style={{ minWidth: '720px', width: '100%', maxWidth: '1200px' }}
                    />
                </Box>
            </Box>
        </>
    );
}
