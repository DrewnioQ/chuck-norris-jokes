import { ButtonProps } from "../../../types/types.ts"

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="my-4 w-full rounded-md bg-darkblue-500 px-8 py-4 font-medium text-neutral-50 outline-offset-4 transition hover:bg-darkblue-400 focus-visible:outline-darkblue-500"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
