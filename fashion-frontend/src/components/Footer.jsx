import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <p>
                &copy; {new Date().getFullYear()}{" "}
                <a
                    href="https://github.com/kikisrbinoska"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                >
                    @Kikis2-26
                </a>
            </p>
        </footer>
    );
}
