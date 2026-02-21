import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../screens/Landing';
import Dashboard from '../screens/Dashboard';
import Pricing from '../screens/Pricing';
import HowItWorks from '../screens/HowItWorks';
import Features from '../screens/Features';
import ProjectBuilder from '../screens/ProjectBuilder';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/builder/:projectId" element={<ProjectBuilder />} />
        </Routes>
    );
};

export default AppRoutes;
