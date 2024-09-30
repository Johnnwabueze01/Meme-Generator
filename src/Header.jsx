import React from "react";
import logo from "./assets/logo.png";
import image from "./assets/johnny.jpg"

export default function Header() {
    return(
      <header className="header">
        <img src={logo} className="header-image" />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-project">By John Nwabueze</h4>
        <img src={image} alt="My_Image" className="my-img" />
        </header>
    )
}