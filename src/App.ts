import bodyParser = require('body-parser');
import * as express from 'express';
class App {
  public express: any;
  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
  }
  private setMiddlewares(): void {
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
      res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override'
      );
      next();
    });

    this.express.use(bodyParser.json({ limit: '10mb' }));
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private setRoutes(): void {
    // health check
    this.express.get('/', (_: any, res: any) => {
      res.status(200).send('');
    });

    // api routes
    const apiV1 = require('./api/v1').default;
    this.express.use(`/v1`, apiV1);
  }
}

const app = new App();
export default app.express;
