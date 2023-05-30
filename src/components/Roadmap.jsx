import React from 'react';
import { Box, Typography } from '@mui/material';

import roadmap from '../assets/roadmap.png';

export default function Roadmap() {
    return (
        <>
            <Box py={{ xs: 5, sm: 7, md: 10 }}>
                <Typography
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
                    sx={{
                        overflowX: 'auto',
                        // width: '95%',
                        mx: 'auto',
                        // height: { xs: '70vh', sm: '100vh' },
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    <img src={roadmap} alt="" style={{ minWidth: '720px', width: '100%' }} />
                </Box>
            </Box>
        </>
    );
}
