import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '3D 모델링',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Three.js를 사용하여 3D 모델링을 구현하였습니다.
        3D 모델링을 통해 좀 더 인터랙티브한 사용자 경험을 제공합니다.
      </>
    ),
  },
  {
    title: '메세지 보내기',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        다른 사용자에게 메세지를 보내거나 받을 수 있습니다.
        메세지를 통해 사용자 간의 따뜻한 마음이 담긴 소통이 가능합니다.
      </>
    ),
  },
  {
    title: '게스트 로그인',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        로그인 없이도 게스트로 사용자를 만들어 사용할 수 있습니다.
        언제든지 로그인을 통해 사용자로 전환할 수 있습니다.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
