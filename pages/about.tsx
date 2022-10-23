import Head from "next/head";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import me from "../public/images/me.jpg";

const About: React.FC = ({}) => {
    const title = "About Me - Julien Liam Yasar";

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
            <div className="prose dark:prose-invert">
                <PageTitle name="About Me" />
                <div className="relative sm:flex sm:flex-row-reverse">
                    <div className="mx-auto w-60 h-60 sm:w-full sm:h-full ">
                        <Image
                            className="rounded-full"
                            src={me}
                            alt="julien as a child, holding a bird by its feet between his fingers. this it so put a ring on the bird"
                        />
                    </div>
                    <div className="prose dark:prose-invert mt-5 sm:mr-3 sm:mt-0">
                        <p>
                            If you&apos;re interested to learn more about me for
                            some reason, here&apos;s a list of things that might
                            paint a picture of the type of person I am.
                        </p>
                        <p>
                            These things bring joy to my life, and there could
                            be someone out there who has similar interests. If
                            thats the case, feel free to reach out on{" "}
                            <a
                                href="https://twitter.com/eggsandbread"
                                rel="prefetch noreferrer"
                                target="_blank"
                            >
                                Twitter
                            </a>{" "}
                            as I like meeting new people.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
