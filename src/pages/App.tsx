import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <button
        className="rounded-md bg-slate-200 p-2"
        onClick={() => setCount((counter) => counter + 1)}
      >
        <span>count is {count}</span>
      </button>
    </>
  )
}
