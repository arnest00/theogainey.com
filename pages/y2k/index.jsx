import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';

const HomePageY2K = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Official Portfolio Website for Theo Gainey</title>
      </Head>

      <header>
        <div className={`${styles['section--flex-row']} ${styles['section--flex-space-between']}`}>
          <div>
            <Link href="https://github.com/theogainey">
              <a>GitHub</a>
            </Link>
            <Link href="https://twitter.com/gaineytheo">
              <a>Twitter</a>
            </Link>
          </div>
          <p>4:01 pm</p>
        </div>
        <div className={`${styles['section--flex-row']} ${styles['section--flex-space-between']} ${styles['section--centered-text']}`}>
          <Image
            src="/y2k/signal-sprite.png"
            height={96}
            width={32}
            className={styles.sprite}
            alt={'Pixel art of a signal icon with a strong connection'}
          />
          <h1 className={styles.section__header}>Theo Gainey</h1>
          <Image
            src="/y2k/battery-sprite.png"
            height={96}
            width={32}
            className={styles.sprite}
            alt={'Pixel art of a battery icon with full power'}
          />
        </div>
        <div className={`${styles['section--flex-row']} ${styles['section--flex-centered']}`}>
          <Image
            src="/y2k/profile-sprite.gif"
            height={144}
            width={144}
            className={styles.sprite}
            alt={'Pixel art of Theo Gainey'}
          />
        </div>
        <div className={styles['section--centered-text']}>
            <p>Full Stack Developer Apprentice</p>
            <p>Sparkbox, Jan 2022 to present</p>
        </div>
      </header>

      <main>
        <section>
          <Link href="/y2k/projects/">
            <a>Projects <span aria-hidden={true}>-&gt;</span></a>
          </Link>
          <p>See what I have built</p>
        </section>

        <section>
          <Link href="/y2k/helpful-links">
            <a>Helpful Links <span aria-hidden={true}>-&gt;</span></a>
          </Link>
          <p>Learning resources</p>
        </section>
      </main>
    </div>
  );
}

export default HomePageY2K;