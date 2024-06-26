"use client";

import FormCreateAppart from "@/components/form/form-create-appart";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Create() {
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
            <FormCreateAppart />
        </>
    );
}
