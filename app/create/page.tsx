import FormCreateAppat from "@/components/form-create-appat";
import Navbar from "@/components/navbar"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Create(){
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
            <FormCreateAppat />
        </>
    );
}