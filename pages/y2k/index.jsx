import Head from 'next/head';

import styles from './index.module.css';

const HomePageY2K = (props) => {
  return (
    <div className={styles.y2k}>
      <Head>
        <title>Theo Gainey</title>
      </Head>

      <header>
        <div>
          <div>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
          <p>4:01 pm</p>
        </div>
        <div>
          <div>
            <p>Signal</p>
          </div>
          <div>
            <h1>Theo Gainey</h1>
            <p>Full Stack Developer Apprentice</p>
            <p>Sparkbox, Jan 2022 to present</p>
          </div>
          <div>
            <p>Battery</p>
          </div>
        </div>
      </header>

      <main>
        <section>
          <a href="#">Projects <span>-&gt;</span></a>
          <p>See what I have built</p>
        </section>

        <section>
          <a href="#">Helpful Links <span>-&gt;</span></a>
          <p>Learning resources</p>
        </section>
      </main>
    </div>
  );
}

export default HomePageY2K;