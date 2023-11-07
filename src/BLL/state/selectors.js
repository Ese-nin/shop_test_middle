// products

export const productsSelector = state => state.products.list
export const productSelector = state => state.products.product
export const sizesSelector = state => state.products.sizes
export const colorSelector = state => state.products.colorItem

// app

export const appStatusSelector = state => state.app.appStatus
export const appErrorSelector = state => state.app.appError

// cart

export const cartSelector = state => state.cart