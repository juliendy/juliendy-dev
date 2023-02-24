interface FooterProps {
    href: string;
    name: string;
}

const FooterItem: React.FC<FooterProps> = ({ href, name }) => {
    return (
        <a
            className="font-mono font-bold text-md sm:text-lg  hover:text-neutral-500 dark:hover:text-neutral-400 transition-all"
            href={href}
            rel="prefetch noreferrer"
            target="_blank"
        >
            {name}
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="grid grid-cols-3 sm:flex-row sm:flex gap-4 mt-10">
            <FooterItem
                href="https://github.com/juliendy/juliendy-dev"
                name="source"
            />
            <FooterItem
                href="https://twitter.com/eggsandbread"
                name="twitter"
            />
            <FooterItem
                href="https://www.linkedin.com/in/julien-yasar-396911235/"
                name="linkedin"
            />
            <FooterItem href="https://github.com/juliendy" name="github" />
        </footer>
    );
};

export default Footer;
