import React from 'react';
import {
    Box,
    Button,
    Chip,
    Container,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Typewriter from 'typewriter-effect';

import final from '../assets/final.mp4';

export default function HeroSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: '-10',
                    overflow: 'hidden',
                    height: isMobile ? '450px' : 'auto',
                }}
            >
                <video
                    height="100%"
                    autoPlay
                    muted
                    loop
                    style={{ zIndex: '-10', maxWidth: isMobile ? 'auto' : '100%' }}
                >
                    <source src={final} type="video/mp4" />
                </video>
                <Box
                    width="100%"
                    height="100%"
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        right: '0px',
                        bottom: '0px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Container>
                        <Box width={{ xs: '100%', sm: '80%', md: '65%' }} mx="auto">
                            <Typography
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '900',
                                    fontSize: { xs: '40px', sm: '45px', md: '64px' },
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
                                    fontSize: { xs: '14px', sm: '17px', md: '20px' },
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

            <Box sx={{ mt: { xs: -3, sm: -10, md: -12 }, zIndex: '99999' }}>
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
                                fontFamily: 'Aileron',
                                fontStyle: 'normal',
                                fontWeight: '900',
                                fontSize: { xs: '18px', sm: '24px', md: '32px' },
                                textAlign: 'left',
                                textTransform: 'capitalize',
                                color: '#FFFFFF',
                            }}
                        >
                            Pre Sale{' '}
                            <Chip
                                color="warning"
                                sx={{
                                    borderRadius: '0px',
                                }}
                                label="Live"
                            />
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
                                mt: 1,
                                mb: { xs: 3, sm: 0 },
                            }}
                        >
                            <Box
                                sx={{
                                    fontWeight: '500',
                                    fontSize: { xs: '12px', sm: '16px', md: '20px' },
                                }}
                            >
                                1 SCT:
                            </Box>
                            <Box
                                sx={{
                                    fontWeight: '700',
                                    fontSize: { xs: '14px', sm: '16px', md: '26px' },
                                }}
                            >
                                $1.15
                            </Box>
                        </Typography>

                        <Box
                            sx={{
                                width: '100%',
                                height: '25px',
                                bgcolor: '#451D5D',
                                my: 3,
                                position: 'relative',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: { xs: '15px', sm: '16px', md: '17px' },
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
                                    fontSize: { xs: '13px', sm: '14px', md: '15px' },
                                    textAlign: 'right',
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                    px: 1,
                                    position: 'absolute',
                                    right: '-10px',
                                    top: { xs: '-30px', sm: '-50px' },
                                }}
                            >
                                $200,000,000
                                <ArrowDropDownIcon
                                    sx={{ color: '#451D5D', mt: { xs: -1, sm: 0 } }}
                                />
                            </Stack>

                            <Box
                                sx={{
                                    width: '42%',
                                    height: '100%',
                                    bgcolor: '#ffffff',
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
                                        fontSize: { xs: '15px', sm: '16px', md: '17px' },
                                        textAlign: 'right',
                                        textTransform: 'capitalize',
                                        color: '#650B9D',
                                        px: 1,
                                        position: 'relative',
                                    }}
                                >
                                    42%
                                </Typography>
                                <Stack
                                    direction="column"
                                    alignItems="end"
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: { xs: '13px', sm: '14px', md: '15px' },
                                        textAlign: 'right',
                                        textTransform: 'capitalize',
                                        color: '#ffffff',
                                        px: 1,
                                        position: 'absolute',
                                        right: '-10px',
                                        top: { xs: '-30px', sm: '-50px' },
                                    }}
                                >
                                    $200,000,000
                                    <ArrowDropDownIcon
                                        sx={{ color: '#ffffff', mt: { xs: -1, sm: 0 } }}
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
