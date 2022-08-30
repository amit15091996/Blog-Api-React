import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.css";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./user-routes/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";
import ProfileInfo from "./user-routes/ProfileInfo";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/posts/:postId" element={<PostPage />} />

          <Route path="/user" element={<UserDashboard />}>
            <Route path="private" element={<PrivateRoute />} />
            <Route path="profile-info" element={<ProfileInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
