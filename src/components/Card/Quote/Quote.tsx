import { QuoteProps } from "../../../types/types.ts"

export default function QuoteBlock({ quote }: QuoteProps) {
  return (
    <div className="my-6 min-h-[4rem]">
      <blockquote className="text-xl font-bold italic text-darkblue-500">
        <span>&quot;{quote}&quot;</span>
      </blockquote>
    </div>
  )
}
