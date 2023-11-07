import {addProductToCart, cartReducer, removeFromCart, resetCart} from "./cart";

let startState;
beforeEach(() => {
    startState = [
        {
            name: 'name',
            id: 123,
            color: 'red',
            price: "122.00",
            sizeId: 5,
            image: 'imgSourcePath'
        },
        {
            name: 'name2',
            id: 666,
            color: 'brown',
            price: "500.00",
            sizeId: 1,
            image: 'imgSourcePath2'
        }
    ]
})

test('correct product should be added to cart', () => {
    startState = []
    const params = {colorId: 1, sizeId: 2}
    const returnValue = {
        name: 'name',
        id: 123,
        color: 'red',
        price: "122.00",
        sizeId: 5,
        image: 'imgSourcePath'
    }
    const action = addProductToCart.fulfilled({item: returnValue}, "", params, {})

    const endState = cartReducer(startState, action)

    expect(endState.length).toBe(1)
    expect(endState).toEqual([returnValue])
    expect(startState).toEqual([])
})

test('correct product should be removed from cart', () => {
    const id = 123

    const endState = cartReducer(startState, removeFromCart({id: id}))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(666)
    expect(startState.length).toBe(2)
})

test('reset cart', () => {
    const endState = cartReducer(startState, resetCart())

    expect(startState.length).toBe(2)
    expect(endState.length).toBe(0)
})