import AWS from "aws-sdk";
import fs from "fs";


import { AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET } from "./config.js";


AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: "ap-south-1" // Mumbai region
});

const s3 = new AWS.S3();


const uploadFile = () => {
    const fileContent = fs.readFileSync("sample.txt");

    const params = {
        Bucket: AWS_BUCKET,
        Key: "sample.txt",
        Body: fileContent
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error("❌ Error uploading:", err);
        } else {
            console.log("✅ File uploaded successfully!");
            console.log("🔗 File URL:", data.Location);
        }
    });
};

uploadFile();
