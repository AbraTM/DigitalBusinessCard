import React from "react";
import Info from "./Components/info";
import About from "./Components/about";
import Interests from "./Components/interests";
import Footer from "./Components/footer";

export default function App(){
    return(
        <div className="page">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}