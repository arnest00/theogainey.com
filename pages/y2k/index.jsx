import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import AnimationToggle from '../../components/y2k/AnimationToggle';
import CurrentTime from '../../components/y2k/CurrentTime';
import GameEngine from '../../components/y2k/GameEngine';

import styles from './index.module.css';

const HomePageY2K = () => {
  const [ animationsEnabled, setAnimationsEnabled ] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>The Official Portfolio Website for Theo Gainey</title>
      </Head>

      <header>
        <div className={`margin-y-8px flex-space-bewteen`}>
          <Image
            src="/y2k/message-sprite.png"
            height={32}
            width={32}
            className="pixel-art"
            alt={'Pixel art of a text message notification'}
          />
          <AnimationToggle
            animationsEnabled={animationsEnabled}
            setAnimationsEnabled={setAnimationsEnabled}
          />
          <CurrentTime
            animationsEnabled={animationsEnabled}
          />
        </div>

        <div className={`margin-y-8px flex-space-bewteen`}>
          <Image
            src="/y2k/signal-sprite.png"
            height={96}
            width={32}
            className="pixel-art"
            alt={'Pixel art of a signal icon with a strong connection'}
          />
          <h1 className={`h1`}>Theo Gainey</h1>
          <Image
            src="/y2k/battery-sprite.png"
            height={96}
            width={32}
            className="pixel-art"
            alt={'Pixel art of a battery icon with full power'}
          />
        </div>

        <div className={`margin-y-8px flex-center`}>
          {animationsEnabled ?
            <Image
              src="/y2k/profile-sprite.gif"
              height={144}
              width={144}
              className="pixel-art"
              alt={'Pixel art of Theo Gainey - animated'}
            />
            :
            <Image
              src="/y2k/profile-sprite-static.gif"
              height={144}
              width={144}
              className="pixel-art"
              alt={'Pixel art of Theo Gainey'}
            />
          }
        </div>

        <div className={`margin-y-8px text-align-center`}>
          <p>Full Stack Developer Apprentice</p>
          <p>Sparkbox, Jan 2022 to present</p>
          <Link href="https://github.com/theogainey">
            <a className={`${styles['link']} margin-r-8px`}>GitHub <span aria-hidden={true}>-&gt;</span></a>
          </Link>
          <Link href="https://twitter.com/gaineytheo">
            <a className={`${styles['link']}`}>Twitter <span aria-hidden={true}>-&gt;</span></a>
          </Link>
        </div>
      </header>

      <main>
        <section className={`margin-y-8px`}>
          <Link href="/#projects/">
            <a className={styles['link']}>
              <h2 className={`h2`}>Projects <span aria-hidden={true}>-&gt;</span></h2>
            </a>
          </Link>
          <p>See what I have built</p>
        </section>

        <section className={`margin-y-8px`}>
          <Link href="/HelpfulLinks">
            <a className={styles['link']}>
              <h2 className={`h2`}>Helpful Links <span aria-hidden={true}>-&gt;</span></h2>
            </a>
          </Link>
          <p>Learning resources</p>
        </section>

        <GameEngine
          animationsEnabled={animationsEnabled}
        />
      </main>
    </div>
  );
}

export default HomePageY2K;
