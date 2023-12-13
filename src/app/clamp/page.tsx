import styles from "../page.module.css";

export default function Clamp() {
  return (
    <>
      <p>Example 1:</p>
      <h2 className={styles.clamp}>Clamped font size</h2>
      <code>
        <span>font-size: clamp(1.5rem, 2vw, 2.5rem);</span>
      </code>
    </>
  );
}
