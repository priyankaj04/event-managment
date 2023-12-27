import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="shadow-xl bg-neutral-800 text-neutral-500">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-36 flex items-center text-xl text-indigo-400 font-semibold">
          <Image 
            src="/assets/images/event12.webp" width={58} height={58}
            alt="Evently logo" 
          /> Festify
        </Link>

        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer