'use client'
import { List } from "phosphor-react";
import * as Sheet from "../ui/sheet";
import Link from "next/link";

export function MenuMobile() {
  return (
    <div className="md:hidden">
      <Sheet.Sheet>
        <Sheet.SheetTrigger asChild>
          <List size={32} color='#FFF' />
        </Sheet.SheetTrigger>
        <Sheet.SheetContent className="flex items-center justify-center">
          <nav>
            <ul className="flex flex-col items-center gap-4">
              <li className="text-2xl text-nowrap ease-in hover:opacity-75 duration-100">
                <Link href='/'>Home</Link>
              </li>
              <li className="text-2xl text-nowrap ease-in hover:opacity-75 duration-100">
                <Link href='/'>About me</Link>
              </li>
              <li className="text-2xl text-nowrap ease-in hover:opacity-75 duration-100">
                <Link href='/'>Contact me</Link>
              </li>
            </ul>
        </nav>
        </Sheet.SheetContent>
      </Sheet.Sheet>
    </div>
  )
}