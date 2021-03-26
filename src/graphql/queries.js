/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        items {
          items {
            id
            itemID
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            category {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            item {
              id
              name
              description
              link
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      items {
        items {
          id
          itemID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          category {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            items {
              nextToken
              startedAt
            }
          }
          item {
            id
            name
            description
            link
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Locations {
              nextToken
              startedAt
            }
            ItemCategories {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        items {
          items {
            id
            itemID
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            category {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            item {
              id
              name
              description
              link
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listZones = /* GraphQL */ `
  query ListZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        floor
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getZone = /* GraphQL */ `
  query GetZone($id: ID!) {
    getZone(id: $id) {
      id
      name
      floor
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const syncZones = /* GraphQL */ `
  query SyncZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        floor
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      itemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Zone {
        id
        name
        floor
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        itemID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Zone {
          id
          name
          floor
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        itemID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Zone {
          id
          name
          floor
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        link
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Locations {
          items {
            id
            name
            itemID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Zone {
              id
              name
              floor
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        ItemCategories {
          items {
            id
            itemID
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            category {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            item {
              id
              name
              description
              link
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      link
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Locations {
        items {
          id
          name
          itemID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Zone {
            id
            name
            floor
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
      ItemCategories {
        items {
          id
          itemID
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          category {
            id
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            items {
              nextToken
              startedAt
            }
          }
          item {
            id
            name
            description
            link
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Locations {
              nextToken
              startedAt
            }
            ItemCategories {
              nextToken
              startedAt
            }
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const searchItems = /* GraphQL */ `
  query SearchItems(
    $filter: SearchableItemFilterInput
    $sort: SearchableItemSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchItems(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        description
        link
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Locations {
          items {
            id
            name
            itemID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Zone {
              id
              name
              floor
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        ItemCategories {
          items {
            id
            itemID
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            category {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            item {
              id
              name
              description
              link
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        link
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Locations {
          items {
            id
            name
            itemID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            Zone {
              id
              name
              floor
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
        ItemCategories {
          items {
            id
            itemID
            categoryID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            category {
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            item {
              id
              name
              description
              link
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncItemCategories = /* GraphQL */ `
  query SyncItemCategories(
    $filter: ModelItemCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItemCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        itemID
        categoryID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          items {
            items {
              id
              itemID
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
        item {
          id
          name
          description
          link
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          Locations {
            items {
              id
              name
              itemID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
          ItemCategories {
            items {
              id
              itemID
              categoryID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
            }
            nextToken
            startedAt
          }
        }
      }
      nextToken
      startedAt
    }
  }
`;
