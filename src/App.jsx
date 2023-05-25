import './App.css';
import { Box } from '@mui/material';
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
    return (
        <>
            <Box>
                <Header />
                <HeroSection />
                <Confidence />
                <Spectra />
                <Invest />
                <Different />
                <Funds />
                <Tokenomics />
                <Roadmap />
                <Faq />
                <Footer />
            </Box>
        </>
    );
}

export default App;
