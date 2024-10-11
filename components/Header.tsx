import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import profilePic from '../public/me.jpg'

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background border-b border-border">
      <div className="flex items-center space-between h-16 px-4 md:px-6 w-full">
        <Link href="#" className="mr-6 flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="ml-auto">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src={profilePic}
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
