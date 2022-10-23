import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    const title = "Julien Liam Yasar - Developer, lifelong learner.";
    const description =
        "Julien Liam Yasar - Developer, lifelong learner. Documenting my journey.";
    const image = "/images/me.jpg";

    return (
        <div className="max-w-2xl mx-auto px-6 my-8">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
