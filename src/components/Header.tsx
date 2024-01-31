import Link from "next/link";

export function Header() {
  return (
    <header className="w-full">
      <Link href='/'>
        <strong>gabrielcaamargo.dev</strong>
      </Link>
    </header>
  )
}