import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const authors = [
    { src: "/profile/1.png", url: null },
    {
      src: "/profile/13.png",
      url: "/author/mrvtr",
    },
    { src: "/profile/2.png", url: null },
    { src: "/profile/3.png", url: null },
    { src: "/profile/8.png", url: null },
    { src: "/profile/11.png", url: null },
    { src: "/profile/14.png", url: null },
    { src: "/profile/15.png", url: null },
    { src: "/profile/17.png", url: null },
  ];
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Sobre a Nossa Equipe
      </h1>

      <div className="mt-8 grid grid-cols-2 place-items-center gap-4">
        {authors.map((author, index) => {
          return (
            <div key={index} className="block w-[280px]">
              {author.url ? (
                <Link href={author.url} className="h-full w-full">
                  <img src={author.src} alt="" className="h-full w-full" />
                </Link>
              ) : (
                <img src={author.src} alt="" className="h-full w-full" />
              )}
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software providers and
          financial institutions to build integrated products for their small
          business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from lenders to
          corporate card providers and business forecasting tools, with use
          cases including automatic reconciliation, business dashboarding, and
          loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
