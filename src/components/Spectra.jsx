import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Container, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

import spectraLaptop from '../assets/spectra-laptop.png';
import spectraTab from '../assets/spectra-tab.svg';
import spectraCircle from '../assets/spectra-circle.svg';

import spectrabg from '../assets/spectra-bg.svg';
import spectra1 from '../assets/spectra1.svg';
import spectra2 from '../assets/spectra2.svg';
import spectra3 from '../assets/spectra3.svg';
import spectra4 from '../assets/spectra4.svg';

export default function Spectra() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
        AOS.init({
            delay: 500,
        });
    }, []);

    return (
        <>
            <Box sx={{ py: { xs: 5, sm: 7, md: 10 } }}>
                <Container>
                    <Typography
                        data-aos="flip-down"
                        sx={{
                            fontFamily: 'Aileron',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            fontSize: { xs: '32px', sm: '45px', md: '64px' },
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#303030',
                            mb: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        Why Invest in <span style={{ color: '#650B9D' }}>Spectra VC</span>
                    </Typography>
                    <Grid container spacing={{ xs: 4, sm: 7, md: 10 }} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                data-aos="fade-rigth"
                                sx={{
                                    position: 'relative',
                                    background: `url(${spectraLaptop})`,
                                    width: { xs: '100%', sm: '100%' },
                                    mx: 'auto',
                                    height: '50vh',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center center',
                                }}
                                className="laptop"
                            >
                                <img
                                    src={spectraTab}
                                    alt="spectra"
                                    width="40%"
                                    style={{
                                        position: 'absolute',
                                        top: '33%',
                                        left: '8%',
                                        right: '0%',
                                        bottom: '0%',
                                        zIndex: 10,
                                    }}
                                    className="spectra"
                                />
                                <img
                                    src={spectraCircle}
                                    alt="spectra1"
                                    width="30%"
                                    style={{
                                        position: 'absolute',
                                        top: isMatch ? '10%' : '5%',
                                        left: '58%',
                                        right: '0%',
                                        bottom: '0%',
                                        zIndex: 10,
                                    }}
                                    className="circle"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} position="relative">
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '20%',
                                    left: '10%',
                                    right: '0',
                                    bottom: '0',
                                    width: '110%',
                                    height: '70%',
                                }}
                            >
                                <img src={spectrabg} alt="" width="100%" height="100%" />
                            </Box>
                            <Box data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#303030',
                                    }}
                                >
                                    Access to{' '}
                                    <span style={{ color: '#650B9D' }}>Promising Projects</span>
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={{ xs: 1, sm: 2 }}
                                    mt={{ xs: 0.8, sm: 2 }}
                                >
                                    <Box>
                                        <img src={spectra1} alt="" width="40px" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            color: '#303030',
                                        }}
                                    >
                                        Our team is skilled in identifying and funding promising
                                        projects in the web3 space. Venture capital is all about
                                        finding the best projects. We at Spectra have positioned
                                        ourselves in the perfect spot for this.
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box mt={{ xs: 2, sm: 3 }} data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#303030',
                                    }}
                                >
                                    <span style={{ color: '#650B9D' }}>Ethical</span> and
                                    <span style={{ color: '#650B9D' }}> Responsible </span>
                                    Investment{' '}
                                </Typography>
                                <Stack direction="row" spacing={2} mt={{ xs: 1.5, sm: 2 }}>
                                    <Box>
                                        <img src={spectra2} alt="2" width="40px" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            textAlign: 'left',
                                            color: '#303030',
                                        }}
                                    >
                                        We follow strict investment criteria and sustainable
                                        management practices to ensure your investment is managed
                                        ethically and responsibly.
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box mt={{ xs: 2, sm: 3 }} data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#303030',
                                    }}
                                >
                                    <span style={{ color: '#650B9D' }}>Spectra </span>
                                    Token Benefits
                                </Typography>
                                <Stack direction="row" spacing={2} mt={{ xs: 1.5, sm: 2 }}>
                                    <Box>
                                        <img src={spectra3} alt="3" width="40px" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            textAlign: 'left',
                                            color: '#303030',
                                        }}
                                    >
                                        Spectra token holders reap the rewards of our decentralized
                                        hedgefund&rsquo;s profits, receiving direct and transparent
                                        distributions to their wallets. With voting power in hand,
                                        token holders actively govern investment decisions,
                                        maximizing their returns. Invest in Spectra for earnings and
                                        empowerment in the world of decentralized finance.
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box mt={{ xs: 2, sm: 3 }} data-aos="fade-up">
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '18px', sm: '25px', md: '32px' },
                                        textAlign: 'left',
                                        color: '#303030',
                                    }}
                                >
                                    Transparent and Accountable
                                </Typography>
                                <Stack direction="row" spacing={2} mt={{ xs: 1.5, sm: 2 }}>
                                    <Box>
                                        <img src={spectra4} alt="4" width="40px" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            textAlign: 'left',
                                            color: '#303030',
                                        }}
                                    >
                                        Our commitment to transparency and accountability ensures
                                        that your investment is in good hands. With our track record
                                        of success and dedication to ethical practices, Spectra VC
                                        is the clear choice for investing in the future of
                                        blockchain and technology.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
