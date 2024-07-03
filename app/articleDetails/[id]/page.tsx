import CardArticleDetails from "@/components/article/card-article-details";

export async function generateStaticParams() {
    const response = await fetch("https://pacific-reaches-55510-1cc818501846.herok/articles");
    const article = await response.json();
    return article.map((article: { _id: string }) => ({
        id: article._id,
    }));
}

export default function DetailsPage({ params }: { params: { id: string } }) {
    return <CardArticleDetails id={params.id} />;
}
