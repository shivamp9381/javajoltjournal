import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import JavaSvg from '@site/static/img/java.svg';
import ProgressSvg from '@site/static/img/progress.svg';
import CoffeeCodeSvg from '@site/static/img/coffee-code.svg';

const FeatureList = [
  {
    title: 'Master Java DSA',
    Svg: JavaSvg,
    description: (
      <>
        Structured notes and problems on Data Structures & Algorithms in Java, 
        all in one place.
      </>
    ),
  },
  {
    title: 'Track Your Progress',
    Svg: ProgressSvg,
    description: (
      <>
        Organize your solved questions, mark important topics, and revisit them anytime.
      </>
    ),
  },
  {
    title: 'Learn with Ease',
    Svg: CoffeeCodeSvg,
    description: (
      <>
        Explanations, examples, and solutions written to help you code confidently — 
        with a cup of coffee ☕.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>
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
