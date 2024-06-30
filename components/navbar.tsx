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
        <>
        <nav
            className={`fixed top-0 left-0 w-full  flex items-start justify-between p-4 bg-secondary-200 text-primary transition-all duration-300 lg:p-8 ${
                isVisible ? "" : "-translate-y-full"
            }`}
            
            style={{ zIndex: 1000 }}>
            <a href="/" className=" text-2xl font-bold flex items-center lg:hidden">
                <img src="/icon.png" alt="logo" className="w-10 h-10" />
                <p>Vitfesse</p>
            </a>
            <a href="/" className="hidden lg:block">
                <img src="/images/logo_nav_desk.png" alt="logo" className="" />
            </a>
            <div>
                <ul className="hidden lg:w-full lg:flex lg:gap-10 lg:font-bold">
                    <li><a className="cursor-pointer" href="/room">Chambres</a></li>
                    <li><a className="cursor-pointer" href="/articles">Blog</a></li>
                    <li><a className="cursor-pointer" href="/create">Mettre en Location</a></li>
                    <li><a className="lg:bg-secondary-300 lg:py-2 lg:px-4 lg:text-secondary-200 lg:rounded-full cursor-pointer" href="/account">Connexion</a></li>
                </ul>
            </div>
            <div
                className={`w-fit  text-primary  flex flex-col justify-start items-end gap-2 overflow-hidden transition-all duration-300 lg:hidden ${
                    menu ? "h-36" : "h-10"
                }`}>
                <div onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="w-8 h-8 text-primary bg-slate-100 p-1 rounded-lg" />
                </div>
                <ul className="text-end">
                    <li>
                        <a href="/room">Chambres</a>
                    </li>
                    <li><a href="/articles">Blog</a></li>
                    <li><a href="/articles">Mettre en Location</a></li>
                    <li><a href="/account">Connexion</a></li>
                </ul>
            </div>
           
        </nav>
        </>
    );
}
