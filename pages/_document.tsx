import Document, { Head, Html, Main, NextScript } from "next/document";

class JulienDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="favicon.ico"
                        sizes="180x180"
                        href="/public/favicons/favicon.ico"
                    />
                    <meta name="theme-color" content="#111111" />
                </Head>
                <body className="bg-white dark:bg-black text-black dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default JulienDocument;
