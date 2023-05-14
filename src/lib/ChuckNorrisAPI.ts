import { CategoriesAPI, DataAPI } from "../types/types.ts"

export default async function getData(quoteCategory?: string) {
  const API_URL = quoteCategory
    ? `https://api.chucknorris.io/jokes/random?category=${quoteCategory}`
    : "https://api.chucknorris.io/jokes/random"

  try {
    const response = await fetch(API_URL)
    const data: DataAPI = await response.json()
    if (!response.ok) throw Error("Unable to get data from API")
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function getCategories() {
  const API_URL = "https://api.chucknorris.io/jokes/categories"

  try {
    const response = await fetch(API_URL)
    const data: CategoriesAPI = await response.json()
    if (!response.ok) throw Error("Unable to get data from API")
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
