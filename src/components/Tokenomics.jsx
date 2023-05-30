import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import tokenimg from '../assets/tokenimg.png';
import tokenchart from '../assets/token-chart.png';
import tokenchart1 from '../assets/token-chart1.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tokenomics() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box py={{ xs: 5, sm: 7, md: 10 }} bgcolor="#CDBFE2">
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
                        }}
                    >
                        Tokenomics
                    </Typography>
                    <Box
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
                                                sx={{
                                                    width: { xs: '20%', sm: '15%', md: '28%' },
                                                    height: { xs: '20%', sm: '15%', md: '28%' },
                                                    position: 'absolute',
                                                    top: { xs: '95%', md: '35%' },
                                                    left: { xs: '40%', md: '100%' },
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
                                        <Box>
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
                                                        md: '19px',
                                                    },
                                                    lineHeight: '19px',
                                                    letterSpacing: '0.05em',
                                                    textAlign: 'left',
                                                    color: '#000000',
                                                    ml: { xs: 0, md: '10px' },
                                                }}
                                            >
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    40% - Investments in portfolio of projects
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    40% - Investments in other ICO/cryptocurrency
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    10% - Fund management
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    05% - Marketing
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    03% - Reserve
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    02% - Legal
                                                </li>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid
                                    container
                                    rowSpacing={10}
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
                                                sx={{
                                                    width: { xs: '20%', sm: '15%', md: '28%' },
                                                    height: { xs: '20%', sm: '15%', md: '28%' },
                                                    position: 'absolute',
                                                    top: { xs: '92%', md: '35%' },
                                                    left: { xs: '40%', md: '95%' },
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
                                                }}
                                            >
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    50% - ICO
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    20% - Pre-ICO
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    10% - Founders & Team
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    06% - Reserve & Bonus Tokens for Pre-ICO
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    05% - Advisers
                                                </li>
                                                <li
                                                    style={{
                                                        fontSize: 'inherit',
                                                        fontWeight: 'inherit',
                                                        lineHeight: '19px',
                                                        letterSpacing: '0.05em',
                                                        marginBottom: '16px',
                                                    }}
                                                >
                                                    03% - Bounty
                                                </li>
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
