import itemsJson from "../data.json";

export const getItem = (productId, time) => new Promise ((resolve, reject) => {
    
    const itemById = itemsJson.find( item => item.id === productId )
    
    const item = setTimeout(() => {
        itemsJson? resolve(itemById) : reject("Error")
    }, time)

    return item
})