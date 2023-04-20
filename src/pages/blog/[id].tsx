import { client } from '../../libs/client';
import styles from '@/styles/Home.module.css';

// 型指定
interface BlogData {
  id: string;
  title: string;
  publishedAt: string;
  body: string;
}

interface BlogIdProps {
  blog: BlogData;
}

interface Content  {
  id: string;
  title: string;
  publishedAt: string;
  body: string;
}

interface Context  {
  title: string;
  params: { id: string };
  body: string;
}

export default function BlogId({ blog }: BlogIdProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content:Content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context:Context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};


