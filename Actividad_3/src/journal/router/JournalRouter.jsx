import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import JournalPage from '../pages/JournalPage'

const JournalRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<JournalPage />} />

            {/* Default route -> Redirection to login */}
            <Route path="/*" element={<Navigate to="/journal" />} />
        </Routes>
    )
}

export default JournalRouter