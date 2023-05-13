import { useEffect, useState } from "react"
import getData, { getCategories } from "../../lib/ChuckNorrisAPI.ts"
import { CategoriesAPI, DataAPI } from "../../types/types.ts"
import Image from "./Image/Image.tsx"

export default function Card() {
  const [result, setResult] = useState<DataAPI>()
  const [categories, setCategories] = useState<CategoriesAPI>()

  async function handleGetQuote() {
    const data = await getData()
    if (!data) return
    setResult(data)
  }

  async function handleGetCategories() {
    const data = await getCategories()
    if (!data) return
    setCategories(data)
  }

  useEffect(() => {
    handleGetCategories()
    handleGetQuote()
  }, [])

  return (
    <div className="max-w-xl rounded-lg bg-white px-16 py-14 shadow-lg">
      <Image />
      <button type="button" onClick={handleGetQuote}>
        Get Quote
      </button>
    </div>
  )
}
