import { DataSource } from 'typeorm';

export const databases = [
  {
    provide: 'DADOS',
    useFactory: async () => {
      const postgres = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || '123*abc',
        database: process.env.DB_NAME || 'riit',
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });
      return postgres.initialize();
    },
  },
];