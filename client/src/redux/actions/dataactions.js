export const datatypes = {
    SET_OPEN_MENU_CARRITO: 'SET_OPEN_MENU_CARRITO'
}

export const set_open_menu_carrito = open_menu_carrito => {
    return {
        open_menu_carrito,
        type: datatypes.SET_OPEN_MENU_CARRITO
    }
}