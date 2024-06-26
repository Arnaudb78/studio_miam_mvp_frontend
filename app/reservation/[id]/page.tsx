import CardShop from "@/components/shop/card-shop";

export async function generateStaticParams() {
    const response = await fetch("https://pacific-reaches-55510-1cc818501846.herokuapp.com/apparts");
    const apparts = await response.json();

    return apparts.map((appart: { _id: string }) => ({
        id: appart._id,
    }));
}

export default function DetailsPage({ params }: { params: { id: string } }) {
    return <CardShop id={params.id} />;
}
