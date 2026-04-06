import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import News from "./pages/News";
import StartProject from "./pages/StartProject";
import ScrollToTop from "./utils/ScrollToTop";
import OurTeam from "./pages/OurTeam";
import AboutUs from "./pages/AboutUs";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Terms from "./pages/term";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurServicesPricing from "./pages/OurSAP";
import NotFound from "./pages/NotFound";
import Login from "./login";
import Signup from "./signup";
import { Logout } from "./logout";
import { AuthProvider } from "./store/auth";


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <AuthProvider>
      <Header />
      </AuthProvider>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/services-pricing" element={<OurServicesPricing />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
