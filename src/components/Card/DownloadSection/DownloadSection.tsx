/* eslint-disable no-await-in-loop */
import { useState } from "react"
import getData from "../../../lib/ChuckNorrisAPI.ts"
import processJoke from "../../../lib/processJoke.ts"
import { DownloadSectionProps } from "../../../types/types.ts"
import Button from "../Button/Button.tsx"
import NumberInput from "../Input/NumberInput.tsx"

export default function DownloadSection({
  category,
  impersonatedPerson,
}: DownloadSectionProps) {
  const [inputValue, setInputValue] = useState<number>(0)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)

  const minVal = 1
  const maxVal = 100

  async function handleSaveJokes() {
    const handleGetJoke = async () => {
      const data = await getData(category)
      if (!data) return undefined
      const joke = processJoke(data.value, impersonatedPerson)
      return joke
    }

    const txtFile: string[] = []

    for (let i = 0; i < inputValue; i++) {
      const joke = await handleGetJoke()
      if (!joke) return
      txtFile.push(joke)
    }

    const hiddenElement = document.createElement("a")
    hiddenElement.href = `data:attachment/text,${encodeURI(txtFile.join("\n"))}`
    hiddenElement.target = "_blank"
    hiddenElement.download = `${inputValue} ${impersonatedPerson} Jokes.txt`
    hiddenElement.click()
  }

  function handleNumberInput(value: number) {
    setInputValue(value)
  }

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap sm:gap-2">
        <NumberInput
          min={minVal}
          max={maxVal}
          onChange={(value) => handleNumberInput(value)}
          onInvalid={(invalid) => setIsInvalid(invalid)}
        />
        <Button
          text="Save Jokes"
          onClick={() => handleSaveJokes()}
          disabled={isInvalid || !inputValue}
          className="my-0 flex-grow"
        />
      </div>
      <div className="mt-4 h-6">
        {isInvalid && (
          <span className="font-medium text-red-200">{`You can pick a number from ${minVal} to ${maxVal}.`}</span>
        )}
      </div>
    </>
  )
}
