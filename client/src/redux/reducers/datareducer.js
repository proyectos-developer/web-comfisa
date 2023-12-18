import { datatypes } from "../actions/dataactions";

const initialState = {
    open_menu_carrito: false
}

const datareducer = (state = initialState, action) => {
    if (action.type === datatypes.SET_OPEN_MENU_CARRITO){
        const open_menu_carrito = action.open_menu_carrito
        return {
            ... state,
            open_menu_carrito
        }
    }
    return state
}

export default datareducer