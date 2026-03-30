"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getAPI } from "./../../helper/api_call";

type User = {
    id: number;
    ip_address: string;
    brower_type: string;
};

type Navigation = {
    current_page: string;
    next_page: string;
    created_at: string;
};

export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [navigation, setNavigation] = useState<Navigation[]>([]);

    useEffect(() => {
        if (!id) return;

        getAPI(`/users/details?user_id=${id}`).then((res) => {
            setUser(res.data);
        });

        getAPI(`/navigation?user_id=${id}`).then((res) => {
            setNavigation(res.data);
        });
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Details</h1>

            <div className="bg-white p-4 rounded shadow mb-6">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>IP:</strong> {user.ip_address}</p>
                <p><strong>Browser:</strong> {user.brower_type}</p>
            </div>

            <h2 className="text-xl font-semibold mb-3">Navigation History</h2>

            <table className="w-full bg-white shadow rounded">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3">Current Page</th>
                        <th className="p-3">Next Page</th>
                        <th className="p-3">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {navigation.map((nav, index) => (
                        <tr key={index} className="border-t">
                            <td className="p-3">{nav.current_page}</td>
                            <td className="p-3">{nav.next_page}</td>
                            <td className="p-3">{nav.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}