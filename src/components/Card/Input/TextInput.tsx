import { useState } from "react"
import { TextInputProps } from "../../../types/types.ts"

export default function TextInput({ onChange }: TextInputProps) {
  const [isFilled, setIsFilled] = useState<boolean>(false)

  const filled = isFilled ? "border-darkblue-500" : "border-neutral-400"

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onChange(event)

    if (event.currentTarget.value === "") {
      setIsFilled(false)
      return
    }
    setIsFilled(true)
  }

  return (
    <input
      type="text"
      name="textfield"
      id="textfield"
      autoComplete="off"
      placeholder="Impersonate Chuck Norris"
      className={`mb-4 w-full rounded-md border-2 p-4 text-darkblue-500 outline-none placeholder:text-neutral-300 ${filled}`}
      onChange={(e) => handleChange(e)}
    />
  )
}
