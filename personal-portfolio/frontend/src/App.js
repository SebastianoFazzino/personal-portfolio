import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

const App = () => {
    return (
        <div className="app">
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