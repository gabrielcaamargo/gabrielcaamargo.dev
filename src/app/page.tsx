import type { Metadata } from "next";
import { Header } from "@/components/Header"
import { Introduction } from "@/components/Introduction";

export const metadata: Metadata = {
  title: "Gabriel Camargo | Home",
};

export default function Home() {
  return (
    <main>
      <section className="bg-black px-8 py-6 max-md:px-6">
        <div className="max-w-[1200px] mx-auto max-md:w-full">
          <Header />
          <div className="mt-24 grid grid-cols-2 gap-10 animate-[show_1.5s_linear_1] antialiased justify-between max-md:grid-cols-1">
            <Introduction.Text />
            <Introduction.Image />
          </div>
        </div>
      </section>
    </main>
  )
}