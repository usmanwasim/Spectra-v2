import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import RightIcon from '@mui/icons-material/ChevronRight';
import DownIcon from '@mui/icons-material/KeyboardArrowUp';

let accordiantData = [
    {
        heading: 'What is Spectra VC?',
        detail: 'Spectra VC is a venture capital fund that invests in blockchain and technology-based projects with the goal of generating returns for investors',
    },
    {
        heading: 'What are the benefits of investing in Spectra VC?',
        detail: 'By investing in Spectra VC, you gain access to income-generating opportunities in the blockchain and technology space without any initial capital requirements. Our sustainable management practices and strict investment criteria ensure that your investment is managed ethically and responsibly.',
    },
    {
        heading: 'How does Spectra VC generate returns for investors?',
        detail: 'Spectra VC invests in promising blockchain and technology-based projects, and through the success of these projects, generates returns for investors.',
    },
    {
        heading: 'Is there a minimum investment required to invest in Spectra VC?',
        detail: 'No, there is no minimum investment required to invest in Spectra VC.',
    },
];
let accordiantData1 = [
    {
        heading: 'How can I track the performance of my investment in Spectra VC?',
        detail: 'Spectra VC provides regular updates and reports on the performance of our investments to our investors.',
    },
    {
        heading: 'What is the Spectra token?',
        detail: 'The Spectra token is a digital asset that gives investors the right to vote on subsequent investment proposals and receive quarterly dividends via buy-backs. It also provides access to exclusive pre-ICO opportunities with high discounts before they become publicly available',
    },
    {
        heading: 'How do I buy Spectra tokens?',
        detail: 'Spectra tokens can be purchased through select cryptocurrency exchanges. More information can be found on our website.',
    },
];
export default function Faq() {
    const [expanded, setExpanded] = useState(3);
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
                    <Grid container spacing={{ xs: 0, md: 5 }}>
                        <Grid item xs={12} md={6}>
                            {accordiantData?.map(({ heading, detail }, i) => (
                                <MuiAccordion
                                    key={i}
                                    // disableGutters
                                    // elevation={0}
                                    // square
                                    expanded={expanded === i ? true : false}
                                    onClick={() => setExpanded(i)}
                                    sx={{
                                        mb: { xs: 2, sm: 3 },
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
                            {accordiantData1?.map(({ heading, detail }, i) => (
                                <MuiAccordion
                                    key={i}
                                    disableGutters
                                    elevation={0}
                                    // square
                                    expanded={expanded === i + 4 ? true : false}
                                    onClick={() => setExpanded(i + 4)}
                                    sx={{
                                        mb: { xs: 2, sm: 3 },
                                        borderBottom: '2px solid #650B9D',
                                    }}
                                >
                                    <MuiAccordionSummary
                                        sx={{ minHeight: '70px' }}
                                        expandIcon={
                                            expanded === i + 4 ? (
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
