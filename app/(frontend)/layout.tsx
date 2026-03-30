import Navbar from "./../components/Navbar";
import PageTracker from "./../components/PageTracker";


export default function FrontendLayout({ children }) {

    return (
        <div>
            <PageTracker />
            <Navbar />
            <div className="p-6">{children}</div>
        </div>
    );
}