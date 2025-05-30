import Head from 'next/head';
import Header from './components/Header';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import References from './components/References';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Becky Lu - Design Specialist</title>
        <meta name="description" content="Becky Lu's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Contact />
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <Skills />
            <Education />
          </div>
          <div className={styles.rightColumn}>
            <Experience />
            <References />
          </div>
        </div>
      </main>
    </div>
  );
}
