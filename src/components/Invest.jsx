import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import invest1 from '../assets/invest1.png';
import invest2 from '../assets/invest2.png';
import invest3 from '../assets/invest3.png';

const data = [
    {
        img: invest1,
        title: 'Portfolio Selection',
        desc: 'Our investment team uses a rigorous selection process to identify high-potential investment opportunities in the blockchain and technology space.',
    },
    {
        img: invest2,
        title: 'Capital Allocation',
        desc: 'Once we have selected our portfolio, we allocate our capital to each company based on our investment strategy and risk management principles. We typically invest in early-stage companies, providing them with seed or series A funding to help them grow and scale their operations.',
    },
    {
        img: invest3,
        title: 'Value Creation',
        desc: 'As our portfolio companies grow and achieve key milestones, we work with their management teams to create value and maximize returns for our investors.',
    },
];

export default function Invest() {
    return (
        <>
            <Box py={{ xs: 5, sm: 7, md: 10 }} bgcolor="#650B9D">
                <Container>
                    <Typography
                        sx={{
                            fontFamily: 'Aileron',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            fontSize: { xs: '32px', sm: '45px', md: '64px' },
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#ffffff',
                            mb: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        How We Invest
                    </Typography>

                    <Grid container spacing={{ xs: 3, sm: 5, md: 7 }} alignItems="center">
                        {data?.map(({ img, title, desc }, i) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={i}
                                sx={{
                                    '& :hover': {
                                        transform: 'translateY(-35px)',
                                    },
                                }}
                            >
                                <Box
                                    p={{ xs: 2, sm: 4 }}
                                    sx={{
                                        border: '2px solid #ffffff',
                                        '& :hover': {
                                            transform: 'translateY(0)!important',
                                        },
                                    }}
                                >
                                    <Stack direction="row" alignItems="baseline" gap={2} mb={1}>
                                        <Box sx={{ width: { xs: '40px', sm: '45px', md: '50px' } }}>
                                            <img src={img} alt="" width="100%" />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Aileron',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                                color: '#ffffff',
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
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            textAlign: 'left',
                                            color: '#ffffff',
                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
