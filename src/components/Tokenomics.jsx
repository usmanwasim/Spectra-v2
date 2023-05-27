import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import ReactEcharts from 'echarts-for-react';
// import * as echarts from 'echarts';

import tokenimg from '../assets/tokenimg.png';
import tokenchart from '../assets/token-chart.png';

// const option = {
//     tooltip: {
//         trigger: 'item',
//     },
//     series: [
//         {
//             name: 'Access From',
//             type: 'pie',
//             // roseType: 'area',
//             radius: ['0', '100%'],
//             avoidLabelOverlap: false,
//             label: {
//                 position: 'inner',
//                 color: '#fff',
//                 fontSize: 8,
//             },
//             emphasis: {
//                 label: {
//                     show: true,
//                     fontSize: 10,
//                     fontWeight: 'bold',
//                     color: '#fff',
//                 },
//             },
//             labelLine: {
//                 show: false,
//             },
//             data: [
//                 { value: 15, name: '50%' },
//                 { value: 14, name: '20%' },
//                 { value: 12, name: '10%' },
//                 { value: 10, name: '6%' },
//                 { value: 8, name: '5%' },
//             ],
//         },
//     ],
// };
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
                    <Grid
                        container
                        rowSpacing={10}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        {/* <Grid item xs={9} sm={8} md={6}>
                            <ReactEcharts
                                option={option}
                                style={{ width: '100%', height: '40vh' }}
                            />
                        </Grid> */}
                        <Grid item xs={12} sm={6} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <img src={tokenchart} alt="" height="100%" width="100%" />
                                <Box
                                    sx={{
                                        width: { xs: '20%', sm: '22%', md: '28%' },
                                        height: { xs: '20%', sm: '22%', md: '28%' },
                                        position: 'absolute',
                                        top: { xs: '92%', sm: '35%' },
                                        left: { xs: '40%', sm: '95%' },
                                        transform: { xs: 'rotate(90deg)', sm: 'rotate(0deg)' },
                                    }}
                                >
                                    <img src={tokenimg} alt="" height="100%" width="100%" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
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
                                    fontWeight: '700',
                                    fontSize: { xs: '14px', sm: '17px', md: '20px' },
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
