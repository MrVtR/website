import Image from "next/image";
import Link from "next/link";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";

import CategoryLabel from "@/components/blog/category";
import AuthorCard from "@/components/blog/authorCard";

const STATIC_IMAGE_URL2 = "/static/baixar.png"; // Path to your static image

const STATIC_IMAGES = [
  {
    src: "/static/image1.png",
    linkKey: "downloadLink1",
    captionKey: "caption1"
  },
  {
    src: "/static/image2.png",
    linkKey: "downloadLink2",
    captionKey: "caption2"
  },
  {
    src: "/static/image3.png",
    linkKey: "downloadLink3",
    captionKey: "caption3"
  },
  {
    src: "/static/image4.png",
    linkKey: "downloadLink4",
    captionKey: "caption4"
  }
];

export default function Post(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage
    ? urlForImage(post?.mainImage)
    : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <CategoryLabel categories={post.categories} />
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {AuthorimageProps && (
                  <Link href={`/author/${post.author.slug.current}`}>
                    <Image
                      src={AuthorimageProps.src}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <Link href={`/author/${post.author.slug.current}`}>
                    {post.author.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}>
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-0 mx-auto flex max-w-screen-lg items-center justify-center overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            width={Math.floor(
              imageProps.height *
                ((imageProps.width / imageProps.height) * 0.8)
            )} // Calculate width based on 70% height and aspect ratio
            height={Math.floor(imageProps.height * 0.8)} // Set the image height to 70% of the original height
            className="object-contain"
          />
        )}
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto max-w-screen-md dark:prose-invert prose-a:text-blue-600">
            {post.body && <PortableText value={post.body} />}
            <div
              className="grid grid-cols-2 items-center justify-center gap-4"
              style={{
                columnGap: "3rem"
              }}>
              {post.tags.map(tag => (
                <div key={tag}>
                  <img
                    src={`/profile/${tag}.png`}
                    alt={`Profile ${tag}`}
                    style={{
                      display: "block",
                      marginTop: "-20px"
                    }}
                  />
                </div>
              ))}
            </div>
            {post.body2 && <PortableText value={post.body2} />}
            <img src="/static/baixar.png" alt="DownloadLabel" />
            <div
              className="grid grid-cols-2 items-center justify-center gap-4"
              style={{
                marginTop: "-50px"
              }}>
              {STATIC_IMAGES.map(
                (image, index) =>
                  post[image.linkKey] && (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center">
                      <a
                        href={post[image.linkKey]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center">
                        <img
                          src={image.src}
                          alt={`Download ${index + 1}`}
                          className="mb-2"
                        />
                      </a>
                      {post[image.captionKey] && (
                        <figcaption
                          className="prose text-lg font-bold text-gray-800 dark:text-gray-400"
                          style={{
                            marginTop: "0px"
                          }}>
                          {post[image.captionKey]}
                        </figcaption>
                      )}
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 ">
              ← Ver todas as postagens
            </Link>
          </div>
          {post.author && <AuthorCard author={post.author} />}
        </article>
      </Container>
    </>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
