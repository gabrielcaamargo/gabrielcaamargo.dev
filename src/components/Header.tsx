import Link from "next/link";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <Link href='/'>
        <strong className="text-xl">gabrielcaamargo.dev</strong>
      </Link>

      <Menu.Desktop />
      <Menu.Mobile />
    </header>
  )
}