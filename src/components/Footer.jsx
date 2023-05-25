import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

import logo from '../assets/logo.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';

const data = [
    [
        'Spectra is a leading firm driving innovation in Fintech and blockchain through strategic investments and ICOs, empowering financial growth by harnessing cutting-edge technologies.',
    ],
    ['Products', 'NFT', 'Buy', 'Trade'],
    ['Support', 'Help Center', 'Trading Fees', 'Contact Us'],
    ['Legal', 'Privacy Policy', 'Terms of Services', 'Agreements'],
];

export default function Footer() {
    return (
        <>
            <Box bgcolor="#650B9D">
                <Container>
                    <Grid
                        container
                        spacing={5}
                        alignItems="center"
                        // justifyContent="center"
                        pb={{ xs: 3, sm: 4, md: 5 }}
                    >
                        {data.map((val, index) => (
                            <Grid
                                item
                                xs={index === 0 ? 9 : 6}
                                sm={index === 0 ? 9 : 4}
                                md={index === 0 ? 6 : 2}
                                key={index}
                            >
                                <Box>
                                    {index === 0 && <img src={logo} alt="logo" />}
                                    {val.map((item, i) => (
                                        <Typography
                                            key={i}
                                            sx={{
                                                mt: 1,
                                                fontFamily: 'Aileron',
                                                fontStyle: 'normal',
                                                fontWeight: i === 0 && index !== 0 ? '700' : '400',
                                                fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    ))}
                                    {index === 0 && (
                                        <Stack direction="row" alignItems="center" gap={2} mt={2}>
                                            <img src={linkedin} alt="linkedin" />
                                            <img src={facebook} alt="facebook" />
                                            <img src={youtube} alt="youtube" />
                                            <img src={instagram} alt="instagram" />
                                        </Stack>
                                    )}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box py={2} sx={{ borderTop: '2px solid #B85FF0' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Aileron',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                textAlign: 'center',
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
