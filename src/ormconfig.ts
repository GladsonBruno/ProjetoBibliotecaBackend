import * as dotenv from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm"
dotenv.config();

export const OrmConfigDataSource = new DataSource({
   "type": process.env.DB_TYPE,
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": process.env.SYNCHRONIZE == 'true' ? true : false,
   "logging": process.env.LOGGING == 'true' ? true : false,
   "entities": [
      "./entity/**/*.ts"
   ],
   "migrations": [
      "./migration/**/*.ts"
   ],
   "subscribers": [
      "./subscriber/**/*.ts"
   ],
   "seeds": ["./seeds/**/*{.ts,.js}"],
   "factories": ["./factories/**/*{.ts,.js}"],
   "cli": {
      "entitiesDir": "./entity",
      "migrationsDir": "./migration",
      "subscribersDir": "./subscriber"
   }
} as DataSourceOptions);