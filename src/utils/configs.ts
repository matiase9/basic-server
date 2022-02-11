import * as fs from 'fs';
import * as yaml_config from 'node-yaml-config';
import * as path from 'path';

namespace Config {
  const configFile = path.resolve(process.cwd(), `config/config.local.yml`);

  if (!fs.existsSync(configFile)) {
    console.log('Config file not exits');
    process.exit(1);
  }

  const configuration = yaml_config.load(configFile);

  export function get() {
    return configuration;
  }
}

export default Config;
