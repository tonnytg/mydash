import React from 'react';
import './App.css';
import MuiNavbar from "./components/MuiNavbar";
import { Box, Container } from "@mui/material";
import {Routes, Link, Route } from "react-router-dom";
import {Page} from "./components/Page";

// App.js
function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

const App: React.FC = () => {
    return (
        <React.Fragment>
            <Box paddingTop={'70px'}>
                <Container maxWidth="lg">
                    <MuiNavbar />
                    <Routes>
                        <Route path="/" element={<Page title="Home"/>} />
                        <Route path="login" element={<Page title="Login"/>} />
                        <Route path="about" element={<Page title="Sobre"/>} />
                        <Route path="sobre" element={<Page title="Sobre"/>} />
                        <Route path="logout" element={<Page title="logout"/>} />
                    </Routes>
                </Container>
            </Box>
        </React.Fragment>
    );
}

export default App;
