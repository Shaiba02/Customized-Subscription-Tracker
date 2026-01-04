import { config } from "dotenv";

// Load env based on NODE_ENV
config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const {
  // Server
  PORT,
  NODE_ENV,
  SERVER_URL,
  DB_URI

  // Database
//   MONGO_URI,

//   // Auth
//   JWT_SECRET,
//   JWT_EXPIRES_IN,

//   // Arcjet
//   ARCJET_ENV,
//   ARCJET_KEY,

//   // QStash
//   QSTASH_URL,
//   QSTASH_TOKEN,

//   // Email (Nodemailer)
//   EMAIL_HOST,
//   EMAIL_PORT,
//   EMAIL_USER,
//   EMAIL_PASSWORD,
} = process.env;
