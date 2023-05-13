/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import {
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import { SelectProps } from "../../../types/types.ts"

function capitalizeFirstLetter(string?: string) {
  if (!string) return string
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function Select({ options, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCategorySelected, setIsCategorySelected] = useState(false)

  const activeDropdown = isOpen ? "" : "hidden"
  const activeClear = isCategorySelected ? "" : "hidden"
  const activeSelect = isOpen ? "rounded-b-none" : "border-b-2"
  const catSelSelect = isCategorySelected
    ? "border-darkblue-500"
    : "border-neutral-400"
  const shownValue = isCategorySelected
    ? capitalizeFirstLetter(value)
    : "Select category"

  function handleSelection(event: React.MouseEvent, selection: string) {
    event.stopPropagation()
    if (selection !== value) onChange(selection)
    setIsCategorySelected(true)
    setIsOpen(false)
  }

  function handleClearSelection(event: React.MouseEvent) {
    event.stopPropagation()
    onChange(undefined)
    setIsCategorySelected(false)
    setIsOpen(false)
  }

  return (
    <div
      className={`relative my-4 flex items-center gap-2 rounded-md border-2 p-2 text-neutral-600 outline-none ${activeSelect}
      ${catSelSelect}`}
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span
        className={`mx-2 flex-grow ${
          isCategorySelected ? "text-darkblue-500" : "text-neutral-300"
        }`}
      >
        {shownValue}
      </span>
      <button
        type="button"
        className={`rounded-md p-3 text-darkblue-500 hover:bg-neutral-300 ${activeClear}`}
        onClick={(e) => handleClearSelection(e)}
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="group rounded-md p-3 text-darkblue-500 hover:bg-neutral-200"
      >
        {isOpen ? (
          <ChevronUpIcon className="h-4 w-4 stroke-2" />
        ) : (
          <ChevronDownIcon
            className={`h-4 w-4 ${
              isCategorySelected
                ? ""
                : "text-neutral-400 group-hover:text-darkblue-500"
            }`}
          />
        )}
      </button>
      <ul
        className={`absolute -left-[1px] top-full z-50 mb-2 max-h-32 w-[calc(100%+3px)] overflow-y-auto rounded-md rounded-t-none border-2 border-t-0 bg-white ${catSelSelect} ${activeDropdown}`}
      >
        <div className="mb-2">
          {options.map((option) => (
            <li
              key={option}
              tabIndex={0}
              className="mx-2 cursor-pointer rounded-md px-2 py-4 hover:bg-neutral-200 hover:font-bold hover:text-darkblue-500"
              onClick={(e) => {
                handleSelection(e, option)
              }}
            >
              {capitalizeFirstLetter(option)}
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}
