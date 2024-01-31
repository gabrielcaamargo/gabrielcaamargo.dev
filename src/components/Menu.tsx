import Link from "next/link";

export function Menu() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li className="text-nowrap ease-in hover:opacity-75 duration-100">
          <Link href='/'>Home</Link>
        </li>
        <li className="text-nowrap ease-in hover:opacity-75 duration-100">
          <Link href='/'>About me</Link>
        </li>
        <li className="text-nowrap ease-in hover:opacity-75 duration-100">
          <Link href='/'>Contact me</Link>
        </li>
      </ul>
    </nav>
  )
}