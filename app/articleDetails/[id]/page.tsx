import CardAppartDetails from "@/components/card-appart-details";
import CardArticleDetails from "@/components/card-article-details";


export async function generateStaticParams() {
    const response = await fetch('http://localhost:5001/articles');
    const article = await response.json();
    return article.map((article: { _id: string }) => ({
        id: article._id,
    }));
}

export default function DetailsPage({ params }: { params: { id: string } }) {
    return <CardArticleDetails id={params.id} />;
}