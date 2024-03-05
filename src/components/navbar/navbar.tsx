import Link from "next/link"
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
        <Button variant="link" className="justify-start pl-1">
            <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all font-bold text-lg pl-0"
                href="/algo"
            >
                All Algorythms
            </Link>
        </Button>
        <h1
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all font-semibold"
        >
            Basic Algorythms
        </h1>
        <ul className="w-full list-disc px-10">
            <li>
                <Button variant="link" className="py-1 px-0 h-auto">
                <Link
                    className="flex items-center gap-3 rounded-lg transition-all font-light"
                    href="/algo/determinant"
                >
                    Find Determinant
                </Link>
                </Button>
            </li>
            <li>
                <Button variant="link" className="py-1 px-0 h-auto">
                <Link
                    className="flex items-center gap-3 rounded-lg transition-all font-light"
                    href="/algo/transpose"
                >
                    Transpose
                </Link>
                </Button>
            </li>
            <li>
                <Button variant="link" className="py-1 px-0 h-auto">
                <Link
                    className="flex items-center gap-3 rounded-lg transition-all font-light"
                    href="/algo/inverse"
                >
                    Inverse
                </Link>
                </Button>
            </li>
        </ul>
    </nav>
  )
}



