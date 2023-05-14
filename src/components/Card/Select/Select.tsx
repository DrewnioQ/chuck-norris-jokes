/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import {
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"
import { SelectProps } from "../../../types/types.ts"

function capitalizeFirstLetter(string?: string) {
  if (!string) return string
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default function Select({ options, value, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false)
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const activeDropdown = isOpen ? "" : "hidden"
  const activeClear = isCategorySelected ? "" : "hidden"
  const activeSelect = isOpen ? "rounded-b-none" : "border-b-2"
  const catSelSelect = isCategorySelected
    ? "border-darkblue-500"
    : "border-neutral-400"
  const shownValue = isCategorySelected
    ? capitalizeFirstLetter(value)
    : "Select category"

  function handleSelection(
    event: React.MouseEvent | React.KeyboardEvent,
    selection: string
  ) {
    event.stopPropagation()
    if (selection !== value) selectOption(selection)
    setIsCategorySelected(true)
    setIsOpen(false)
  }

  function selectOption(option: string) {
    onChange(option)
  }

  function handleClearSelection(event: React.MouseEvent) {
    event.stopPropagation()
    onChange(undefined)
    setIsCategorySelected(false)
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0)
  }, [isOpen])

  // This hook is supposed to give keyboard functionality to Select component, but at the moment it only allows focus and highlight with arrow keys
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev)
          break

        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true)
            break
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1)
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue)
          }
          break
        }
        case "Escape":
          setIsOpen(false)
          break
        default:
          break
      }
    }

    containerRef.current?.addEventListener("keydown", handler)

    return () => {
      containerRef.current?.removeEventListener("keydown", handler)
    }
  }, [isOpen, highlightedIndex, options])

  return (
    <div
      ref={containerRef}
      className={`relative my-4 flex items-center gap-2 rounded-md border-2 p-2 text-neutral-600 outline-none focus-visible:outline-darkblue-500 ${activeSelect}
      ${catSelSelect}`}
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
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
        className={`rounded-md p-3 text-darkblue-500 transition hover:bg-neutral-200 ${activeClear}`}
        onClick={(e) => handleClearSelection(e)}
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="group rounded-md p-3 text-darkblue-500 transition hover:bg-neutral-200"
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
        className={`absolute -left-[1px] top-full z-50 mb-2 max-h-32 w-[calc(100%+3px)] overflow-y-auto rounded-md rounded-t-none border-2 border-t-0 bg-white focus-visible:border-darkblue-500 ${catSelSelect} ${activeDropdown}`}
      >
        <div className="mb-2">
          {options.map((option, idx) => (
            <li
              key={idx}
              className={`mx-2 cursor-pointer rounded-md px-2 py-4 hover:bg-neutral-200 hover:font-bold hover:text-darkblue-500 ${
                idx === highlightedIndex ? "bg-neutral-200 font-bold" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(idx)}
              onKeyDown={(e) => handleSelection(e, option)}
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
