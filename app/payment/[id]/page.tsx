import CardPayementDetails from "@/components/shop/card-payement-details";
import { Suspense } from "react";

export async function generateStaticParams() {
    const response = await fetch("http://localhost:5001/apparts");
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
