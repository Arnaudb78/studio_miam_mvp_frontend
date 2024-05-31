export default function Card(){

    const MAX_CHARACTERS = 100; // Définir la limite de caractères souhaitée

    // Fonction utilitaire pour tronquer le texte
    const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    }
  return text.substring(0, maxLength) + '...';
};

const description = "À quelques minutes de Paris et de La Défense, cette maison avec piscine vous ouvre ses portes pour vos vacances Parisienne dans cadre champêtre. Cette superbe maison ouverte vers l'extérieur équipée d'une cuisine ouverte saura charmer les plus exigeants.";

    return (
        <div className="w-screen flex justify-center mt-10">
            <div className="w-[80%] rounded overflow-hidden shadow-lg">
                <img src="https://source.unsplash.com/random" alt="Random" className="w-full h-60"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Paris, France</div>
                    <p className="text-gray-700 text-base">
                    {truncateText(description, MAX_CHARACTERS)}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">#Roleplay</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">#Accessoires</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-1">#Jacuzzi</span>
                </div>
                <div className="my-4">
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">Voir plus</a>
                </div>
            </div>
        </div>
    )
};