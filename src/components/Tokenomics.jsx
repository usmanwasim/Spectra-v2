import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import tokenimg from '../assets/tokenimg.svg';
import tokenchart from '../assets/token-chart.svg';
import tokenchart1 from '../assets/token-chart1.svg';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tokenomics() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        AOS.init({
            delay: 500,
        });
    }, []);

    return (
        <>
            <Box py={{ xs: 5, sm: 7, md: 10 }} bgcolor="#CDBFE2">
                <Container>
                    <Typography
                        data-aos="flip-left"
                        sx={{
                            fontFamily: 'Aileron',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            fontSize: { xs: '32px', sm: '45px', md: '64px' },
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#303030',
                        }}
                    >
                        Tokenomics
                    </Typography>
                    <Box
                        data-aos="fade-up"
                        sx={{
                            border: '1px solid #650B9D',
                            borderRadius: '10px',
                            width: 'max-content',
                            p: 0.6,
                            mx: 'auto',
                            my: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none',
                                },
                            }}
                        >
                            <Tab
                                sx={{
                                    mr: 1,
                                    px: 3,
                                    color: '#650B9D',
                                    borderRadius: '5px',
                                    fontSize: { xs: '10px', sm: '13px', md: '15px' },
                                    fontWeight: '700',
                                    '&.Mui-selected': {
                                        bgcolor: '#650B9D',
                                        color: '#ffffff',
                                    },
                                }}
                                label="Token Allocation"
                            />
                            <Tab
                                sx={{
                                    px: 3,
                                    color: '#650B9D',
                                    borderRadius: '5px',
                                    fontSize: { xs: '10px', sm: '13px', md: '15px' },
                                    fontWeight: '700',
                                    '&.Mui-selected': {
                                        bgcolor: '#650B9D',
                                        color: '#ffffff',
                                    },
                                }}
                                label="Funds distribution"
                            />
                        </Tabs>
                    </Box>
                    <AnimatePresence>
                        {value === 1 ? (
                            <>
                                <Grid
                                    container
                                    rowSpacing={10}
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        rowSpacing={{ xs: 5, sm: 20 }}
                                        component={motion.div}
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.5,
                                        }}
                                    >
                                        <Box sx={{ position: 'relative' }}>
                                            <img
                                                src={tokenchart1}
                                                alt=""
                                                height="100%"
                                                width="100%"
                                            />
                                            <Box
                                                data-aos="zoom-in-up"
                                                sx={{
                                                    width: { xs: '20%', sm: '15%', md: '28%' },
                                                    height: { xs: '20%', sm: '15%', md: '28%' },
                                                    position: 'absolute',
                                                    top: { xs: '95%', md: '35%' },
                                                    left: { xs: '40%', md: '90%' },
                                                    transform: {
                                                        xs: 'rotate(90deg)',
                                                        md: 'rotate(0deg)',
                                                    },
                                                }}
                                            >
                                                <img
                                                    src={tokenimg}
                                                    alt=""
                                                    height="100%"
                                                    width="100%"
                                                />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        md={5}
                                        component={motion.div}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 100 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.5,
                                        }}
                                    >
                                        <Box data-aos="fade-left">
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Aileron',
                                                    fontStyle: 'normal',
                                                    fontWeight: '900',
                                                    fontSize: {
                                                        xs: '24px',
                                                        sm: '28px',
                                                        md: '32px',
                                                    },
                                                    color: '#000000',
                                                    pb: 1,
                                                    textAlign: { xs: 'center', sm: 'left' },
                                                }}
                                            >
                                                Fund distrubtion
                                            </Typography>
                                            <Box
                                                sx={{
                                                    fontFamily: 'Aileron',
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: {
                                                        xs: '16px',
                                                        sm: '17px',
                                                        md: '18px',
                                                    },
                                                    lineHeight: '19px',
                                                    letterSpacing: '0.05em',
                                                    textAlign: 'left',
                                                    color: '#000000',
                                                    ml: { xs: 0, md: '10px' },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: { xs: 2 },
                                                }}
                                            >
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                        }}
                                                    ></li>
                                                    40% - Investments in portfolio of projects
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                        }}
                                                    ></li>
                                                    40% - Investments in other ICO/cryptocurrency
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                        }}
                                                    ></li>
                                                    10% - Fund management
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                        }}
                                                    ></li>
                                                    5% - Marketing
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                        }}
                                                    ></li>
                                                    3% - Reserve
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                        }}
                                                    ></li>
                                                    2% - Legal
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid
                                    container
                                    rowSpacing={7}
                                    alignItems="center"
                                    justifyContent="space-between"
                                >
                                    <Grid item xs={12} md={5}>
                                        <Box
                                            sx={{ position: 'relative' }}
                                            component={motion.div}
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5,
                                            }}
                                        >
                                            <img
                                                src={tokenchart}
                                                alt=""
                                                height="100%"
                                                width="100%"
                                            />
                                            <Box
                                                data-aos="zoom-in-up"
                                                sx={{
                                                    width: { xs: '20%', sm: '15%', md: '28%' },
                                                    height: { xs: '20%', sm: '15%', md: '28%' },
                                                    position: 'absolute',
                                                    top: { xs: '92%', md: '35%' },
                                                    left: { xs: '40%', md: '80%' },
                                                    transform: {
                                                        xs: 'rotate(90deg)',
                                                        md: 'rotate(0deg)',
                                                    },
                                                }}
                                            >
                                                <img
                                                    src={tokenimg}
                                                    alt=""
                                                    height="100%"
                                                    width="100%"
                                                />
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Box
                                            data-aos="fade-left"
                                            component={motion.div}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Aileron',
                                                    fontStyle: 'normal',
                                                    fontWeight: '900',
                                                    fontSize: {
                                                        xs: '24px',
                                                        sm: '28px',
                                                        md: '32px',
                                                    },
                                                    color: '#000000',
                                                    pb: 1,
                                                    textAlign: { xs: 'center', sm: 'left' },
                                                }}
                                            >
                                                Token allocation
                                            </Typography>
                                            <Box
                                                sx={{
                                                    fontFamily: 'Aileron',
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    fontSize: {
                                                        xs: '16px',
                                                        md: '20px',
                                                    },
                                                    textAlign: 'left',
                                                    color: '#000000',
                                                    ml: { xs: 0, md: '10px' },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: { xs: 0.5, sm: 0 },
                                                }}
                                            >
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            lineHeight: '19px',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '16px',
                                                        }}
                                                    ></li>
                                                    50% - ICO
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            lineHeight: '19px',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '16px',
                                                        }}
                                                    ></li>
                                                    20% - Pre-ICO
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            lineHeight: '19px',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '16px',
                                                        }}
                                                    ></li>
                                                    10% - Founders & Team
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            lineHeight: '19px',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '16px',
                                                        }}
                                                    ></li>
                                                    06% - Reserve & Bonus Tokens for Pre-ICO
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            lineHeight: '19px',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '16px',
                                                        }}
                                                    ></li>
                                                    05% - Advisers
                                                </Stack>
                                                <Stack direction="row" spacing={1}>
                                                    <li
                                                        style={{
                                                            fontSize: 'inherit',
                                                            fontWeight: 'inherit',
                                                            lineHeight: '19px',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '16px',
                                                        }}
                                                    ></li>
                                                    03% - Bounty
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </AnimatePresence>
                </Container>
            </Box>
        </>
    );
}
