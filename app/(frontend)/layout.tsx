import Navbar from "./../components/Navbar";
import PageTracker from "./../components/PageTracker";
import { ReactNode } from "react";

export default function FrontendLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <PageTracker />
            <Navbar />
            <div className="p-6">{children}</div>
        </div>
    );
}