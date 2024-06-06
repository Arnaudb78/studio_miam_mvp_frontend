"use client";

import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Location() {
    const router = useRouter();

    useEffect(() => {
        const session = sessionStorage.getItem("user");
        if (!session) {
            router.push("/connect");
        }
    }, []);
    return (
        <>
            <Navbar />
            <h1>Location</h1>
        </>
    );
}