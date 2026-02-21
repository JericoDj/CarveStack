import React from 'react';
import { Link } from 'react-router-dom';
import { useAppNavbar } from '../contexts/AppNavbarContext';
import { useAuthDialog } from '../contexts/AuthDialogContext';

const AppNavbar = () => {
    const { user, login, logout } = useAppNavbar();
    const { openDialog } = useAuthDialog();

    return (
        <nav className="sticky top-0 z-50 w-full px-6 py-4 backdrop-blur-xl border-b border-white/40 shadow-sm transition-all">
            <div className="glass-panel mx-auto max-w-[1200px] rounded-[2rem] px-6 py-3 flex items-center justify-between">

                {/* Logo & Brand */}
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-primary to-[#49A7D3] text-white shadow-lg">
                            <span className="material-symbols-outlined text-lg">layers</span>
                        </div>
                        <h2 className="text-[#1F2937] text-xl font-bold tracking-tight">CarveStack</h2>
                    </Link>
                </div>

                {/* Desktop Menu Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors" to="/how-it-works">How it Works</Link>
                    <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors" to="/features">Features</Link>
                    <Link className="text-[#1F2937]/80 hover:text-primary font-medium text-sm transition-colors" to="/pricing">Pricing</Link>
                </div>

                {/* Actions (Login / User Profile Bubble) */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-3 relative group cursor-pointer">
                            {/* User Avatar Bubble */}
                            <img
                                src={user.avatar}
                                alt="User avatar"
                                className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary/50 transition-colors shadow-sm"
                            />
                            {/* Dropdown Menu (optional simple logout) */}
                            <div className="absolute top-12 right-0 bg-white shadow-xl rounded-xl border border-gray-100 p-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                                <div className="px-3 py-2 border-b border-gray-100 mb-1 pointer-events-none">
                                    <p className="text-sm font-bold text-gray-800">{user.name}</p>
                                    <p className="text-xs text-gray-500">{user.email}</p>
                                </div>
                                <Link to="/dashboard" className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors">
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logout}
                                    className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    Log out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button
                                className="hidden sm:block text-[#1F2937] text-sm font-semibold hover:text-primary transition-colors focus:outline-none"
                                onClick={(e) => {
                                    e.preventDefault();
                                    openDialog('login');
                                }}
                            >
                                Log In
                            </button>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    openDialog('signup');
                                }}
                                className="primary-gradient text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
                            >
                                Get Started
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default AppNavbar;
