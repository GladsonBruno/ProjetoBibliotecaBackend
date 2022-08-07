import * as dotenv from "dotenv";
import { DataSourceOptions } from "typeorm"
dotenv.config();

export const OrmConfig = {
   "type": process.env.DB_TYPE,
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": process.env.SYNCHRONIZE == 'true' ? true : false,
   "logging": process.env.LOGGING == 'true' ? true : false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "seeds": ["src/seeds/**/*{.ts,.js}"],
   "factories": ["src/factories/**/*{.ts,.js}"],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
} as DataSourceOptions;