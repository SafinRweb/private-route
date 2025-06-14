import { Routes, Route } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";
import Orders from "./pages/Orders"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="orders" element={<PrivateRoute><Orders></Orders></PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute><Profile></Profile></PrivateRoute>} />
      </Route>
    </Routes>
  );
}
