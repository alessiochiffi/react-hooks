import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SearchForm from '../components/SearchForm/index.tsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchForm></SearchForm>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
