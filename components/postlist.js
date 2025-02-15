import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";
import { ptBR } from "date-fns/locale";

export default function PostList({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight
}) {
  const imageProps = post?.mainImage
    ? urlForImage(post.mainImage)
    : null;
  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  const view = post?.viewCount ? post.viewCount : 0;

  return (
    <>
      <div
        id="TESTE2"
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}
        style={{
          margin: "10px"
        }}>
        <div
          id="TESTE"
          className={cx(
            " overflow-hidden rounded-md  transition-all hover:scale-105   dark:bg-gray-800"
          )}
          style={{
            display: "inline-block"
          }}>
          <Link
            className={cx(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                  ? "aspect-[5/4]"
                  : "aspect-square"
            )}
            href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
              post.slug?.current
            }`}
            style={{
              width: "100%"
            }}>
            {imageProps ? (
              <img
                src={imageProps.src}
                alt={post.mainImage?.alt || "Thumbnail"}
                className="object-cover transition-all"
                style={{
                  maxHeight: "400px",
                  width: "auto"
                }} // Prevents unwanted gaps
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cx(minimal && "flex items-center")}>
          <div>
            <CategoryLabel
              categories={post.categories}
              nomargin={minimal}
            />
            <h2
              className={cx(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                    ? "text-3xl"
                    : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <Link
                href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                  post.slug?.current
                }`}>
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900">
                  {post.title}
                </span>
              </Link>
            </h2>

            <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    href={`/post/${
                      pathPrefix ? `${pathPrefix}/` : ""
                    }${post.slug?.current}`}>
                    {post.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className=" flex flex-col items-center justify-center gap-2 py-4 text-gray-500 dark:text-gray-400">
              <Link href={`/author/${post.author?.slug?.current}`}>
                <div className="flex items-center justify-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {post.author?.image && (
                      <Image
                        src={AuthorimageProps.src}
                        loader={AuthorimageProps.loader}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        fill
                        sizes="20px"
                      />
                    )}
                  </div>
                  <span className="truncate text-[14px] text-sm">
                    {post.author?.name}
                  </span>
                </div>
              </Link>
              <time
                className="text-[14px] text-gray-500 dark:text-gray-400"
                dateTime={post?.publishedAt || post._createdAt}>
                {format(
                  parseISO(post?.publishedAt || post._createdAt),
                  "dd 'de' MMMM 'de' yyyy",
                  { locale: ptBR }
                )}
              </time>
              <p className="text-[14px]">👀 {view}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
