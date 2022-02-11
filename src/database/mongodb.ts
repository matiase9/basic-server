import Config from '../utils/configs';

import * as mongoose from 'mongoose';
const config = Config.get();

mongoose.set('useCreateIndex', true);

const databaseEvents = (dbConnectionName: string) => {
  mongoose.connection.on('error', (error) => {
    console.log('error', `<${dbConnectionName}> connection error: ${error}`);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('error', `<${dbConnectionName}> connection lost`);
  });
  mongoose.connection.on('connecting', () => {
    console.log('info', `Connecting to <${dbConnectionName}>`);
  });
  mongoose.connection.on('open', () => {
    console.log('info', `<${dbConnectionName}> connected`);
  });
};
export default async (dbConnectionName: string) => {
  try {
    databaseEvents(dbConnectionName);
    await mongoose.connect(config.service.databases[dbConnectionName].host, {
      user: config.service.databases[dbConnectionName].user,
      pass: config.service.databases[dbConnectionName].password,
      dbName: config.service.databases[dbConnectionName].dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log('error', `Could not Connect to <${dbConnectionName}>: ${err}.`);
    process.exit(1);
  }
};
