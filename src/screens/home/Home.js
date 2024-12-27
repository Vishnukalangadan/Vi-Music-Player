import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/Library";
import Trending from "../trending/Trending";
import Player from "../player/Player";
import Feed from "../feed/Feed";
import Favourite from "../favourite/Favourite";
import "./Home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";

function Home() {
    const [token, setToken] = useState("");
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        // window.location.hash = ''
        if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token)
        } else {
            setToken(token);
        }
    }, []);
    return !token ? (
        <Login />
    ) : (
        <Router>
            <div className="main-body">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Library />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/favourites" element={<Favourite />} />
                    <Route path="/player" element={<Player />} />
                    <Route path="/trending" element={<Trending />} />
                </Routes>
            </div>
        </Router>
    );
}
export default Home;
