import { Suspense } from 'react';
import CardAppartDetails from '@/components/card-appart-details';

export async function generateStaticParams() {
    const response = await fetch('https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts');
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
