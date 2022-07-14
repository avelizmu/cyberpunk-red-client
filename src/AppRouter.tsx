import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import LoginPage from "./components/login/LoginPage";

export default function AppRouter() {

    if(!Cookies.get('sessId')) {
        return <Router>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
        </Router>
    }

    return <Router>
        {
            <Routes>
                {

                }
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        }
    </Router>
}