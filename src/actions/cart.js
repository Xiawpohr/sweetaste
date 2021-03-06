import * as types from './actionTypes.js'

export const updateItemQuantity = (id, quantity) => ({
  type: types.UPDATE_ITEM_QUANTITY,
  id,
  quantity
})

export const removeItem = (id) => ({
  type: types.REMOVE_ITEM,
  id
})
