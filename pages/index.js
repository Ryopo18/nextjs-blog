import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home ({ allPostsData }) {

  return (
    <Layout home>
      <Head>
        <title>Ryopo Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ようこそ！</p>
        <p>このブログは、Nextチュートリアルで作成しました。デザインには、tailwindcssを使用しています。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div className="bg-white p-3 m-2.5 shadow-lg rounded-lg flex justify-between items-center">
              <div className="flex">
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a className="text-xl font-medium text-blue-400">{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                </li>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

//このページがビルドされる時に以下の関数が実行される
//Pages配下だけで行える
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}