"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Profil from "@/components/profil";
import Footer from "@/components/footer";

function useIsClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
}

export default function Account() {
    const isClient = useIsClient();
    const router = useRouter();

    useEffect(() => {
        if (isClient) {
            const session = sessionStorage.getItem("user");
            if (!session) router.push("/connect");
        }
    }, [isClient, router]);

    if (!isClient) {
        return null;
    }

    return (
        <>
            <Navbar />
            <Profil />
            <div className="w-full h-full flex justify-center items-center my-10">
                <a className="bg-primary w-2/3 text-secondary-200 p-4 rounded-2xl text-center lg:w-1/3 xl:w-1/4" href="/appart">
                    Mes locations
                </a>
            </div>
            <Footer />
        </>
    );
}
