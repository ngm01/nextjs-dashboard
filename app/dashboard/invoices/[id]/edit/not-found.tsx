import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <FaceFrownIcon className="w-10 text-gray-400" />
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>Sorry, we couldn&apos;t find the requested invoice.</p>
            <Link href="/dashboard/invoices"
            className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white transition-colors hover:bg-blue-400" >
                Go Back
            </Link>
        </main>
    )
}