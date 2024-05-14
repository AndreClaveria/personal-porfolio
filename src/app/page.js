import Image from "next/image";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div className={styles.background}>
      <Image
        src="/img/room.png"
        alt="Descriptive text for screen readers"
        width={500}
        height={300}
        layout="responsive"
      />
    </div>
  );
}
