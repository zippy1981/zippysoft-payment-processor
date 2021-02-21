const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
} = process.env;

const config = {
  name: 'default',
  type: 'postgres',
  host: POSTGRES_HOST ?? 'localhost',
  port: POSTGRES_PORT ?? 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  logging: 'all',
  synchronize: true,
  // TODO: figutre out how to get this to not choke on the original typescript files
  // See:  https://stackoverflow.com/questions/59435293/typeorm-entity-in-nestjs-cannot-use-import-statement-outside-a-module
  // entities: ['dist/**.module/*.model.js'],
  // subscribers: ['dist/**.module/*-subscriber.js'],
  // migrations: ['dist/migrations/*.js'],
  entities: ['dist/**.module/*.model.js'],
  subscribers: ['dist/**.module/*-subscriber.js'],
  migrations: ['dist/migrations/*.js'],
};

console.debug(
  `Connecting to database ${config.database} on ${config.host}:${config.port}`,
);

module.exports = [config];
