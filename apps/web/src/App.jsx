
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AcademyPage from './pages/AcademyPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import PrivacyPage from '@/pages/PrivacyPage.jsx';
import TermsPage from '@/pages/TermsPage.jsx';

function App() {
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/academy" element={<AcademyPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    {/* Dummy login route to catch the redirect from AcademyPage */}
                    <Route path="/login" element={
                        <div className="min-h-screen flex items-center justify-center bg-background">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-foreground mb-4">Iniciar Sesión</h1>
                                <p className="text-muted-foreground mb-8">Página de inicio de sesión en construcción.</p>
                                <a href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200">
                                    Volver al inicio
                                </a>
                            </div>
                        </div>
                    } />
                    <Route path="*" element={
                        <div className="min-h-screen flex items-center justify-center bg-background">
                            <div className="text-center">
                                <h1 className="text-6xl font-bold text-primary mb-4 font-['Outfit']">404</h1>
                                <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
                                <a href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200">
                                    Volver al inicio
                                </a>
                            </div>
                        </div>
                    } />
                </Routes>
                <Toaster position="bottom-right" theme="dark" />
            </Router>
        </AuthProvider>
    );
}

export default App;
