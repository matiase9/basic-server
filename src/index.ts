import app from './App';
import Config from './utils/configs';

const config = Config.get();

(async () => {
  const hostname = config.service.host;
  const port = config.service.port;

  app.listen(port, hostname, (err: any) => {
    if (err) {
      return console.log('ERROR ===> ', err);
    }

    console.log('info', `===> Running ${hostname}:${port}`);
  });
})();
