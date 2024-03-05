import Link from "next/link"
import Image from "next/Image"


import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="container px-8 md:px-10">
        <div className="flex items-center justify-center">
            <Image
              alt="Logo"
              className="mb-8"
              height="150"
              src="/logo.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width="150"
            />
          </div>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Linear Algebra Master</h1>
            <p className="mx-auto max-w-[800px] text-lg text-gray-500 md:text-xl dark:text-gray-400">
              Quick Linear algebra solutions
            </p>
          </div>
          <div>
            <Button asChild className = "rounded" variant="secondary">
              <Link href="/algo">Start</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
