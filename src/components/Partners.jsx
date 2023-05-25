import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../assets/pertner1.png';
import img2 from '../assets/pertner2.png';
import img3 from '../assets/pertner3.png';
import img4 from '../assets/pertner4.png';

export default function Partners() {
    return (
        <>
            <Box pt={{ xs: 9, sm: 14, md: 20 }}>
                <Container>
                    <Typography
                        sx={{
                            fontFamily: 'Aileron',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            fontSize: { xs: '32px', sm: '45px', md: '64px' },
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#303030',
                        }}
                        pb={{ xs: 6, sm: 7, md: 10 }}
                    >
                        Partners With
                    </Typography>

                    <Marquee autoFill={true}>
                        <Stack direction="row" gap={{ xs: 5, sm: 10 }} pr={{ xs: 5, sm: 10 }}>
                            <img src={img1} alt="" width="100%" style={{ aspectRatio: '25/5' }} />
                            <img src={img2} alt="" width="100%" style={{ aspectRatio: '25/5' }} />
                            <img src={img3} alt="" width="100%" style={{ aspectRatio: '25/5' }} />
                            <img src={img4} alt="" width="100%" style={{ aspectRatio: '25/5' }} />
                        </Stack>
                    </Marquee>
                </Container>
            </Box>
        </>
    );
}
