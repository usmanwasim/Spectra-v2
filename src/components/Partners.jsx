import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';
import img1 from '../assets/pertner1.png';
import img2 from '../assets/pertner2.svg';
import img3 from '../assets/pertner3.svg';
import img4 from '../assets/pertner4.svg';
import img5 from '../assets/partner5.png';

export default function Partners() {
    useEffect(() => {
        AOS.init({
            delay: 200,
        });
    }, []);
    return (
        <>
            <Box pt={{ xs: 9, sm: 14, md: 20 }}>
                <Typography
                    data-aos="flip-right"
                    sx={{
                        fontFamily: 'Aileron',
                        fontStyle: 'normal',
                        fontWeight: '900',
                        fontSize: { xs: '42px', sm: '52px', md: '64px' },
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: '#303030',
                    }}
                    pb={{ xs: 6, sm: 7, md: 10 }}
                >
                    Partners With
                </Typography>
                <Box data-aos="zoom-in-up">
                    <Marquee autoFill={true}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={{ xs: 3, sm: 10 }}
                            pr={{ xs: 3, sm: 10 }}
                            sx={{ aspectRatio: '20/1' }}
                        >
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" width="200px" height="30px" />
                        </Stack>
                    </Marquee>
                </Box>
            </Box>
        </>
    );
}
