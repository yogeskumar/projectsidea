import "./App.css";
import React, {useEffect} from "react";
import Navbar from "./components/NavBar/index";
import AboutProject from "./pages/AboutProject";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import BookASession from "./pages/BookASession";
import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
// import FAQ from "./pages/FAQ";
// import CustomProject from "./pages/CustomProject";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import { GlobalProjectsProvider } from "./HandlingContext/ProjectsContext";
import { GlobalIdProvider } from "./HandlingContext/IdContext";
import { GlobalDomainsProvider } from "./HandlingContext/DomainsContext";
import { GlobalPricesProvider } from "./HandlingContext/PricesContext";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js';
    script.async = true;

    const wa_btnSetting = {
      btnColor: '#16BE45',
      ctaText: 'WhatsApp Us',
      cornerRadius: 40,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      btnPosition: 'right',
      whatsAppNumber: '918218629990',
      welcomeMessage: 'Project Help Needed',
      zIndex: 999999,
      btnColorScheme: 'light',
    };

    script.onload = () => {
      window._waEmbed(wa_btnSetting);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
    <GlobalProjectsProvider>
      <GlobalDomainsProvider>
      <GlobalPricesProvider>
    <GlobalIdProvider>
    <Router>
      <Navbar />
      <ScrollToTop />
      <div style={{margin:70}}></div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutproject/:id" element={<AboutProject />} />
        {/* <Route exact path="/bookasession" element={<BookASession />} /> */}
        {/* <Route exact path="/customproject" element={<CustomProject />} /> */}
        {/* <Route exact path="/aboutus" element={<AboutUs />} /> */}
        <Route exact path="/contactus" element={<ContactUs />} />
        {/* <Route exact path="/faq" element={<FAQ />} /> */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
    </GlobalIdProvider>
    </GlobalPricesProvider>
    </GlobalDomainsProvider>
    </GlobalProjectsProvider>
    </>
  );
}

export default App;
