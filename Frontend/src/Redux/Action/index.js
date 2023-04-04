//define all the actions

// 1. fetch all product

export const fetchAllProducts = (apiData)=>{
    return({
        type:"FETCH_ALL_PRODUCTS",
        payload:apiData
    })
}
export const fetchCategoryProducts = (apiData)=>{
    return(
        {
            type:"FETCH_CATEGORY_PRODUCTS",
            payload:apiData
        }
    )
}
export const fetchSelectedProduct = (apiData)=>{
    return({
        type:"SELECTED_PRODUCT_DETAILS",
        payload:apiData
    })
}
export const removeSelectedProduct=()=>{
    return({
        type:"REMOVE_SELECTION"
    })
}

export const setUser = (user)=>{
    return(
        {
            type:"SET_USER",
            payload : user
        }
    )
}
