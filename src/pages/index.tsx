import Link from "next/link";
import { client } from "../libs/client";
import Header from "../../components/organisms/header";
import "../styles/style.module.css";
import Main from "../../components/organisms/main";

interface HomeProps {
  blog: Array<{ id: string; title: string }>;
}

export default function Home({ blog }: HomeProps) {
  return (
    <>
      <Header></Header>
      <div>
        <Main></Main>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
