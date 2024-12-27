import axios from "axios";

// Spotify Authorization Endpoint
const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientId = "44c5758712ee454ca3c871aff3b70422"; // Replace with your actual client ID
const redirectUrl = "http://localhost:3000"; // Replace with your desired redirect URL
const scopes = ["user-library-read", "playlist-read-private"];

// Construct the Spotify login endpoint
export const loginEndPoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUrl
)}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// Create an Axios instance for API calls
const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

// Function to set the Authorization token in the Axios instance
export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async (config) => {
        config.headers.Authorization = `Bearer ${token}`; // Add space after "Bearer"
        return config;
    });
};

export default apiClient;
