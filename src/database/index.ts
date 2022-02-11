import Config from '../utils/configs';
import initMongoDB from './mongodb';
const config = Config.get();
export const initDatabases = () => {
  console.log('info', 'connecting databases...');
  Object.keys(config.service.databases).forEach((database) => {
    const dialect = config.service.databases[database].dialect;
    switch (config.service.databases[database].dialect) {
      case 'mongodb':
        console.log('info', `[${dialect}] init connection to <${database}>`);
        initMongoDB(database);
        break;
      default:
        break;
    }
  });
  console.log('info', 'databases connected');
};
