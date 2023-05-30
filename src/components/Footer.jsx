import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import logo from '../assets/Footer-logo.png';

export default function Footer() {
    return (
        <>
            <Box bgcolor="#650B9D">
                <Container>
                    <Grid container spacing={5} alignItems="end" pb={{ xs: 3, sm: 4, md: 5 }}>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Box width={{ xs: '105px' }}>
                                    <img src={logo} alt="logo" width="100%" />
                                </Box>
                                <Typography
                                    sx={{
                                        mt: 1,
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        letterSpacing: '1px',
                                        width: '100%',
                                        fontWeight: '400',
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            md: '15px',
                                        },
                                    }}
                                >
                                    Spectra is a leading firm driving innovation in Fintech and
                                    blockchain through strategic investments and ICOs, empowering
                                    financial growth by harnessing cutting-edge technologies.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Stack
                                direction={{ xs: 'row' }}
                                justifyContent={{ xs: 'center', sm: 'right' }}
                                spacing={2}
                            >
                                <Button
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: { xs: '10px', sm: '13px', md: '15px' },
                                        textAlign: 'center',
                                        padding: '5px 15px',
                                        background: '#ffffff',
                                        color: '#000000',
                                        borderRadius: '0px',
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            border: '1px solid #ffffff',
                                            color: '#ffffff',
                                        },
                                    }}
                                >
                                    Whitepaper
                                </Button>
                                <Button
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: { xs: '10px', sm: '13px', md: '15px' },
                                        textAlign: 'center',
                                        padding: '5px 15px',
                                        border: '1px solid #ffffff',
                                        color: '#fff',
                                        borderRadius: '0px',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Join Presale
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box py={2} sx={{ borderTop: { xs: 'none', sm: '2px solid #B85FF0' } }}>
                        <Typography
                            sx={{
                                fontFamily: 'Aileron',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: { xs: '10px', sm: '17px', md: '20px' },
                                textAlign: 'center',
                                letterSpacing: { xs: '0.5px', sm: '1px' },
                            }}
                        >
                            Copyright ©2023 spectra all rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
