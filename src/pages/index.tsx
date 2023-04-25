import Link from "next/link";
import { client } from "../libs/client";
import Header from "../../components/organisms/header";
import "../styles/style.module.css";
import Main from "../../components/organisms/main";
import Footer from "../../components/organisms/footer";
import styles from "../styles/style.module.css";

interface HomeProps {
  blog: Array<{ 
    id: string;
    title: string;
    thumbnail: { url: string };
    comment: string;
    url: string;
  }>;
}

export default function Home({ blog }: HomeProps) {
  return (
    <>
      <Header />
      <div>
        <Main></Main>
        <div className={styles.bl_bg}>
        <div className={styles.inner}>
          <section id="blog" className={styles.bl_area}>
            <div className={styles.bl_title}>
              <h2>BLOG</h2>
              <p>ブログ</p>
            </div>
            <div className={styles.bl_content}>
            {blog.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} className={styles.bl_box}>
              <div className={styles.bl_img}>
                  <img src={blog.thumbnail.url} alt="" />
                </div>
                <div className={styles.bl_lower}>
                  <h3>{blog.title}</h3>
                  {/* <!-- timeタグの属性datepublished（公開日） or datemodified（編集日） --> */}
                  {blog.comment}
                </div>
              </Link>
          ))}
            </div>
          </section>
        </div>
      </div>
        <ul>
          
        </ul>
      </div>
      <Footer />
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
