import { useEffect, useState } from "react"
import getData, { getCategories } from "../../lib/ChuckNorrisAPI.ts"
import { CategoriesAPI, DataAPI } from "../../types/types.ts"
import Button from "./Button/Button.tsx"
import Image from "./Image/Image.tsx"
import QuoteBlock from "./Quote/Quote.tsx"
import Select from "./Select/Select.tsx"

export default function Card() {
  const [result, setResult] = useState<DataAPI>()
  const [categories, setCategories] = useState<CategoriesAPI>([])
  const [selectedCategory, setSelectedCategory] = useState<
    CategoriesAPI[0] | undefined
  >()

  const handleGetQuote = async (category?: string) => {
    const data = await getData(category)
    if (!data) return
    setResult(data)
  }

  const handleGetCategories = async () => {
    const data = await getCategories()
    if (!data) return
    setCategories(data)
  }

  useEffect(() => {
    handleGetCategories()
    handleGetQuote()
  }, [])

  return (
    <div className="w-xl max-w-xl rounded-lg bg-white px-16 py-14 shadow-lg">
      <Image />
      <QuoteBlock quote={result?.value} />
      <Select
        options={categories}
        value={selectedCategory}
        onChange={(option) => setSelectedCategory(option)}
      />
      <Button
        text="Draw a random Chuck Norris Joke"
        onClickFn={handleGetQuoteCallback}
      />
    </div>
  )
}
