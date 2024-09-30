import * as sdk from "node-appwrite";

export const{
    PROJECT_ID,API_KEY,DATABASE_ID,PATIENT_COLLECTION_ID,DOCTOR_COLLECTION_ID,APPOINTMENT_COLLECTION_ID,NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
}=process.env

const client = new sdk.Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66e422db000193106a70').setKey('standard_5001fe28dafca00de076661cd825e56d9e45b012a3f4c53289f8b5d7d2da31bf79aad1a523475f0e11f58d010f18033295a591441243416a2fcef7110e5c0d4654220d470c7ccea43ebc6726cf7c5f6eafd5410d6754d02c8a90bfb4c5c864353ee2f2d4ca3fea332d8e05662f3e962fc85a91e412ac76a0ab3da9ba6255a18f');

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

