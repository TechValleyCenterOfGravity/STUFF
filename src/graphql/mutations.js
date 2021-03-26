/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createZone = /* GraphQL */ `
  mutation CreateZone(
    $input: CreateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    createZone(input: $input, condition: $condition) {
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
export const updateZone = /* GraphQL */ `
  mutation UpdateZone(
    $input: UpdateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    updateZone(input: $input, condition: $condition) {
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
export const deleteZone = /* GraphQL */ `
  mutation DeleteZone(
    $input: DeleteZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    deleteZone(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createItemCategory = /* GraphQL */ `
  mutation CreateItemCategory(
    $input: CreateItemCategoryInput!
    $condition: ModelItemCategoryConditionInput
  ) {
    createItemCategory(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateItemCategory = /* GraphQL */ `
  mutation UpdateItemCategory(
    $input: UpdateItemCategoryInput!
    $condition: ModelItemCategoryConditionInput
  ) {
    updateItemCategory(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteItemCategory = /* GraphQL */ `
  mutation DeleteItemCategory(
    $input: DeleteItemCategoryInput!
    $condition: ModelItemCategoryConditionInput
  ) {
    deleteItemCategory(input: $input, condition: $condition) {
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
    }
  }
`;
