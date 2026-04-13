import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./utils/ScrollToTop";

// Public Pages
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import News from "./pages/News";
import StartProject from "./pages/StartProject";
import OurTeam from "./pages/OurTeam";
import AboutUs from "./pages/AboutUs";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Terms from "./pages/term";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurServicesPricing from "./pages/OurSAP";
import NotFound from "./pages/NotFound";

// Auth Pages
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import EmailVerificationPage from "./EmailVerificationPage";
import DashboardPage from "./DashboardPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import ResetPasswordPage from "./ResetPasswordPage";

// Store
import { useAuthStore } from "./store/authStore";


//  Protected Route
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/LoginPage" replace />;
  if (!user?.isVerified) return <Navigate to="/verify-email" replace />;

  return children;
};

//  Redirect Logged-in Users
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  //  Replace spinner with simple UI fallback
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />

      <Header />

      <Routes>
        {/*  Public Routes */}
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

        {/*  Auth Routes */}
        <Route
          path="/LoginPage"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/SignUpPage"
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/*  Verification */}
        <Route path="/verify-email" element={<EmailVerificationPage />} />

        {/*  Password Reset */}
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />

        {/*  Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/*  404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;