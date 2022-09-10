import itemsJson from "../data.json";

export const getItems = (category, time) => new Promise ((resolve, reject) => {

    const itemsByCategory = itemsJson.filter(items => items.category === category)
    
    const items = setTimeout(() => {
      if (!category) {
        itemsJson? resolve(itemsJson) : reject("Error")
      }
      else {
        itemsJson? resolve(itemsByCategory) : reject("Error")
      }
    }, time)

    return items
})
