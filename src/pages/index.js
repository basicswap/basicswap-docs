import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Decentralized',
    description: (
      <>
        BasicSwap DEX is a fully decentralized exchange that enables peer-to-peer trading via atomic swaps without intermediaries.
      </>
    ),
  },
  {
    title: 'Private and Secure',
    description: (
      <>
        Built from the ground up with a strong focus on security and privacy, BasicSwap DEX keeps your funds and information safe.
      </>
    ),
  },
  {
    title: 'Open-Source',
    description: (
      <>
        All of BasicSwap DEX's code is open-source, meaning that anyone verify its integrity and contribute to its development.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
