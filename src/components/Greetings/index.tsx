import Image from 'next/image';

import styles from './styles.module.scss';

export const Greetings: React.FC = () => (
  <div className={styles['container']}>
    <p className="heading1">NextJS Starter Template!!</p>

    <div>
      <Image
        src="/react.png"
        width={250}
        height={250}
        alt="React"
        title="React"
      />
    </div>

    <p className="body2">An NextJS template including Typescript, SASS.</p>
  </div>
);
