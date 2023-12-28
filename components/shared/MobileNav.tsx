import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
import Link from "next/link"


const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-1 flex-col gap-6 bg-neutral-700 md:hidden">
         <Link href="/" className="w-36 flex items-center text-xl text-indigo-400 font-semibold">
          <Image 
            src="/assets/images/event12.webp" width={58} height={58}
            alt="Evently logo" 
          /> Festify
        </Link>
          <Separator className="border border-neutral-500" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav