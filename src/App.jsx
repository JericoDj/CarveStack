import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { AppNavbarProvider } from './contexts/AppNavbarContext'
import { AuthDialogProvider } from './contexts/AuthDialogContext'
import AuthDialog from './components/AuthDialog'

function App() {
  return (
    <AuthDialogProvider>
      <AppNavbarProvider>
        <div className="app-root">
          <AppRoutes />
        </div>
        <AuthDialog />
      </AppNavbarProvider>
    </AuthDialogProvider>
  )
}

export default App
