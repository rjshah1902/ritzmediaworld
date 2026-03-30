"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAPI } from "./../helper/api_call";

export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAPI("/users").then((res) => {
            setUsers(res.data);
        });
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Users List</h1>

            <table className="w-full bg-white shadow rounded">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        <th className="p-3">ID</th>
                        <th className="p-3">IP Address</th>
                        <th className="p-3">Browser</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-t">
                            <td className="p-3">{user.id}</td>
                            <td className="p-3">{user.ip_address}</td>
                            <td className="p-3">{user.brower_type}</td>
                            <td className="p-3">
                                <Link
                                    href={`/users/${user.id}`}
                                    className="text-blue-500"
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}