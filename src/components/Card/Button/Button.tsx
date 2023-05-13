import { ButtonProps } from "../../../types/types.ts"

export default function Button({ text, onClickFn }: ButtonProps) {
  return (
    <button
      className="w-full rounded-md bg-darkblue-500 py-4 font-bold text-disabledcolor"
      type="button"
      onClick={onClickFn}
    >
      {text}
    </button>
  )
}
