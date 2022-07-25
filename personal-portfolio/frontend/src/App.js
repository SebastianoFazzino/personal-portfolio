import React from "react";
import { NavBar } from "./components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

import './App.scss';

const App = () => {
    return (
        <div className="app">
            <NavBar />
            <About />
            <Header />
            <Skills />
            <Testimonial />
            <Work />
            <Footer />
        </div>
    );
}

export default App;