import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "VitFesse by Studio Miam.",
  description: "Découvrez VitFesse, la plateforme idéale pour louer votre loveroom en quelques clics. Profitez d'une expérience intime et unique avec notre service rapide et facile à utiliser. Réservez dès maintenant !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body className="pt-[72px]">{children}</body>
    </html>
  );
}
