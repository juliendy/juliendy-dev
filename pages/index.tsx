import Head from "next/head";
import Link from "next/link";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>Julien Liam Yasar - Developer, lifelong learner.</title>
            </Head>
            <div className="gap-1">
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                    Hi, I&apos;m Julien.
                </h1>
                <p className="font-mono text-sm sm:text-lg font-semibold text-neutral-600 dark:text-neutral-400">
                    Junior Web Developer{" "}
                    {/* <span className="font-serif">
                        <span className="text-google-blue">G</span>
                        <span className="text-google-red">o</span>
                        <span className="text-google-yellow">o</span>
                        <span className="text-google-blue">g</span>
                        <span className="text-google-green">l</span>
                        <span className="text-google-red">e</span>
                    </span> */}
                </p>
                <div className="max-w-fit my-6"></div>
            </div>
            <div className="prose dark:prose-invert">
                <p>
                    I&apos;m a 33 y/o from Berlin, keen on learning deeply about{" "}
                    <Link href="/about">
                        <a>stuff I love</a>
                    </Link>{" "}
                    like tech, web development and life.
                </p>
                <p>
                    I currently looking for work within the{" "}
                    <a
                        href="https://www.w3.org"
                        rel="prefetch noreferrer"
                        target="_blank"
                    >
                        Web
                    </a>{" "}
                    as{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer"
                        rel="prefetch noreferrer"
                        target="_blank"
                    >
                        front end developer,
                    </a>{" "}
                    with focus on problems related to the web ecosystems and
                    creating accesable web pages for all.
                </p>
                <p>
                    Look at some of the{" "}
                    <Link href="/projects">projects</Link>{" "}
                    that I have created!
                </p>
                <p>
                    Here, I write{" "}
                    <Link href="/notes">
                        <a>notes</a>
                    </Link>{" "}
                    on the books I&apos;ve read, providing summaries for others
                    through my thoughts on the book. I also write{" "}
                    <Link href="/articles">
                        <a>articles</a>
                    </Link>{" "}
                    (though rarely) on stuff I find interesting enough to share.
                </p>
            </div>
        </>
    );
};

export default Index;
