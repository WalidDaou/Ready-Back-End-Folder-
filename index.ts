// backend/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Initialize Prisma Client
const prisma = new PrismaClient();


app.listen(port, async () => {
  console.log(`Server is running on port ${port}.`);

  try {
    await prisma.$connect();
    console.log('Prisma Client connected to the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
});
