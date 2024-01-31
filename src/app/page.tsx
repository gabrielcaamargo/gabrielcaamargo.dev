import { Header } from "@/components/Header"
import { Menu } from "@/components/Menu"

export default function Home() {
  return (
    <main>
      <section className="bg-black px-8 py-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between">
            <Header />
            <Menu />
          </div>
        </div>
      </section>
      <h1>gabrielcaamargo.dev</h1>
    </main>
  )
}