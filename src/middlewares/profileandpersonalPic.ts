import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config(); // تحميل المتغيرات البيئية من ملف .env

// 🔹 Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// 🔹 Configure Multer to use Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: 'arryahmed', // Cloudinary folder
        public_id: `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`, // تجنب المسافات
        resource_type: 'image' // تحديد نوع الملف كصورة
    })
});

// 🔹 File filter to accept only images
const fileFilter = (req:any, file:any, cb:any) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true); // ✅ قبول الملف
    } else {
        cb(new Error("Only image files are allowed!"), false); // ❌ رفض الملف
    }
};

// 🔹 Export Multer Middleware
export const cloudeimage = multer({ storage, fileFilter });
