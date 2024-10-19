import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "3D Mdeling",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We implemented 3D modeling using Three.js, providing a more interactive
        user experience through the 3D models.
      </>
    ),
  },
  {
    title: "Send and Receive Messages",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Users can send and receive messages to and from others, allowing for
        heartfelt communication between users.
      </>
    ),
  },
  {
    title: "Guest and Registered User",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        You can use the service as a guest without logging in, and switch to a
        registered user anytime by logging in.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
        <div style={{ display: "flex" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
