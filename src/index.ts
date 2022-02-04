import app from './App';

(async () => {
  const hostname = '0.0.0.0';
  const port = 4000;

  app.listen(port, hostname, (err: any) => {
    if (err) {
      return console.log('ERROR ===> ', err);
    }

    console.log('info', `===> Running ${hostname}:${port}`);
  });
})();
