import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly items?: (ItemCategory | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class ItemCategory {
  readonly id: string;
  readonly item: Item;
  readonly category: Category;
  constructor(init: ModelInit<ItemCategory>);
  static copyOf(source: ItemCategory, mutator: (draft: MutableModel<ItemCategory>) => MutableModel<ItemCategory> | void): ItemCategory;
}

export declare class Item {
  readonly id: string;
  readonly name: string;
  readonly Locations?: (Location | null)[];
  readonly ItemCategories?: (ItemCategory | null)[];
  readonly description?: string;
  readonly link?: string;
  constructor(init: ModelInit<Item>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

export declare class Location {
  readonly id: string;
  readonly name: string;
  readonly Zone?: Zone;
  readonly itemID?: string;
  constructor(init: ModelInit<Location>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

export declare class Zone {
  readonly id: string;
  readonly name: string;
  readonly floor: string;
  constructor(init: ModelInit<Zone>);
  static copyOf(source: Zone, mutator: (draft: MutableModel<Zone>) => MutableModel<Zone> | void): Zone;
}