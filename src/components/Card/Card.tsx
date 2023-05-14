import { useEffect, useState } from "react"
import ChuckNorrisImg from "../../assets/img/chuck-norris.jpg"
import UnknownPerson from "../../assets/img/question-mark-person.png"
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
  const [imgSrc, setImgSrc] = useState<string>(ChuckNorrisImg)
  const [imgAlt, setImgAlt] = useState<string>("Chuck Norris")
  const [imgClassName, setImgClassName] = useState<string>(
    "w-full object-cover"
  )

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

  function handleImage() {
    if (impersonatedPerson === "Chuck Norris") {
      setImgSrc(ChuckNorrisImg)
      setImgAlt("Chuck Norris")
      setImgClassName("w-full object-cover h-40 rounded-md")
    } else {
      setImgSrc(UnknownPerson)
      setImgAlt("Unknown Person")
      setImgClassName("mx-auto h-40")
    }
  }

  function handleButtonGetQuote(event: React.MouseEvent) {
    event.preventDefault()
    handleGetQuote(selectedCategory)
    handleImage()
  }
  }

  useEffect(() => {
    handleGetCategories()
    handleGetQuote()
  }, [])

  return (
    <div className="max-w-xl rounded-lg bg-white px-16 py-14 shadow-lg md:w-[42rem]">
      <Image src={imgSrc} alt={imgAlt} className={imgClassName} />
      <QuoteBlock quote={quote} />
      <Select
        options={categories}
        value={selectedCategory}
        onChange={(option) => setSelectedCategory(option)}
      />
      <Button
        text="Draw a random Chuck Norris Joke"
        onClick={(e) => handleButtonGetQuote(e)}
      />
    </div>
  )
}
