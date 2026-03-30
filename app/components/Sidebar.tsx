import Link from "next/link";

// components/Sidebar.js
export default function Sidebar() {
    return (
        <div className="w-64 bg-white shadow-md p-5 hidden md:block">
            <h1 className="text-2xl font-bold mb-8">Admin</h1>
            <ul className="space-y-4">
                <li className="hover:text-blue-500 cursor-pointer">
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                    <Link href="/page-visits">
                        Page Visits
                    </Link>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">
                    <Link href="/users">
                        Manage Users
                    </Link>
                </li>
                <li className="hover:text-blue-500 cursor-pointer">Settings</li>
            </ul>
        </div>
    );
}
