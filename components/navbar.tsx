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
            className={`fixed top-0 left-0 w-full  flex items-start justify-between p-4 bg-secondary-200 text-primary transition-all duration-300 ${
                isVisible ? "" : "-translate-y-full"
            }`}>
            <a href="/" className=" text-2xl font-bold flex items-center">
                <img src="/icon.png" alt="logo" className="w-10 h-10" />
                <p>Vitfesse</p>
            </a>
            <div
                className={`w-fit  text-primary  flex flex-col justify-start items-end gap-2 overflow-hidden transition-all duration-300 ${
                    menu ? "h-36" : "h-10"
                }`}>
                <div onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-primary bg-slate-100 p-1 rounded-lg" />
                </div>
                <ul className="text-end">
                    <li>
                        <a href="/room">Chambres</a>
                    </li>
                    <li><a href="/reservation">Shop</a></li>
                    <li><a href="/articles">Blog</a></li>
                    <li><a href="/account">Mon Profil</a></li>
                </ul>
            </div>
        </nav>
    );
}
