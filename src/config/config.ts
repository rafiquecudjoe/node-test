import 'dotenv/config';

export const config = {
  databaseUrl: process.env.DATABASE_URL!,
  databaseName: process.env.DB_NAME!,
  dbAuth: process.env.DB_AUTH!,

  

  joiOptions: {
    errors: {
      wrap: { label: '' },
    },
    abortEarly: true,
  },
};
