import { JokeProps } from "../../../types/types.js"

export default function Joke({ joke }: JokeProps) {
  return (
    <div className="my-6 min-h-[4rem]">
      <blockquote className="text-xl font-bold italic text-darkblue-500">
        &quot;{joke}&quot;
      </blockquote>
    </div>
  )
}
