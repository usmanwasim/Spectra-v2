import { Box, Button, Container, Hidden, Stack, Typography } from '@mui/material';
// components
import MobileDrawer from './Drawer';
// images
import logo from '../assets/logo.svg';

export default function Header() {
    return (
        <>
            <Container>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    py={{ xs: 1, sm: 2, md: 2 }}
                >
                    <Box width={{ xs: '60px', sm: '70px', md: '90px' }}>
                        <img src={logo} alt="logo" width="100%" height="100%" />
                    </Box>
                    <Stack direction="row" spacing={{ xs: 1, sm: 1, md: 2 }} alignItems="center">
                        <Hidden mdDown>
                            {['Whitepaper', 'Audits'].map((val, i) => (
                                <Typography
                                    key={i}
                                    sx={{
                                        fontFamily: 'Aileron',
                                        fontStyle: 'normal',
                                        fontWeight: '600 ',
                                        fontSize: { xs: '12px', sm: '15px', md: '17px' },
                                        textAlign: 'center',
                                        textTransform: 'capatilize',

                                        color: '#650B9D',
                                    }}
                                >
                                    {val}
                                </Typography>
                            ))}

                            <Button
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '12px', sm: '15px', md: '17px' },
                                    textAlign: 'center',
                                    textTransform: 'uppercase',
                                    padding: '5px 15px',
                                    background: '#650B9D',
                                    color: '#fff',
                                    borderRadius: '0px',
                                    '&:hover': {
                                        border: '1px solid #650B9D',
                                        color: '#650B9D',
                                    },
                                }}
                            >
                                Invest Now
                            </Button>
                        </Hidden>
                        <Hidden mdUp>
                            <Button
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '12px', sm: '15px', md: '17px' },
                                    textAlign: 'center',
                                    padding: '5px 15px',
                                    border: '1px solid #650B9D',
                                    color: '#650B9D',
                                    borderRadius: '0px',
                                }}
                            >
                                Whitepaper
                            </Button>
                            <Button
                                sx={{
                                    fontFamily: 'Aileron',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '12px', sm: '15px', md: '17px' },
                                    textAlign: 'center',
                                    padding: '5px 15px',
                                    background: '#650B9D',
                                    color: '#ffffff',
                                    borderRadius: '0px',
                                    '&:hover': {
                                        border: '1px solid #650B9D',
                                        color: '#650B9D',
                                    },
                                }}
                            >
                                Audit
                            </Button>

                            <MobileDrawer />
                        </Hidden>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
