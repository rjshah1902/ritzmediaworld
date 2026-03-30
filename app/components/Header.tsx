
// components/Header.js
export default function Header() {
    return (
        <div className="bg-white shadow p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded px-3 py-1"
                />
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
        </div>
    );
}

