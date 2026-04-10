import React from "react";

const headerStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    textAlign: "center",
    margin: "20px 0",
}

export default function Header() {

    return (
        <div>
            <h1 style={headerStyle}>Just do it.</h1>
        </div>
    );
}