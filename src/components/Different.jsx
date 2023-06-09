import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import different1 from '../assets/different1.svg';
import different2 from '../assets/different2.svg';
import different3 from '../assets/different3.svg';
import different4 from '../assets/different4.svg';

const data = [
    {
        img: different1,
        title: 'Precision',
        desc: 'Unmatched precision in spotting the right projects in a narrow vertical for portfolio',
    },
    {
        img: different2,
        title: 'Early investment',
        desc: 'Early investment opportunities in Web3 startups present significant potential for growth and innovation.',
    },
];
const data1 = [
    {
        img: different4,
        title: 'ICO Focus',
        desc: 'Focus on ICOs ans specific cryptocurrencies that aligns with our investment framework',
    },
    {
        img: different3,
        title: 'Team mentorship',
        desc: 'Guide and mentor the core teams to structure a portfolio business model',
    },
];

export default function Different() {
    const redirectToPreSale = () => {
        window.open('https://purchase.vcspectra.io/login', '_blank');
    };
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <>
            <Box sx={{ py: { xs: 5, sm: 7, md: 10 } }}>
                <Container>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box>
                                <Typography
                                    data-aos="zoom-in-down"
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '900',
                                        fontSize: { xs: '32px', sm: '45px', md: '64px' },
                                        textAlign: 'left',
                                        textTransform: 'capitalize',
                                        color: '#303030',
                                        mb: { xs: 1.5, sm: 2 },
                                    }}
                                >
                                    What Makes Us{' '}
                                    <span style={{ color: '#650B9D' }}>Different</span>
                                </Typography>
                                <Typography
                                    data-aos="fade-up"
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                        textAlign: 'left',
                                        color: '#000000',
                                    }}
                                >
                                    With sustainable investments and income-generating opportunities
                                    without initial capital. We leverage AI to maximize returns and
                                    offer quarterly dividends to align interests.
                                </Typography>
                                <Button
                                    data-aos="zoom-in-up"
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                        bgcolor: '#650B9D',
                                        color: '#ffffff',
                                        mt: { xs: 2, md: 3 },
                                        '&:hover': {
                                            border: '1px solid #650B9D',
                                            color: '#650B9D',
                                        },
                                    }}
                                    onClick={redirectToPreSale}
                                >
                                    get started <ArrowForwardIcon />
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Box
                                sx={{
                                    overflowX: 'auto',
                                    width: '100%',
                                    '&::-webkit-scrollbar': { display: 'none' },
                                }}
                            >
                                <Stack
                                    direction={{ xs: 'row' }}
                                    minWidth="500px"
                                    spacing={{ xs: 3, sm: 4 }}
                                >
                                    {data?.map(({ img, title, desc }, i) => (
                                        <Box
                                            data-aos="zoom-in-down"
                                            key={i}
                                            p={{ xs: 2 }}
                                            sx={{
                                                border: '2px solid #650B9D',
                                                '& :hover': {
                                                    transform: 'translateY(0)!important',
                                                },
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                gap={{ xs: 1, sm: 2 }}
                                                mb={1}
                                            >
                                                <Box
                                                    sx={{
                                                        width: {
                                                            xs: '35px',
                                                            sm: '42px',
                                                            md: '50px',
                                                        },
                                                    }}
                                                >
                                                    <img src={img} alt="" width="100%" />
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Aileron',
                                                        fontStyle: 'normal',
                                                        fontWeight: '700',
                                                        fontSize: {
                                                            xs: '15px',
                                                            sm: '17px',
                                                            md: '20px',
                                                        },
                                                        color: '#000000',
                                                        pb: 1,
                                                    }}
                                                >
                                                    {title}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Aileron',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '14px',
                                                        md: '16px',
                                                    },
                                                    textAlign: 'left',
                                                    color: '#000000',
                                                }}
                                            >
                                                {desc}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                                <Stack
                                    mt={{ xs: 3, sm: 4 }}
                                    direction={{ xs: 'row' }}
                                    minWidth="500px"
                                    spacing={{ xs: 3, sm: 4 }}
                                >
                                    {data1?.map(({ img, title, desc }, i) => (
                                        <Box
                                            data-aos="zoom-in-up"
                                            key={i}
                                            p={{ xs: 2 }}
                                            sx={{
                                                border: '2px solid #650B9D',
                                                '& :hover': {
                                                    transform: 'translateY(0)!important',
                                                },
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                gap={{ xs: 1, sm: 2 }}
                                                mb={1}
                                            >
                                                <Box
                                                    sx={{
                                                        width: {
                                                            xs: '35px',
                                                            sm: '4xs:1,sm:2px',
                                                            md: '50px',
                                                        },
                                                    }}
                                                >
                                                    <img src={img} alt="" width="100%" />
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Aileron',
                                                        fontStyle: 'normal',
                                                        fontWeight: '700',
                                                        fontSize: {
                                                            xs: '15px',
                                                            sm: '17px',
                                                            md: '20px',
                                                        },
                                                        color: '#000000',
                                                        pb: 1,
                                                    }}
                                                >
                                                    {title}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Aileron',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '14px',
                                                        md: '16px',
                                                    },
                                                    textAlign: 'left',
                                                    color: '#000000',
                                                }}
                                            >
                                                {desc}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
