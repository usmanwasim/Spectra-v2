import './App.css';
import { Box, useTheme, useMediaQuery } from '@mui/material';
// components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Confidence from './components/Confidence';
import Spectra from './components/Spectra';
import Invest from './components/Invest';
import Different from './components/Different';
import Funds from './components/Funds';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <Box position="relative" overflow="hidden">
                <img
                    src="/cion2.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion1.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion4.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion8.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion5.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion7.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion9.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion6.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion4.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion5.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion8.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion6.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion3.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion11.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion7.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <img
                    src="/cion10.png"
                    alt=""
                    className="animation"
                    style={{ display: isMatch ? 'none' : 'block' }}
                />
                <Header />
                <HeroSection />
                <Confidence />
                <Spectra />
                <Invest />
                <Different />
                <Funds />
            </Box>
            <Tokenomics />
            <Roadmap />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
