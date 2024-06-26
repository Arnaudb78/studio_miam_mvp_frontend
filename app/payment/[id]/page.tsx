import CardPayementDetails from "@/components/shop/card-payement-details";
import { Suspense } from "react";

export async function generateStaticParams() {
    const response = await fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts");
    const apparts = await response.json();
    return apparts.map((appart: { _id: string }) => ({
        id: appart._id,
    }));
}

export default function Payment({ params }: { params: { id: string } }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CardPayementDetails id={params.id} />
        </Suspense>
    );
}
