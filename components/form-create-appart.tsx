"use client";

export default function FormCreateAppart() {
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <h2>Créer un appart'</h2>
            <div className="h-[0.5px] w-full bg-gray-500 m-4"></div>
            <form className="flex flex-col justify-center items-center p-8">
                <label htmlFor="name">Nom de l&apos;appart&apos;</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nom de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="description">Description de l&apos;appart&apos;</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="price">Prix de l&apos;appart&apos;</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Prix de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="surface">Surface de l&apos;appart&apos;</label>
                <input
                    type="number"
                    id="surface"
                    name="surface"
                    placeholder="Surface de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="rooms">Nombre de pièces de l&apos;appart&apos;</label>
                <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    placeholder="Nombre de pièces de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="bedrooms">Nombre de chambres de l&apos;appart&apos;</label>
                <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    placeholder="Nombre de chambres de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="bathrooms">Nombre de salles de bain de l&apos;appart&apos;</label>
                <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    placeholder="Nombre de salles de bain de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="address">Adresse de l&apos;appart&apos;</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Adresse de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="city">Ville de l&apos;appart&apos;</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ville de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="zip">Code postal de l&apos;appart&apos;</label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Code postal de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="country">Pays de l&apos;appart&apos;</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Pays de l'appart'"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <label htmlFor="type">Type de l&apos;appart&apos;</label>
                <select
                    id="type"
                    name="type"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                >
                    <option value="appart">Appartement</option>
                    <option value="house">Maison</option>
                    <option value="loft">Loft</option>
                    <option value="duplex">Duplex</option>
                    <option value="studio">Studio</option>
                </select>
                <label htmlFor="equipements">Equipements de l&apos;appart&apos;</label>
                <div className="flex flex-col">
                    <label>
                        <input type="checkbox" name="wifi" />
                        Wifi
                    </label>
                    <label>
                        <input type="checkbox" name="tv" />
                        TV
                    </label>
                    <label>
                        <input type="checkbox" name="clim" />
                        Climatisation
                    </label>
                    <label>
                        <input type="checkbox" name="parking" />
                        Parking
                    </label>
                    <label>
                        <input type="checkbox" name="breakfast" />
                        Petit déjeuner
                    </label>
                </div>
                <label htmlFor="accessories">Accessoires de l&apos;appart&apos;</label>
                <div className="flex flex-col">
                    <label>
                        <input type="checkbox" name="chain" />
                        Chaine Hi-Fi
                    </label>
                    <label>
                        <input type="checkbox" name="cage" />
                        Cage de danse
                    </label>
                    <label>
                        <input type="checkbox" name="jacuzzi" />
                        Jacuzzi
                    </label>
                </div>
                <label htmlFor="date">Date de disponibilité de l&apos;appart&apos;</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    className="border-2 border-gray-500 rounded-lg p-2 m-2"
                />
                <button
                    type="submit"
                    className="bg-[#C2C2C2] p-4 rounded-full"
                >
                    Créer l&apos;appart&apos;
                </button>
            </form>
        </div>
    );
}