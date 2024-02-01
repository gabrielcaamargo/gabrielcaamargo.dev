import Link from "next/link";
import { Menu } from "./Menu";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <Link href='/'>
        <strong>gabrielcaamargo.dev</strong>
      </Link>

      <Menu.Desktop />
      <Menu.Mobile />
    </header>
  )
}