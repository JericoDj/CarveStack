import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthDialog } from '../contexts/AuthDialogContext';

const AuthDialog = () => {
    const { dialogType, closeDialog, openDialog } = useAuthDialog();
    const navigate = useNavigate();

    if (!dialogType) return null;

    // --- Login Form UI ---
    const renderLogin = () => (
        <div className="glass-panel relative z-10 mx-4 flex w-full max-w-[420px] flex-col rounded-[2rem] p-8 sm:p-10 shadow-2xl animate-fade-in-up">
            <button
                onClick={closeDialog}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close dialog"
            >
                <span className="material-symbols-outlined">close</span>
            </button>

            <div className="mb-8 flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4aa6d3]/20 to-[#4aa6d3]/5 text-[#4aa6d3] shadow-inner">
                    <span className="material-symbols-outlined text-[32px]">layers</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">CarveStack</h1>
                <p className="mt-2 text-sm font-medium text-slate-500">Welcome back to your workspace</p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); closeDialog(); navigate('/dashboard'); }}>
                <div className="flex flex-col gap-1.5">
                    <label className="ml-1 text-sm font-semibold text-slate-700" htmlFor="email-login">Email</label>
                    <div className="input-glass group flex items-center rounded-full px-4 py-3 transition-all duration-200">
                        <span className="material-symbols-outlined mr-2 text-slate-400">mail</span>
                        <input className="flex-1 bg-transparent border-none outline-none p-0 text-slate-800 placeholder:text-slate-400 focus:ring-0 text-sm font-medium leading-normal" id="email-login" name="email" placeholder="name@carvestack.com" type="email" />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between px-1">
                        <label className="text-sm font-semibold text-slate-700" htmlFor="password-login">Password</label>
                    </div>
                    <div className="input-glass group flex items-center rounded-full px-4 py-3 transition-all duration-200">
                        <span className="material-symbols-outlined mr-2 text-slate-400">lock</span>
                        <input className="flex-1 bg-transparent border-none outline-none p-0 text-slate-800 placeholder:text-slate-400 focus:ring-0 text-sm font-medium leading-normal" id="password-login" name="password" placeholder="Enter your password" type="password" />
                        <button className="flex items-center text-slate-400 hover:text-[#4aa6d3] transition-colors focus:outline-none" type="button">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                    </div>
                    <div className="flex justify-end mt-1">
                        <button type="button" onClick={() => openDialog('forgotPassword')} className="text-sm font-semibold text-[#6B7280] hover:text-[#4aa6d3] transition-colors focus:outline-none">Forgot Password?</button>
                    </div>
                </div>

                <button type="submit" className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-white text-sm font-bold bg-gradient-to-r from-cyan-500 to-[#137fec] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.01] transition-all duration-200 mt-2">
                    Sign In
                </button>
            </form>

            <div className="relative my-8 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-300/60"></div></div>
                <div className="relative bg-white/0 px-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280] backdrop-blur-md rounded-full">Or continue with</div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <button aria-label="Sign in with Google" className="social-btn flex h-12 w-12 items-center justify-center rounded-full shadow-sm">
                    {/* Google SVG */}
                    <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                </button>
                <button aria-label="Sign in with GitHub" className="social-btn flex h-12 w-12 items-center justify-center rounded-full shadow-sm">
                    {/* Github SVG */}
                    <svg className="h-5 w-5 text-[#181717]" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                </button>
            </div>

            <div className="mt-8 text-center text-sm font-medium text-slate-600">
                Don't have an account?
                <button type="button" onClick={() => openDialog('signup')} className="ml-1 text-[#4aa6d3] hover:text-[#3a8ab3] hover:underline decoration-2 underline-offset-2 focus:outline-none">Sign up</button>
            </div>

            <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-6 text-xs text-slate-500/80">
                <a className="hover:text-slate-800 transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-slate-800 transition-colors" href="#">Terms of Service</a>
            </div>
        </div>
    );

    // --- Sign Up Form UI --- //
    const renderSignUp = () => (
        <>
            <div className="glass-panel w-full max-w-[480px] rounded-2xl overflow-hidden relative z-10 p-8 sm:p-10 animate-fade-in-up">
                <button
                    onClick={closeDialog}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label="Close dialog"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="flex flex-col items-center text-center mb-8">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6 text-white">
                        <span className="material-symbols-outlined text-[28px]">architecture</span>
                    </div>
                    <h1 className="text-[#1F2937] text-3xl font-bold tracking-tight mb-2">Create your account</h1>
                    <p className="text-slate-500 text-sm font-medium">Join CarveStack to build better structures.</p>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); closeDialog(); navigate('/dashboard'); }}>
                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1" htmlFor="name">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">person</span>
                            </div>
                            <input className="glass-input block w-full pl-10 pr-3 py-3 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 sm:text-sm" id="name" placeholder="e.g. Alex Smith" type="text" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1" htmlFor="email-signup">Work Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                            </div>
                            <input className="glass-input block w-full pl-10 pr-3 py-3 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 sm:text-sm" id="email-signup" placeholder="name@company.com" type="email" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider ml-1" htmlFor="password-signup">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">lock</span>
                            </div>
                            <input className="glass-input block w-full pl-10 pr-10 py-3 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 sm:text-sm" id="password-signup" placeholder="Min. 8 characters" type="password" />
                            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer" type="button">
                                <span className="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl text-white text-sm font-bold bg-gradient-to-r from-cyan-500 to-[#137fec] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.01] transition-all duration-200 mt-2" type="submit">
                        Create Account
                    </button>
                </form>

                <div className="relative my-8">
                    <div aria-hidden="true" className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-300/50"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 text-xs font-medium text-slate-400 bg-white/40 backdrop-blur-sm rounded-full">OR CONTINUE WITH</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="glass-btn-secondary flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-slate-700 text-sm font-semibold shadow-sm hover:shadow">
                        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24"><path d="M12.0003 0C5.37246 0 0 5.37246 0 12.0003C0 17.3025 3.43825 21.8005 8.20576 23.3867C8.80576 23.4971 9.02501 23.1268 9.02501 22.8066C9.02501 22.5165 9.01464 21.5761 9.00908 20.5753C5.67104 21.3006 4.9666 18.9664 4.9666 18.9664C4.42104 17.5807 3.6346 17.2118 3.6346 17.2118C2.54519 16.4673 3.71701 16.4825 3.71701 16.4825C4.92146 16.5673 5.55504 17.7191 5.55504 17.7191C6.62539 19.5534 8.36339 19.0238 9.04664 18.7169C9.15501 17.9412 9.46539 17.4116 9.80776 17.1114C7.14376 16.8088 4.34289 15.7791 4.34289 11.1804C4.34289 9.87083 4.81076 8.79958 5.58001 7.95871C5.45664 7.65533 5.04501 6.43508 5.69814 4.78746C5.69814 4.78746 6.70539 4.46496 8.99739 6.01771C9.95426 5.75146 10.9804 5.61871 12.0003 5.61383C13.0195 5.61871 14.0456 5.75146 15.0033 6.01771C17.2945 4.46496 18.3009 4.78746 18.3009 4.78746C18.9548 6.43508 18.5439 7.65533 18.4205 7.95871C19.1906 8.79958 19.6577 9.87083 19.6577 11.1804C19.6577 15.7891 16.8539 16.806 14.1808 17.1031C14.6133 17.4754 15.0003 18.2131 15.0003 19.3407C15.0003 20.9573 14.9852 22.2571 14.9852 22.8066C14.9852 23.13 15.2019 23.5042 15.811 23.3859C20.5756 21.7971 24.011 17.3003 24.011 11.9995C24.011 5.37246 18.6385 0 12.0003 0Z" fill="currentColor"></path></svg>
                        <span>GitHub</span>
                    </button>
                    <button className="glass-btn-secondary flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-slate-700 text-sm font-semibold shadow-sm hover:shadow">
                        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
                        <span>Google</span>
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500">
                        Already have an account?
                        <button type="button" onClick={() => openDialog('login')} className="ml-1 font-bold text-[#137fec] hover:text-blue-600 transition-colors focus:outline-none">Log in</button>
                    </p>
                </div>
            </div>

        </>
    );

    // --- Forgot Password Form UI --- //
    const renderForgotPassword = () => (
        <>
            <div className="relative z-10 mx-4 w-full max-w-[440px] animate-fade-in-up">
                <button
                    onClick={closeDialog}
                    className="absolute z-20 top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none"
                    aria-label="Close dialog"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="glass-panel group/card flex flex-col gap-6 rounded-[2rem] p-8 sm:p-10 transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-gradient-to-br from-white/60 to-white/20 shadow-inner">
                            <span className="material-symbols-outlined text-[28px] text-[#2fafee]">lock_reset</span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Reset Password</h1>
                            <p className="text-sm font-medium leading-relaxed text-[#6B7280]">
                                Enter the email associated with your account and we'll send you a link to reset your password.
                            </p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-5 mt-2" onSubmit={(e) => { e.preventDefault(); closeDialog(); }}>
                        <label className="flex flex-col gap-1.5 focus-within:text-[#2fafee]">
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Email address</span>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 group-focus-within:text-[#2fafee] transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <input className="w-full rounded-xl border border-white/50 bg-white/50 py-3.5 pl-11 pr-4 text-slate-900 placeholder:text-slate-400 outline-none ring-1 ring-transparent transition-all duration-200 focus:bg-white/80 focus:ring-[#2fafee]/50 focus:border-[#2fafee]/30 shadow-sm" placeholder="name@example.com" required type="email" />
                            </div>
                        </label>
                        <button className="relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#2fafee] to-[#0ea5e9] p-[1px] shadow-md transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]" type="submit">
                            <span className="flex h-full w-full items-center justify-center rounded-[inherit] bg-gradient-to-r from-[#2fafee] to-[#0ea5e9] px-6 py-3.5 text-sm font-bold text-white transition-all hover:brightness-105">
                                Send Reset Link
                            </span>
                        </button>
                    </form>

                    <div className="flex items-center justify-center pt-2">
                        <button type="button" onClick={() => openDialog('login')} className="group flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-[#2fafee] focus:outline-none">
                            <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:-translate-x-0.5">arrow_back</span>
                            <span>Back to Login</span>
                        </button>
                    </div>
                </div>
                <div className="mx-auto mt-8 h-1.5 w-16 rounded-full bg-slate-900/10 backdrop-blur-sm"></div>
            </div>
        </>
    );

    return (
        <div className="fixed inset-0 z-[100] flex min-h-screen w-full flex-col items-center justify-center overflow-hidden font-display antialiased text-slate-900">
            {/* Common background elements */}
            <div className="absolute inset-0 z-0 bg-slate-900/20 backdrop-blur-sm"></div>

            {/* Backdrop click layer */}
            <div
                className="absolute inset-0 z-0 cursor-pointer"
                onClick={closeDialog}
            ></div>

            {dialogType === 'login' && renderLogin()}
            {dialogType === 'signup' && renderSignUp()}
            {dialogType === 'forgotPassword' && renderForgotPassword()}

        </div>
    );
};

export default AuthDialog;
