import Navbar from "./components/Navbar";

export default function FrontendLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
}