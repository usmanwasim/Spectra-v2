import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import confidenceMobile from '../assets/confidence-mobile.png';
import confidenceTab from '../assets/confidence-tab.png';
import confidencearrow from '../assets/confidence-arrow.png';

export default function Confidence() {
    return (
        <>
            <Box sx={{ my: { xs: 5, sm: 7, md: 10 } }}>
                <Container>
                    <Typography
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
                            <Box>
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
                                <Box height={{ xs: '56px', sm: '76px', md: '96px' }}>
                                    <img src={confidencearrow} alt="" height="100%" />
                                </Box>
                            </Box>
                            <Box>
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
                                <Box height={{ xs: '56px', sm: '76px', md: '96px' }}>
                                    <img src={confidencearrow} alt="" height="100%" />
                                </Box>
                            </Box>
                            <Box>
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
                                sx={{
                                    position: 'relative',
                                    background: `url(${confidenceMobile})`,
                                    width: { xs: '80%', sm: '80%' },
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
                                        top: '13%',
                                        left: '-10%',
                                        right: '0%',
                                        bottom: '0%',
                                        zIndex: 10,
                                    }}
                                    className="confidence"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
