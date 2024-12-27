import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import './library.css';

function Library() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await APIKit.get("me/playlists");
                setPlaylists(response?.data?.items || []);
            } catch (error) {
                console.error("Error fetching playlists:", error);
                setPlaylists([]);
            }
        };

        fetchPlaylists();
    }, []);

    return (
        <div className="screen-container">
            <div className="library-body">
                {playlists.length > 0 ? (
                    playlists.map((playlist, index) => (
                        <div className="playlist-card" key={index}>
                            <img
                                src={playlist?.images?.[0]?.url || "https://tse3.mm.bing.net/th?id=OIP.cPQBkAI7hOoMOv5DmcqnnwHaEc&pid=Api&P=0&h=180"}
                                alt="playlist-art"
                                className="playlist-image"
                            />
                            <p className="playlist-title">{playlist?.name || "Untitled Playlist"}</p>
                            <p className="playlist-subtitle">{playlist?.tracks?.total || 0} tracks</p>
                        </div>
                    ))
                ) : (
                    <p>No playlists available.</p>
                )}
            </div>
        </div>
    );
}

export default Library;
