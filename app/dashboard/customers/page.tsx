import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Customers"
}

export default function Page() {
    return <div>
            <a href="/dashboard/invoices">Go to Invoices</a>
            <p>Welcome to the Customers page</p>
        </div>
}