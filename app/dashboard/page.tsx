// app/page.js
import Sidebar from "./../components/Sidebar";
import Header from "./../components/Header";
import Card from "./../components/Card";

export default function Home() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </main>
            </div>
        </div>
    );
}