import React, { useState } from 'react';
import { Box, Button, IconButton, Stack, SwipeableDrawer, Typography } from '@mui/material';

// import logo from '../assets/logo.svg';
import ClearIcon from '@mui/icons-material/Clear';
import icon from '../assets/menuicon.svg';
import { HashLink } from 'react-router-hash-link';

export default function MobileDrawer() {
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const redirectToPreSale = () => {
        window.open('https://purchase.vcspectra.io/login', '_blank');
    };

    const redirectToWhitePaper = () => {
        window.open('/spectra-whitepaper.pdf', '_blank');
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280, p: 2 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box sx={{ width: 'max-content', ml: 'auto' }}>
                <ClearIcon />
                {/* <img src={logo} alt="logo" width="100%" height="100%" /> */}
            </Box>
            <Stack spacing={{ xs: 2, sm: 3, md: 2 }} alignItems="left" my={{ xs: 5, sm: 7 }}>
                {['Our Funds', 'Audits', 'Help center', 'Contact us'].map((val, i) => (
                    <Typography
                        key={i}
                        sx={{
                            fontFamily: 'Manrope',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: { xs: '14px', sm: '16px' },
                            textAlign: 'left',
                            textTransform: 'capatilize',
                            color: '#ffffff',
                        }}
                    >
                        <HashLink
                            to={i === 0 ? '#funds' : '/'}
                            smooth
                            style={{ textDecoration: 'none', color: '#ffffff' }}
                            // scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                        >
                            {val}
                        </HashLink>
                    </Typography>
                ))}
            </Stack>
            <Stack direction="column" spacing={2}>
                <Button
                    sx={{
                        fontFamily: 'Aileron',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '12px', sm: '15px', md: '17px' },
                        textAlign: 'center',
                        padding: '5px 15px',
                        background: '#ffffff',
                        color: '#000000',
                        borderRadius: '0px',
                        width: { xs: '120px', sm: '150px' },
                        textTransform: 'capitalize',
                    }}
                    onClick={redirectToPreSale}
                >
                    Invest Now
                </Button>
                <Button
                    sx={{
                        fontFamily: 'Aileron',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '12px', sm: '15px', md: '17px' },
                        textAlign: 'center',
                        padding: '5px 15px',
                        border: '1px solid #ffffff',
                        color: '#fff',
                        borderRadius: '0px',
                        width: { xs: '120px', sm: '150px' },
                        textTransform: 'capitalize',
                    }}
                    onClick={redirectToWhitePaper}
                >
                    Whitepaper
                </Button>
            </Stack>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)} sx={{ color: '#650B9D' }}>
                        <img src={icon} alt="menuicon" width="100%" height="100%" />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                        PaperProps={{
                            sx: {
                                backgroundColor: '#650B9D',
                                color: '#ffffff',
                            },
                        }}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
