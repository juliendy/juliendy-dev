import Head from "next/head";
import Link from "next/link";
import NowPlaying from "../components/NowPlaying";

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>juliendydev</title>
            </Head>
            <div className="gap-1">
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                    hi, I&apos;m julien.
                </h1>
                <p className="font-mono text-sm sm:text-lg font-semibold text-neutral-600 dark:text-neutral-400">
                    junior web developer{" "}
                    {/* <span className="font-serif">
                        <span className="text-google-blue">G</span>
                        <span className="text-google-red">o</span>
                        <span className="text-google-yellow">o</span>
                        <span className="text-google-blue">g</span>
                        <span className="text-google-green">l</span>
                        <span className="text-google-red">e</span>
                    </span> */}
                </p>
                <div className="max-w-fit my-6">
                    <NowPlaying />
                </div>
                <div className="max-w-fit my-6"></div>
            </div>
            <div className="prose dark:prose-invert">
                <p>
                    i&apos;m a 33 y/o from berlin, keen on learning deeply about{" "}
                    <Link href="/about">
                        <a>stuff i love and built</a>
                    </Link>{" "}
                    like tech, web development and life.
                </p>
                <p>
                    i am currently looking for work within the{" "}
                    <a
                        href="https://www.w3.org"
                        rel="prefetch noreferrer"
                        target="_blank"
                    >
                        web
                    </a>{" "}
                    as{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer"
                        rel="prefetch noreferrer"
                        target="_blank"
                    >
                        web developer,
                    </a>{" "}
                    with focus on problems related to the web ecosystems and
                    creating accessible web pages for all.
                </p>
                <p>
                    here, i write{" "}
                    <Link href="/notes">
                        <a>notes</a>
                    </Link>{" "}
                    on the books I&apos;ve read, providing summaries for others
                    through my thoughts on the book. i also write{" "}
                    <Link href="/articles">
                        <a>articles</a>
                    </Link>{" "}
                    (though rarely) on stuff i find interesting enough to share.
                </p>
            </div>
        </>
    );
};

export default Index;
