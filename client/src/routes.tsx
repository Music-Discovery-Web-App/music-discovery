import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import ResultSidebar from "./components/ResultSidebar/ResultSidebar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register"
import Contact from "./views/Contact/Contact"
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"



const FrontendRoutes = () => {
    return (
        <Router>
            <Navbar />
            {/* <ResultSidebar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default FrontendRoutes
