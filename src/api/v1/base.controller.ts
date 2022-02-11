import { NotFound, Ok } from '../../helpers/http.helper';
import { throwDBError } from '../../helpers/error.helper';
import { to } from '../../utils';
import { Request, Response } from 'express';
export default class BaseController {
  public model: any;
  constructor(model) {
    this.model = model;
    this.findAll = this.findAll.bind(this);
    this.save = this.save.bind(this);
  }

  public async findAll(req: Request, res: Response) {
    const [err, data] = await to(this.model.find().lean());

    if (err) {
      throwDBError(err);
    }
    if (!data) {
      return NotFound(res);
    }

    return Ok(res, data);
  }

  public async save(req: Request, res: Response) {
    const body = Array.isArray(req.body) ? req.body : [req.body];
    const [err] = await to(this.model.insertMany(body));
    if (err) {
      throwDBError(err);
    }
    return Ok(res, body);
  }
}
