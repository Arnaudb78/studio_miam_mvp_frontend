import CardAppartDetails from "@/components/appart/card-appart-details";
import { Suspense } from "react";

export async function generateStaticParams() {
    const response = await fetch("http://localhost:5001/apparts");
    const apparts = await response.json();
    return apparts.map((appart: { _id: string }) => ({
        id: appart._id,
    }));
}

export default function DetailsPage({ params }: { params: { id: string } }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CardAppartDetails id={params.id} />
        </Suspense>
    );
}
