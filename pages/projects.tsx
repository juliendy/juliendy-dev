import Head from "next/head";
import Image from "next/image";
import PageTitle from "../components/PageTitle";

const Projects: React.FC = ({}) => {
    const title = "Projects - Julien Liam Yasar";

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    property="og:site_name"
                    content={title}
                    key="og:site_name"
                />
                <meta property="og:title" content={title} key="og:title" />
                <meta
                    name="twitter:title"
                    content={title}
                    key="twitter:title"
                />
            </Head>
            <div>
                <PageTitle name="Projects" />
                <h1>Projects here</h1>
            </div>
        </>
    );
};

export default Projects;
