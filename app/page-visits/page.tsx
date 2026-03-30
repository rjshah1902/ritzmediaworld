// components/VisitsPieChart.js (Circular Chart)
"use client";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useEffect, useState } from "react";
import { getAPI } from "../helper/api_call";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type PageVisit = {
    page_name: string;
    page_count: string;
};


export default function VisitsPieChart() {
    const [data, setData] = useState<
        { name: string; visits: number; value: number }[]
    >([]);

    useEffect(() => {
        getAPI("/page-visits").then((res) => {
            const formatted = res.data.map((item: PageVisit) => ({
                name: item.page_name,
                visits: Number(item.page_count),
                value: Number(item.page_count),
            }));
            setData(formatted);
        });
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="p-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
                    <div className="bg-white p-5 rounded-2xl shadow col-span-1 md:col-span-2 lg:col-span-2">
                        <h2 className="text-lg font-semibold mb-4">Page Visits (Pie)</h2>
                        <div className="w-full h-80">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        label
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}