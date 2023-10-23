import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { UserContextProvider } from "./shared/context/UserContext";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import ResultSidebar from "./components/ResultSidebar/ResultSidebar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Logout from "./views/Logout/Logout";
import Register from "./views/Register/Register"
import Contact from "./views/Contact/Contact"

const FrontendRoutes = () => {
    return (
        <Router>
            <UserContextProvider>
                <Navbar />
                {/* <ResultSidebar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                {/* <Footer /> */}
            </UserContextProvider>
        </Router>
    )
}

export default FrontendRoutes
