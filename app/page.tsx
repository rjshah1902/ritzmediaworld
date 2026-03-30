import Navbar from "./components/Navbar";
import { ReactNode } from "react";

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
}