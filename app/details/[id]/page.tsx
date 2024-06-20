import CardAppartDetails from "@/components/card-appart-details";


export async function generateStaticParams() {
    const response = await fetch('http://localhost:5001/apparts');
    const apparts = await response.json();

    return apparts.map((appart: { _id: string }) => ({
        id: appart._id,
    }));
}

export default function DetailsPage({ params }: { params: { id: string } }) {
    return <CardAppartDetails id={params.id} />;
}