// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, ItemCategory, Item, Location, Zone } = initSchema(schema);

export {
  Category,
  ItemCategory,
  Item,
  Location,
  Zone
};