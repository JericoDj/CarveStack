import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../screens/Landing';
import Dashboard from '../screens/Dashboard';
import Pricing from '../screens/Pricing';
import HowItWorks from '../screens/HowItWorks';
import Features from '../screens/Features';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/features" element={<Features />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
