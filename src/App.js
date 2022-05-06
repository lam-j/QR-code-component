import React from "react";
import QR from "./components/QR.jsx";

export default function App() {
    return (
        <QR img="./images/image-qr-code.png" 
            alt="qr-code"
            heading="Improve your front-end skills by building projects"
            text="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
        />
    );
}
