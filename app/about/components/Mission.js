import Image from "next/image";
import styles from "../style.module.css";

export default function Mission() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        {/* Yellow Header Badge */}
        <div
          style={{
            padding: "12px 160px",
            backgroundColor: "#eff430",
            borderRadius: "10px",
          }}
          className={styles.missionBadge}
        >
          Our Mission
        </div>

        {/* Text Area */}
        <p className={styles.missionDescription}>
          To make technology human, simple, and smart—for both businesses and
          the people they serve.
        </p>

        {/* Image Container */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/our-mission.webp" // Ensure this is in public/images/
            alt="Our team collaborating"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
