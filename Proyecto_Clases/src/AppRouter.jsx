import { Route, Routes } from "react-router-dom"
import AuthRouter from "./auth/router/AuthRouter"
import JournalRouter from "./journal/router/JournalRouter"

const AppRouter = () => {
    return (
        <Routes>
            {/* Login y registro */}
            <Route path="/auth/*" element={<AuthRouter />} />

            {/* Vista principal de la app */}
            <Route path="/journal" element={<JournalRouter />} />
        </Routes>
    )
}

export default AppRouter