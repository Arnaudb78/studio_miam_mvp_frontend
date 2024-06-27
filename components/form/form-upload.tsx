// "use client";

// import { uploadFile } from "@/app/upload/upload.action";
// import { url } from "inspector";
// import { FormEventHandler, useState } from "react";

// export default function FormUpload() {

//     const[imageUrl, setImageUrl] = useState<string | null>(null);

//     const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//         console.log("submit");
//         e.preventDefault();

//         const formDate = new FormData(e.currentTarget);

//         const file = formDate.get("file") as File;

//         const url = await uploadFile(formDate);

//         setImageUrl(url);

//         console.log(url);

//         console.log({file});
//     }
//     return (
//         <>
//            <form onSubmit={handleSubmit}>
//                 <h3 className="font-bold">Images de l&apos;appart&apos;</h3>
//                 <input type="file" name="file" className="border-2 border-gray-500 rounded-lg p-2 m-2" />

//                 <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 m-2">
//                     upload
//                 </button>
//            </form>
//            {imageUrl ? (
//                 <img src={imageUrl} alt="uploaded file" className="m-2" />
//            ): null}
//         </>
//     );
// }