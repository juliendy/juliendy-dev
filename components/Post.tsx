import Head from "next/head";
import { Post } from "../lib/types";
import Date from "./Date";

interface PostProps {
  postType: "note" | "article";
  postData: Post;
}

const Post: React.FC<PostProps> = ({ postType, postData }) => {
  const title = `${postData.title} - Julien Liam Yasar`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mb-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          {postData.title}
        </h1>
        <div className="font-mono text-neutral-600 dark:text-neutral-400 mt-2">
          {postType === "note" ? <>{postData.author} • </> : ""}
          <Date dateString={postData.date} />
        </div>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
};

export default Post;
