import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Typewriter from 'typewriter-effect';

import final from '../assets/final.mp4';

export default function HeroSection() {
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: '-10',
                    width: '100%',
                    height: { xs: '450px', sm: '60vh', md: '80vh' },
                    overflow: 'hidden',
                }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: '100%',
                        minHeight: '100%',
                        zIndex: -1,
                    }}
                >
                    <source src={final} type="video/mp4" />
                </video>

                <Box
                    width="100%"
                    height="100%"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Container>
                        <Box
                            width={{ xs: '100%', sm: '80%', md: '65%' }}
                            mx="auto"
                            py={{ xs: 5, sm: 3, md: 4 }}
                            zIndex={99999}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '900',
                                    fontSize: { xs: '32px', sm: '45px', md: '64px' },
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                    color: '#FFFFFF',
                                    width: '100%',
                                }}
                            >
                                Decentralized
                                <span>
                                    <Typewriter
                                        options={{
                                            strings: 'Hedgefund',
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        sx={{ color: '#650B9D' }}
                                    />
                                </span>
                                Leveraging AI
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: { xs: '13px', sm: '17px', md: '20px' },
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                    color: '#FFFFFF',
                                    width: '100%',
                                    pb: 4,
                                }}
                            >
                                Spectra is a leading firm driving innovation in Fintech and
                                blockchain through strategic investments and ICOs, empowering
                                financial growth by harnessing cutting-edge technologies.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>

            <Box sx={{ mt: { xs: -8, sm: -10, md: -12 }, zIndex: '99999' }}>
                <Container>
                    <Box
                        sx={{
                            bgcolor: '#650B9D',
                            p: { xs: 1, sm: 2, md: 3 },
                            border: '2px solid #ffffff',
                        }}
                    >
                        <Typography
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 1,
                                fontFamily: 'Aileron',
                                fontStyle: 'normal',
                                fontWeight: '900',
                                fontSize: { xs: '18px', sm: '24px', md: '32px' },
                                textAlign: 'left',
                                // textTransform: 'capitalize',
                                color: '#FFFFFF',
                            }}
                        >
                            Presale is now
                            <Box
                                width="max-content"
                                height="max-content"
                                fontFamily="Aileron"
                                fontStyle="normal"
                                bgcolor="#F15950"
                                borderRadius="5px"
                                letterSpacing="1px"
                                fontSize={{ xs: '7px', sm: '10px' }}
                                px={{ xs: 1, sm: 1 }}
                                mt={{ xs: 0.7, sm: 1 }}
                                py="3px"
                            >
                                Live
                            </Box>
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Aileron',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: { xs: '15px', sm: '18px', md: '24px' },
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                            }}
                        >
                            Stage 1
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Aileron',
                                fontStyle: 'normal',
                                fontWeight: '900',
                                fontSize: { xs: '14px', sm: '20px', md: '26px' },
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                color: '#ffffff',
                                mt: { xs: 0.3, sm: 1 },
                                mb: { xs: 5, sm: 0 },
                            }}
                        >
                            $1.15
                        </Typography>

                        <Box
                            sx={{
                                width: '100%',
                                height: { xs: '15px', sm: '25px' },
                                bgcolor: '#451D5D',
                                borderRadius: '50px',
                                my: 3,
                                position: 'relative',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: { xs: '10px', sm: '13px', md: '15px' },
                                    textAlign: 'right',
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                    px: 1,
                                    position: 'relative',
                                }}
                            >
                                100%
                            </Typography>
                            <Stack
                                direction="column"
                                alignItems="end"
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: { xs: '11px', sm: '13px', md: '15px' },
                                    textAlign: 'right',
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                    px: 1,
                                    position: 'absolute',
                                    right: '0px',
                                    top: { xs: '-30px', sm: '-40px' },
                                }}
                            >
                                $200,000,000
                                <ArrowDropDownIcon
                                    sx={{ color: '#451D5D', mt: { xs: -1, sm: '-5px' } }}
                                />
                            </Stack>

                            <Box
                                sx={{
                                    width: '24%',
                                    height: '100%',
                                    bgcolor: '#ffffff',
                                    borderRadius: '50px',
                                    position: 'absolute',
                                    top: '0px',
                                    left: '0px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '700',
                                        fontSize: { xs: '10px', sm: '13px', md: '15px' },
                                        textAlign: 'right',
                                        textTransform: 'capitalize',
                                        color: '#650B9D',
                                        px: 1,
                                        position: 'relative',
                                    }}
                                >
                                    24%
                                </Typography>
                                <Stack
                                    direction="column"
                                    alignItems="end"
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: { xs: '11px', sm: '13px', md: '15px' },
                                        textAlign: 'right',
                                        textTransform: 'capitalize',
                                        color: '#ffffff',
                                        px: 1,
                                        position: 'absolute',
                                        right: '0px',
                                        top: { xs: '-30px', sm: '-40px' },
                                    }}
                                >
                                    $75,254,548
                                    <ArrowDropDownIcon
                                        sx={{ color: '#ffffff', mt: { xs: -1, sm: '-5px' } }}
                                    />
                                </Stack>
                            </Box>
                        </Box>

                        <Stack direction="row" spacing={2} justifyContent="right">
                            <Button
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '10px', sm: '15px', md: '17px' },
                                    textAlign: 'center',
                                    padding: '5px 15px',
                                    border: '1px solid #ffffff',
                                    color: '#ffffff',
                                    borderRadius: '0px',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Whitepaper
                            </Button>
                            <Button
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '10px', sm: '15px', md: '17px' },
                                    textAlign: 'center',
                                    padding: '5px 15px',
                                    background: '#ffffff',
                                    color: '#650B9D',
                                    borderRadius: '0px',
                                    textTransform: 'uppercase',
                                    '&:hover': {
                                        border: '1px solid #ffffff',
                                        color: '#ffffff',
                                    },
                                }}
                            >
                                Buy Now
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
