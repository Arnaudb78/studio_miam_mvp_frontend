// import next, { NextApiRequest, NextApiResponse } from 'next';
// import nextConnect from 'next-connect';
// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// // Configurer Multer pour enregistrer les fichiers
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req: any, file: any, cb: any) => {
//             const dir = path.join(process.cwd(), 'public/images/location');
//             if (!fs.existsSync(dir)) {
//                 fs.mkdirSync(dir, { recursive: true });
//             }
//             cb(null, dir);
//         },
//         filename: (req: any, file: any, cb:any) => {
//             cb(null, `${Date.now()}_${file.originalname}`);
//         }
//     })
// });

// const apiRoute = nextConnect({
//     onError(error: any, req: NextApiRequest, res: NextApiResponse) {
//         res.status(501).json({ error: `Something went wrong: ${error.message}` });
//     },
//     onNoMatch(req: any, res: any) {
//         res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//     },
// });

// apiRoute.use(upload.array('files'));

// apiRoute.post((req: NextApiRequest, res: NextApiResponse) => {
//     const files = (req as any).files;
//     const filePaths = files.map((file: any) => `/images/location/${file.filename}`);
//     res.status(200).json({ filePaths });
// });

// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

// export default apiRoute;
