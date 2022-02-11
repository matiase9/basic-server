import database from '../../../utils/database/mongodb.constants';
import { model, Schema } from 'mongoose';

const ItemsSchema = new Schema(
  {
    name: { type: String },
    level: { type: String },
    class: { type: String },
    type: { type: String },
    img: { type: String },
  },
  {
    collection: database.SCHEMAS.ITEMS.COLLECTION,
    timestamps: true,
    useNestedStrict: true,
  }
);
export default model(database.SCHEMAS.ITEMS.MODEL, ItemsSchema);
