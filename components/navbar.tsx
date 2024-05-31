"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){

    const [menu, setMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    function toggleMenu(){
        setMenu(!menu);
    }

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setIsVisible(false);
        } else {
            // Scrolling up
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
        <nav className={`fixed top-0 left-0 w-full  flex items-start justify-between p-4 bg-gray-800 text-white transition-all duration-300 ${isVisible ? "" : "-translate-y-full"}`}>
            <h1 className=" text-2xl font-bold">VitFesse</h1>
            <div className={`w-fit  text-white flex flex-col justify-start items-end gap-2 overflow-hidden transition-all duration-300 ${menu ? "h-36" : "h-10"}`}>
                <div onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-white" />
                </div>
                <ul>
                    <li><a href="">A propos</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">link</a></li>
                    <li><a href="">link</a></li>
                </ul>
            </div>
        </nav>
    );
}


/* 
        <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
        </div>
*/  