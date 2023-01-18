export interface Post {
    slug: string;
    title: string;
    date: string;
    contentHtml: string;
    author?: string;
    description?: string;
}

export interface Album {
    title: string;
    image: string;
    url: string;
}

export interface Projects {
    title: string;
    image: string;
    url: string;
    desc: string;
}