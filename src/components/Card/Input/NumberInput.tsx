import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { NumberInputProps } from "../../../types/types.ts"

export default function NumberInput({
  min,
  max,
  onChange,
  onInvalid,
}: NumberInputProps) {
  const [value, setValue] = useState<string | number>("")
  const valueAsNumber = Number(value)
  const [invalid, setInvalid] = useState<boolean>(false)

  const bgColor = invalid ? "bg-red-200" : "bg-neutral-100"

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value)
  }

  function handleIncrement() {
    if (valueAsNumber < max) setValue(valueAsNumber + 1)
  }
  function handleDecrement() {
    if (valueAsNumber <= min) setValue("")
    if (valueAsNumber > min) setValue(valueAsNumber - 1)
  }

  useEffect(() => {
    const isInvalid = () => {
      if (value === "") return false
      if (min > valueAsNumber || valueAsNumber > max) return true
      return false
    }
    setInvalid(isInvalid)

    onInvalid(invalid)
    onChange(valueAsNumber)
  }, [onChange, invalid, value, valueAsNumber, max, min, onInvalid])

  return (
    <div className={`flex gap-1 rounded-md p-2 text-darkblue-500 ${bgColor}`}>
      <button
        type="button"
        className="px-2 py-1"
        onClick={() => handleDecrement()}
      >
        <MinusCircleIcon className="h-8 w-8 stroke-1" />
      </button>
      <input
        min={min}
        max={max}
        value={value}
        type="number"
        name="numberInput"
        placeholder="0"
        id="numberInput"
        onChange={(e) => handleChange(e)}
        className="w-[3ch] bg-transparent text-center outline-none [appearance:textfield] placeholder:text-darkblue-500 invalid:bg-red-200 [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => handleIncrement()}
        className="px-2 py-1"
      >
        <PlusCircleIcon className="h-8 w-8 stroke-1" />
      </button>
    </div>
  )
}
