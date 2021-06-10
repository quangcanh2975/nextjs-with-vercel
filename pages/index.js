import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return { props: { allPostsData } };
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section className={utilStyles.headingMd}>
				<p>Nguyen Quang Canh</p>
				<p>
					This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">Nextjs tutorial</a>
				</p>
			</section>
			<section className={`${utilStyles.headingMd}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.headingLg}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
