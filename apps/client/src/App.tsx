import "./App.css";
import Header from "./components/header";
import Home from "./routes/home";
import Create from "./routes/create";
import Retrieve from "./routes/retrieve";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import jwt_decode from "jwt-decode";

function App() {
    const [user, setUser] = useState({
        picture: "",
        credential: "",
    });

    useEffect(() => {});

    const initializeGoogleSignIn = () => {
        window.onload = function () {
            window.google.accounts.id.initialize({
                client_id: "401968243070-pngp8trfvlt9saqfs420cs5082341n9p.apps.googleusercontent.com",
                callback: handleCredentialResponse,
            });
            window.google.accounts.id.renderButton(
                document.getElementById("g_id_signin"),
                {
                    type: "icon",
                    shape: "circular",
                    logo_alignment: "center",
                    theme: "outline",
                    size: "medium",
                } // customization attributes
            );
            window.google.accounts.id.prompt(); // also display the One Tap dialog
        };
    };

    const handleCredentialResponse = (response: { credential: string }) => {
        const decoded: { picture: string; credential: string } = jwt_decode(response.credential);
        decoded.credential = response.credential;
        setUser(decoded);
    };

    initializeGoogleSignIn();

    return (
        <div className="App">
            <BrowserRouter basename="/client">
                <Header user={user} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {user.credential && <Route path="/create" element={<Create user={user} />} />}
                        <Route path="/retrieve" element={<Retrieve />} />
                    </Routes>
                </main>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
