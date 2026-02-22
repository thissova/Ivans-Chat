import { ReactComponent as LogoSvg } from './../../assets/logo.svg';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoSvg />
      </div>
      <div className={styles.mainHeader}>
        <h1>Ivan's Chat</h1>
        <p>Version 1.0.0</p> {/*TODO: Change hardcode */}
      </div>
      <div className={styles.descriptionBlock}>
        <section className={styles.glassBlock}>
          <h2>About the Project</h2>
          <p>
            Ivan's Chat is a next-generation messaging platform designed with a
            focus on privacy, speed, and aesthetic excellence. Built with the
            latest web technologies, it features a stunning glassmorphism
            interface that feels at home on any modern device.
          </p>
          <p>
            Our mission is to connect people through a beautiful,
            distraction-free environment where conversations can flourish
            naturally.
          </p>
        </section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '800px',
            gap: '16px',
          }}
        >
          <section className={styles.glassBlock}>
            {/* heart logo here */}
            <h2>Crafted with Care</h2>
            <p>
              Every pixel has been obsessively polished to ensure a delightful
              user experience.
            </p>
          </section>
          <section className={styles.glassBlock}>
            {/* network logo here */}
            <h2>Global Network</h2>
            <p>
              Connect with friends and colleagues from anywhere in the world
              instantly.
            </p>
          </section>
        </div>
        <div className={styles.contacts}>
          <h3>Connect with us</h3>
          <div>
            {/* Add github page */}
            {/* Add telegram page  TODO: finish contacts*/}
            {/* Add donate page */}
          </div>
        </div>
      </div>

      <footer>&copy; 2026. All rights are not reserved.</footer>
    </div>
  );
}

export default AboutPage;
