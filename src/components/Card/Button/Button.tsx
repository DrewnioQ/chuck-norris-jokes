import { ButtonProps } from "../../../types/types.ts"

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="w-full rounded-md bg-darkblue-500 px-8 py-4 font-bold text-neutral-50"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
