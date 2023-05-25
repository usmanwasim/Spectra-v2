import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import spectraimg from '../assets/spectra-img.png';
import spectra1 from '../assets/spectra1.png';
import spectra2 from '../assets/spectra2.png';
import spectra3 from '../assets/spectra3.png';
import spectra4 from '../assets/spectra4.png';

export default function Spectra() {
    return (
        <>
            <Box sx={{ py: { xs: 5, sm: 7, md: 10 } }}>
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
                            mb: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        Why Invest in <span style={{ color: '#650B9D' }}>Spectra VC</span>
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box>
                                <img src={spectraimg} alt="spectra" width="100%" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
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
                                <Stack direction="row" spacing={2} mt={{ xs: 1.5, sm: 2 }}>
                                    <Box>
                                        <img src={spectra1} alt="1" />
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
                                        Our team is skilled in identifying and funding promising
                                        projects in the web3 space. Venture capital is all about
                                        finding the best projects. We at Spectra have positioned
                                        ourselves in the perfect spot for this.
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box mt={{ xs: 2, sm: 3 }}>
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
                                        <img src={spectra2} alt="2" />
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
                            <Box mt={{ xs: 2, sm: 3 }}>
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
                                        <img src={spectra3} alt="3" />
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
                            <Box mt={{ xs: 2, sm: 3 }}>
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
                                        <img src={spectra4} alt="4" />
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
