import Head from "next/head";
import config from "../../constants/config";

const seoDescription = "some description";
const logo = "";

interface IProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const HeadLayout = ({ children, title, description, image, url }: IProps) => {
    return (
        <Head>
            <meta property="og:type" content="website" />
            <title>
                {title
                    ? `${title} | Crown Phoenix Admin Panel`
                    : `Crown Phoenix Admin Panel`}
            </title>
            <meta
                name="title"
                content={
                    title
                        ? `${title} | Crown Phoenix Admin Panel`
                        : `Crown Phoenix Admin Panel`
                }
            />
            <meta
                property="og:title"
                content={
                    title
                        ? `${title} | Crown Phoenix Admin Panel`
                        : `Crown Phoenix Admin Panel`
                }
            />
            <meta
                property="twitter:title"
                content={
                    title
                        ? `${title} | Crown Phoenix Admin Panel`
                        : `Crown Phoenix Admin Panel`
                }
            />
            <meta name="description" content={description || seoDescription} />
            <meta
                property="og:description"
                content={description || seoDescription}
            />
            <meta
                property="twitter:description"
                content={description || seoDescription}
            />
            <meta
                property="og:image"
                content={image ? config.CDN + image : logo}
            />
            <meta
                property="twitter:image"
                content={image ? config.CDN + image : logo}
            />
            <meta name="twitter:card" content="summary_large_image" />
            {url && (
                <meta property="og:url" content={config.CLIENT_URL + url} />
            )}
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/cpmc/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/cpmc/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/cpmc/favicon-16x16.png"
            />
            <link rel="manifest" href="/cpmc/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/cpmc/safari-pinned-tab.svg"
                color="#5bbad5"
            />
            <link rel="shortcut icon" href="/cpmc/favicon.ico" />
            <meta name="msapplication-TileColor" content="#00aba9" />
            <meta
                name="msapplication-config"
                content="/cpmc/browserconfig.xml"
            />
            {children}
        </Head>
    );
};

export default HeadLayout;
