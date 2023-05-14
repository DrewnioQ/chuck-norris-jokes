import { ButtonProps } from "../../../types/types.ts"

export default function Button({
  text,
  disabled,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${className} my-4 rounded-md bg-darkblue-500 px-8 py-4 font-medium text-neutral-50 outline-offset-4 transition hover:bg-darkblue-400 focus-visible:outline-darkblue-500 disabled:bg-neutral-100 disabled:font-normal disabled:text-darkblue-500`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
