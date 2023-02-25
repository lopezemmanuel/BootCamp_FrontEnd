import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Default route -> Redirection to login */}
            <Route path="/*" element={<Navigate to="/auth/login"/>} />
        </Routes>
    )
}

export default AuthRouter