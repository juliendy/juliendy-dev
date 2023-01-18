import { GetStaticProps } from "next";
import Head from "next/head";
import BookCards from "../components/BookCards";
import PageTitle from "../components/PageTitle";
import { NOTES_DIRECTORY } from "../lib/constants";
import { getSortedPostData } from "../lib/posts";
import { Post } from "../lib/types";

export const getStaticProps: GetStaticProps = () => {
    const allNotesData = getSortedPostData(NOTES_DIRECTORY);
    return {
        props: {
            allNotesData,
        },
    };
};

interface NotesProps {
    allNotesData: Post[];
}

const Notes: React.FC<NotesProps> = ({ allNotesData }) => {
    const title = "Book Notes - juliendydev";

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
            <PageTitle name="Book Notes" />
            <BookCards notes={allNotesData} />
        </>
    );
};

export default Notes;