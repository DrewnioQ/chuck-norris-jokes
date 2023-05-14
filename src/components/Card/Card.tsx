/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import ChuckNorrisImg from "../../assets/img/chuck-norris.jpg"
import UnknownPerson from "../../assets/img/question-mark-person.png"
import getData, { getCategories } from "../../lib/ChuckNorrisAPI.ts"
import { CategoriesAPI } from "../../types/types.ts"
import Button from "./Button/Button.tsx"
import Image from "./Image/Image.tsx"
import TextInput from "./Input/TextInput.tsx"
import Joke from "./Joke/Joke.tsx"
import Select from "./Select/Select.tsx"

export default function Card() {
  const [joke, setJoke] = useState<string>()
  const [categories, setCategories] = useState<CategoriesAPI>([])
  const [selectedCategory, setSelectedCategory] = useState<
    CategoriesAPI[0] | undefined
  >()
  const [impersonatedPerson, setImpersonatedPerson] =
    useState<string>("Chuck Norris")
  const [imgSrc, setImgSrc] = useState<string>(ChuckNorrisImg)
  const [imgAlt, setImgAlt] = useState<string>("Chuck Norris")
  const [imgClassName, setImgClassName] = useState<string>(
    "w-full object-cover"
  )

  const handleGetJoke = async (category?: string) => {
    const data = await getData(category)
    if (!data) return
    setJoke(processJoke(data.value))
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

  function handleButtonGetJoke(event: React.MouseEvent) {
    event.preventDefault()
    handleGetJoke(selectedCategory)
    handleImage()
  }

  function handleTextInput(event: React.ChangeEvent<HTMLInputElement>) {
    setImpersonatedPerson(event.currentTarget.value)
  }

  function processJoke(jokeString?: string) {
    if (!jokeString || impersonatedPerson === "Chuck Norris") return jokeString

    return jokeString.replace("Chuck Norris", impersonatedPerson)
  }

  useEffect(() => {
    handleGetCategories()
    handleGetJoke()
  }, [])

  useEffect(() => {
    if (impersonatedPerson === "") setImpersonatedPerson("Chuck Norris")
  }, [impersonatedPerson])

  return (
    <div className="flex flex-grow flex-col justify-center rounded-lg bg-white px-10 py-10 shadow-lg sm:block sm:max-w-xl sm:flex-grow-0 sm:px-16 sm:py-14 md:w-[42rem]">
      <Image src={imgSrc} alt={imgAlt} className={imgClassName} />
      <Joke joke={joke} />
      <Select
        options={categories}
        value={selectedCategory}
        onChange={(option) => setSelectedCategory(option)}
      />
      <TextInput onChange={(e) => handleTextInput(e)} />
      <Button
        text={`Draw a random ${impersonatedPerson} joke`}
        disabled={false}
        onClick={(e) => handleButtonGetJoke(e)}
        className="w-full"
      />
      />
    </div>
  )
}
