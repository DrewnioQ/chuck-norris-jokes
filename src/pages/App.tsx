import Card from "../components/Card/Card.tsx"
import Footer from "../components/Footer/Footer.tsx"

export default function App() {
  return (
    <div className="page-container flex min-h-screen flex-col justify-between bg-neutral-50">
      <main className="flex w-full flex-grow flex-col items-center justify-center sm:p-10">
        <Card />
      </main>
      <Footer />
    </div>
  )
}
