import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import fund1 from '../assets/fund1.png';
import fund2 from '../assets/fund2.png';
import fund3 from '../assets/fund3.png';
import fundbg from '../assets/fundbg.png';
import Partners from './Partners';

const data = [
    {
        img: fund1,
        title: 'Introducing the Market Neutrality Fund',
        desc: 'Experience our innovative investment vehicle, the Market Neutrality Fund. Combining market making and directional strategies, it offers a unique approach to investing. With a focus on managing portfolio risks, it leverages market volumes and volatility to deliver exceptional returns in all market conditions. Witness the power of adaptive strategies in both bullish and bearish markets.',
    },
    {
        img: fund2,
        title: 'Explore the Advanced Algorithmic Fund',
        desc: 'Explore the Advanced Algorithmic Fund: Embark on an intelligent investing journey with our Advanced Algorithmic Fund. Supported by round-the-clock optimization and monitoring, this fund thrives in dynamic markets. Leveraging cutting-edge algorithms and strategic insights, it unlocks superior returns from high-risk investments. Ideal for individuals with a bold risk appetite seeking new opportunities.',
    },
    {
        img: fund3,
        title: 'Unleash the Potential of our DeFi Fund',
        desc: 'Immerse yourself in decentralized finance with our DeFi Fund, guided by our expert Investment Committee specializing in crypto assets and the dynamic DeFi space. With an eye for emerging trends, this actively managed fund thoughtfully participates in DeFi opportunities while managing drawdown risks. Embrace the future of finance with confidence.',
    },
];

export default function Funds() {
    return (
        <>
            <Box py={{ xs: 5, sm: 7, md: 10 }} position="relative" id="funds">
                <Box
                    width={{ xs: '60%', md: '35%' }}
                    height={{ xs: 'auto', md: '80%' }}
                    position="absolute"
                    zIndex={-10}
                    top="20%"
                    left="0%"
                >
                    <img src={fundbg} alt="" width="100%" height="100%" />
                </Box>
                <Container>
                    <Typography
                        sx={{
                            fontFamily: 'Aileron',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            fontSize: { xs: '32px', sm: '45px', md: '64px' },
                            textAlign: 'center',
                            textTransform: 'capitalize',
                            color: '#000000',
                            mb: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        Our Funds
                    </Typography>

                    <Grid container spacing={{ xs: 3, sm: 5, md: 7 }}>
                        {data?.map(({ img, title, desc }, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Box>
                                    <Box>
                                        <img src={img} alt="" width="100%" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '900',
                                            fontSize: { xs: '18px', sm: '19px', md: '20px' },
                                            color: '#000000',
                                            pb: 1,
                                        }}
                                    >
                                        {title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '10px', sm: '14px', md: '16px' },
                                            textAlign: 'left',
                                            color: '#000000',
                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Partners />
            </Box>
        </>
    );
}
