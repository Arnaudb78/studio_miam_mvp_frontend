export default function Footer() {
    return (
       <footer className="h-full w-full p-4">
        <div className="w-full h-full bg-gray-100 flex flex-col p-8 text-[12px] gap-4 rounded-2xl">
            <div>
                <p className="text-[16px] font-bold">Vitfesse</p>
                <p>Ce site a un faible impact environnemental</p>
                <p>Ce site a un faible impact </p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[16px] font-bold">Contact</p>
                <p>Lorem impsum</p>
                <p>Lorem impsum</p>
                <p>Lorem impsum</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[16px] font-bold">Mentions légales</p>
                <p>Lorem impsum</p>
                <p>Lorem impsum</p>
                <p>Lorem impsum</p>
            </div>
            <div className="h-[0.5px] w-full bg-primary"></div>
            <div className="w-full h-fit flex justify-start items-center">
                <p className="w-3/5">Ce site a un faible impact<br></br> environnemental</p>
            </div>
        </div>
       </footer>
    );
}
