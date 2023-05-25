import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

import tokenimg from '../assets/tokenimg.png';

const option = {
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            // roseType: 'area',
            radius: ['0', '100%'],
            avoidLabelOverlap: false,
            label: {
                position: 'inner',
                color: '#fff',
                fontSize: 8,
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: '#fff',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 15, name: '50%' },
                { value: 14, name: '20%' },
                { value: 12, name: '10%' },
                { value: 10, name: '6%' },
                { value: 8, name: '5%' },
            ],
        },
    ],
};
export default function Tokenomics() {
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
                    <Grid container rowSpacing={5} alignItems="center" justifyContent="center">
                        <Grid item xs={9} sm={8} md={6}>
                            <ReactEcharts
                                option={option}
                                style={{ width: '100%', height: '40vh' }}
                            />
                        </Grid>
                        <Grid item xs={3} sm={4} md={2}>
                            <img src={tokenimg} alt="" height="100%" width="100%" />
                        </Grid>
                        <Grid item xs={9} sm={3} md={4}>
                            <Typography
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '900',
                                    fontSize: { xs: '24px', sm: '28px', md: '32px' },
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
                                    fontWeight: '400',
                                    fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                    textAlign: 'left',
                                    color: '#000000',
                                    ml: { xs: 0, md: 5 },
                                }}
                            >
                                <li style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                                    50% - ICO
                                </li>
                                <li style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                                    20% - Pre-ICO
                                </li>
                                <li style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                                    10% - Founders & Team
                                </li>
                                <li style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                                    6% - Reserve & Bonus Tokens for Pre-ICO
                                </li>
                                <li style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                                    5% - Advisers
                                </li>
                                <li style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                                    3% - Bounty
                                </li>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
