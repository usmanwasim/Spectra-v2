import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import confidenceMobile from '../assets/confidence-mobile.svg';
import confidenceTab from '../assets/confidence-tab.svg';
import confidenceShadow from '../assets/confidence-shadow.svg';
import confidencearrow from '../assets/confidence-arrow.svg';

export default function Confidence() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        AOS.init({
            delay: 500,
        });
    }, []);

    return (
        <>
            <Box sx={{ my: { xs: 5, sm: 7, md: 10 } }}>
                <Container>
                    <Typography
                        data-aos="flip-up"
                        sx={{
                            fontFamily: 'Aileron',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            fontSize: { xs: '32px', sm: '45px', md: '64px' },
                            textAlign: 'center',
                            lineHeight: { xs: 1.5, md: '77px' },
                            letterSpacing: '0.03em',
                            textTransform: 'capitalize',
                            color: '#303030',
                            mb: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        Invest with <span style={{ color: '#650B9D' }}>Confidence</span>
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                        textAlign: 'left',
                                        color: '#650B9D',
                                    }}
                                >
                                    Wide profit
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#343330',
                                        ml: { xs: 2, sm: 3, md: 4 },
                                    }}
                                >
                                    Access to <span style={{ color: '#650B9D' }}>wide range</span>{' '}
                                    of profitable{' '}
                                    <span style={{ color: '#650B9D' }}>blockchain</span> ventures
                                </Typography>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    height={{ xs: '56px', sm: '76px', md: '96px' }}
                                    width={{ xs: '12px', sm: '20px' }}
                                    gap={1}
                                >
                                    <img
                                        src={confidencearrow}
                                        alt=""
                                        width="100%"
                                        className="arrows"
                                    />
                                    <img
                                        src={confidencearrow}
                                        alt=""
                                        width="100%"
                                        className="arrows"
                                    />
                                    <img
                                        src={confidencearrow}
                                        alt=""
                                        width="100%"
                                        className="arrows"
                                    />
                                </Box>
                            </Box>
                            <Box data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                        textAlign: 'left',
                                        color: '#650B9D',
                                    }}
                                >
                                    Long term
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#343330',
                                        ml: { xs: 2, sm: 3, md: 4 },
                                    }}
                                >
                                    Sustainable investment approach
                                </Typography>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    height={{ xs: '56px', sm: '76px', md: '96px' }}
                                    width={{ xs: '12px', sm: '20px' }}
                                    gap={1}
                                >
                                    <img
                                        src={confidencearrow}
                                        alt=""
                                        width="100%"
                                        className="arrows"
                                    />
                                    <img
                                        src={confidencearrow}
                                        alt=""
                                        width="100%"
                                        className="arrows"
                                    />
                                    <img
                                        src={confidencearrow}
                                        alt=""
                                        width="100%"
                                        className="arrows"
                                    />
                                </Box>
                            </Box>
                            <Box data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                        textAlign: 'left',
                                        color: '#650B9D',
                                    }}
                                >
                                    Risk Management
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#343330',
                                        ml: { xs: 2, sm: 3, md: 4 },
                                    }}
                                >
                                    Reduced risk and uncertainties.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                data-aos="zoom-in-up"
                                sx={{
                                    position: 'relative',
                                    background: `url(${confidenceMobile})`,
                                    width: { xs: '80%', sm: '70%' },
                                    ml: 'auto',
                                    height: '50vh',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center center',
                                }}
                            >
                                <img
                                    src={confidenceTab}
                                    alt="confidence"
                                    width="60%"
                                    style={{
                                        position: 'absolute',
                                        top: '25%',
                                        left: '-10%',
                                        right: '0%',
                                        bottom: '0%',
                                        zIndex: 10,
                                    }}
                                    className="confidence"
                                />
                                <img
                                    src={confidenceShadow}
                                    alt="confidence"
                                    width="120%"
                                    style={{
                                        position: 'absolute',
                                        top: '40%',
                                        left: '0%',
                                        right: '0%',
                                        bottom: '0%',
                                        zIndex: -1,
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
