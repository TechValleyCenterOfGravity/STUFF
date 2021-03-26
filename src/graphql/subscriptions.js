/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateZone = /* GraphQL */ `
  subscription OnCreateZone {
    onCreateZone {
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
export const onUpdateZone = /* GraphQL */ `
  subscription OnUpdateZone {
    onUpdateZone {
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
export const onDeleteZone = /* GraphQL */ `
  subscription OnDeleteZone {
    onDeleteZone {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateItemCategory = /* GraphQL */ `
  subscription OnCreateItemCategory {
    onCreateItemCategory {
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
export const onUpdateItemCategory = /* GraphQL */ `
  subscription OnUpdateItemCategory {
    onUpdateItemCategory {
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
export const onDeleteItemCategory = /* GraphQL */ `
  subscription OnDeleteItemCategory {
    onDeleteItemCategory {
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
