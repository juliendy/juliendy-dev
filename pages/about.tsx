import Head from "next/head";
import Image from "next/image";
import PageTitle from "../components/PageTitle";
import me from "../public/images/me.jpg";
import { albums } from "../data/music";

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
                <div>
                    <h2 className="text-2xl font-bold mb-3 mt-8">
                        things i like.
                    </h2>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/juliendy?tab=stars"
                                rel="prefetch noreferrer"
                                target="_blank"
                            >
                                Open source projects
                            </a>
                            . It&apos;s fascinating that random people all over
                            the internet are able to come together to change the
                            world.
                        </li>
                        <li>
                            Reading{" "}
                            <a
                                href="https://www.goodreads.com/review/list/4623260?ref=nav_mybooks"
                                rel="prefetch noreferrer"
                                target="_blank"
                            >
                                books
                            </a>{" "}
                            on my Kindle or traditional paperback or hardcover.
                        </li>
                        <li>
                            Hiking (wherever)- I have been hiking since a very
                            young age. What I love about it is because it makes
                            me feel my body and reflecting on the small aspects
                            of nature.
                        </li>
                        <li>
                            Doing typing tests on{" "}
                            <a
                                href="https://monkeytype.com/"
                                rel="prefetch noreferrer"
                                target="_blank"
                            >
                                monkeytype
                            </a>
                            . My current personal record is 133wpm.
                        </li>
                        <li>
                            Mushroom foraging: This is one of my favourite
                            hobbies. We were lucky to have a safe forest nearby
                            forests around Berlin (many other 🌳🌲 in Germany).
                            My favourite mushrooms to eat are the gorgeous
                            Porcini (<em>Boletus edulis</em>) - or Gemeiner
                            Steinpilz in German.
                        </li>
                        <li>
                            Birdwatching: My father was a birdwatcher. My first
                            real book was a 1947 edition of a field guide to the
                            birds of Scandinavia (written in Swedish). Growing
                            up in north part of Sweden, my parents would take me
                            out on the weekends on birdwatching and foraging
                            trips.
                        </li>
                        <li>
                            Consuming informational content at 2x speed.{" "}
                            <a
                                href="https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en"
                                rel="prefetch noreferrer"
                                target="_blank"
                            >
                                Video Speed Controller
                            </a>{" "}
                            has completely changed the way I watch videos. I of
                            course watch movies and shows at normal speed,
                            I&apos;m not a psycho.
                        </li>
                        <li>
                            Lastly, Gardening is something I have always done.
                            In Berlin, I used to have a bed in Templehof where I
                            used to grow a variaty of flowers. It is the best
                            feeling when something starts growing from the soil that you planted.
                        </li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-3 mt-8">Music</h2>
                    <p>
                        I&apos;m mostly a fan of indie music, but listen to a
                        range of other genres. Feel free to check out my{" "}
                        <a
                            href="https://open.spotify.com/user/fogatron"
                            rel="prefetch noreferrer"
                            target="_blank"
                        >
                            spotify profile
                        </a>
                        .
                    </p>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3">
                        {albums.map((album) => (
                            <a
                                href={album.url}
                                className="group"
                                key={album.title}
                                rel="prefetch noreferrer"
                                target="_blank"
                            >
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg cursor-pointer">
                                    <Image
                                        alt={album.title}
                                        src={album.image}
                                        layout="fill"
                                        className="group-hover:opacity-75 transition-all"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
