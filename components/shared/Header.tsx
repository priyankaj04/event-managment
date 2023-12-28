import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full shadow-xl bg-neutral-800">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36 flex items-center text-xl text-indigo-400 font-semibold">
          <Image 
            src="/assets/images/event12.webp" width={58} height={58}
            alt="Evently logo" 
          /> Festify
        </Link>

        <SignedIn>
          <nav className="md:flex-between flex-1 hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header