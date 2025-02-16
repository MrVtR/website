import Container from "@/components/container";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import PostList from "@/components/postlist";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function Author(props) {
  const { loading, posts, title } = props;

  if (!loading && !posts.length) {
    notFound();
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(0, 0, 0, 0.1)",
        marginTop: "32px",
        borderRadius: "15px"
      }}>
      {posts && (
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-brand-primary text-3xl font-semibold tracking-tight dark:text-white lg:text-5xl lg:leading-tight">
              {title}
            </h1>
            <p className="mt-1 text-gray-600">
              {posts.length}{" "}
              {posts.length === 1 ? "Postagem" : "Postagens"}
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-3 grid gap-[50px] md:grid-cols-2 lg:gap-[10px] xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
              />
            ))}
          </div>
        </Container>
      )}
    </div>
  );
}
