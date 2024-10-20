import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          About Flow-Wing
        </Heading>
        <p className={styles.sectionDescription}>
          Flow-Wing is a programming language designed for seamless, intuitive
          programming, where code flows like natural thought. With its unique
          approach, Flow-Wing empowers developers to express their ideas clearly
          and efficiently, facilitating creativity and productivity in software
          development.
        </p>
      </div>
    </section>
  );
}
