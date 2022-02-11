import BaseController from '../base.controller';
import Items from './items.model';

export default class ItemsController extends BaseController {
  constructor() {
    super(Items);
  }
}
