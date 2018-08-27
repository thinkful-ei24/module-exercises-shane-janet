'use strict';

const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id) {
    return store.items.find(item => item.id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
      return this.items;
    } catch(error) {
      console.log('addItem', error);
    }
  };

  const findAndToggleChecked = function(id) {
      items.findById(id).checked = !items.findById(id).checked;
      return items;
  }

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(name);
      const item = items.findById(id).name;
      item = newName;
      return item;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  const findAndDelete = function(id) {
    this.items = items.filter(item => item.id !== id);
    return this.items;
  }

  return {
  items,
  hideCheckedItems,
  searchTerm,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  };

}() );



