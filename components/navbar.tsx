"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isConnected, setIsConnected] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    }

    function handleConnect() {
        if (sessionStorage.getItem("user")) {
            setIsConnected(true);
        }
    }

    useEffect(() => {
        handleConnect();
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full  flex items-start justify-between p-4 bg-primary text-white transition-all duration-300 ${
                isVisible ? "" : "-translate-y-full"
            }`}>
            <h1 className=" text-2xl font-bold">VitFesse</h1>
            <div
                className={`w-fit  text-white flex flex-col justify-start items-end gap-2 overflow-hidden transition-all duration-300 ${
                    menu ? "h-36" : "h-10"
                }`}>
                <div onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-white" />
                </div>
                <ul className="text-end">
                    <li>
                        <a href="/">Accueil</a>
                    </li>
                    <li>{isConnected ? <a href="/location">Mes Loc&apos;</a> : <a href="/connect">Contact</a>}</li>
                    <li>{isConnected ? <a href="/appart">Mes Appart&apos;</a> : <a href="/connect">Notre histoire</a>}</li>
                    <li>{isConnected ? <a href="/account">Mon Compte</a> : <a href="/connect">Connexion</a>}</li>
                </ul>
            </div>
        </nav>
    );
}
