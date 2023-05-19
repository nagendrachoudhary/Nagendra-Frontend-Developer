export const SpaceXData = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCCESS':
            return action.payload
        default:
            return state
    }
}