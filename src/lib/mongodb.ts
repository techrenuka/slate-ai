
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://mukesh:zpm43zRfzL2XAsFU@cluster0.tpy2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = 'slate_blog';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    // Add these options to handle the TLS issue
    ssl: true,
    tls: true,
    tlsAllowInvalidCertificates: true
  });

  const db = client.db(DB_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function getBlogs() {
  const { db } = await connectToDatabase();
  const blogs = await db.collection('blogs').find({}).toArray();
  return blogs;
}