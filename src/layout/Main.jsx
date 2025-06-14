import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Main() {
    return (
        <div className="p-4">
            <Header />
            <Outlet />
        </div>
    );
}
