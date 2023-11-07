import {fetchProductById, fetchProducts, productsReducer} from "./products";

let startState;
beforeEach(() => {
    startState = {
        list: [],
        product: null,
        colorItem: null,
        sizes: []
    }
})

test('products should be added', () => {
    const products = [
        {
            id: 1,
            name: 'name1',
            colors: ['colors1']
        },
        {
            id: 2,
            name: 'name2',
            colors: ['colors2']
        }
    ]

    const action = fetchProducts.fulfilled({products}, '', null, '')

    const endState = productsReducer(startState, action)

    expect(endState.list.length).toBe(2)
    expect(endState.list[0].name).toBe('name1')
})

test('product should be added', () => {
    const id = 1
    const product = {
        id: id,
        name: 'name1',
        colors: ['colors1']
    }

    const action = fetchProductById.fulfilled({product}, '', {id}, '')

    const endState = productsReducer(startState, action)

    expect(endState.product).toEqual(product)
    expect(endState.product.id).toBe(id)
})