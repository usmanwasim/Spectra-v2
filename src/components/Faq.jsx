import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import RightIcon from '@mui/icons-material/ChevronRight';
import DownIcon from '@mui/icons-material/KeyboardArrowUp';

let accordiantData = [
    {
        heading: 'How do i pay for the essentials or premium plan?',
        detail: "It's important to spread your investments across different types of assets, such as stocks, bonds, real estate, and commodities.1",
    },
    {
        heading: 'How do i pay for the essentials or premium plan?',
        detail: "It's important to spread your investments across different types of assets, such as stocks, bonds, real estate, and commodities.2",
    },
    {
        heading: 'How do i pay for the essentials or premium plan?',
        detail: "It's important to spread your investments across different types of assets, such as stocks, bonds, real estate, and commodities.3",
    },
    {
        heading: 'How do i pay for the essentials or premium plan?',
        detail: "It's important to spread your investments across different types of assets, such as stocks, bonds, real estate, and commodities.4",
    },
];
export default function Faq() {
    const [expanded, setExpanded] = useState(0);
    return (
        <>
            <Box py={{ xs: 10, sm: 15, md: 20 }}>
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
                            mb: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        FAQs
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            {accordiantData.map(({ heading, detail }, i) => (
                                <MuiAccordion
                                    key={i}
                                    // disableGutters
                                    // elevation={0}
                                    // square
                                    expanded={expanded === i ? true : false}
                                    onClick={() => setExpanded(i)}
                                    sx={{
                                        my: { xs: 2, sm: 3 },
                                        borderBottom: '2px solid #650B9D',
                                    }}
                                >
                                    <MuiAccordionSummary
                                        sx={{ minHeight: '70px' }}
                                        expandIcon={
                                            expanded === i ? (
                                                <DownIcon sx={{ color: '#000' }} />
                                            ) : (
                                                <RightIcon sx={{ color: '#000' }} />
                                            )
                                        }
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Aileron',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                                lineHeight: '26px',
                                                color: '#000000',
                                            }}
                                        >
                                            {heading}
                                        </Typography>
                                    </MuiAccordionSummary>
                                    <MuiAccordionDetails
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            lineHeight: '26px',
                                            color: '#000000',
                                        }}
                                    >
                                        <Typography>{detail}</Typography>
                                    </MuiAccordionDetails>
                                </MuiAccordion>
                            ))}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {accordiantData.map(({ heading, detail }, i) => (
                                <MuiAccordion
                                    key={i}
                                    // disableGutters
                                    // elevation={0}
                                    // square
                                    expanded={expanded === i + 4 ? true : false}
                                    onClick={() => setExpanded(i + 4)}
                                    sx={{
                                        my: { xs: 2, sm: 3 },
                                        borderBottom: '2px solid #650B9D',
                                    }}
                                >
                                    <MuiAccordionSummary
                                        sx={{ minHeight: '70px' }}
                                        expandIcon={
                                            expanded === i ? (
                                                <DownIcon sx={{ color: '#000' }} />
                                            ) : (
                                                <RightIcon sx={{ color: '#000' }} />
                                            )
                                        }
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Aileron',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: { xs: '15px', sm: '17px', md: '20px' },
                                                lineHeight: '26px',
                                                color: '#000000',
                                            }}
                                        >
                                            {heading}
                                        </Typography>
                                    </MuiAccordionSummary>
                                    <MuiAccordionDetails
                                        sx={{
                                            fontFamily: 'Aileron',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                            lineHeight: '26px',
                                            color: '#000000',
                                        }}
                                    >
                                        <Typography>{detail}</Typography>
                                    </MuiAccordionDetails>
                                </MuiAccordion>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
