import styles from "../page.module.css";

export default function Calc() {
  return (
    <>
      <p>Example 1:</p>
      <img
        src="https://picsum.photos/2000/400"
        alt="random image"
        className={styles.calc}
      />
      <code>
        <span>.calc {"{"}</span>
        <span className="line">width: 100dvw;</span>
        <span className="line">height: 200px;</span>
        <span className="line">object-fit: cover;</span>
        <span className="line">margin: 0 calc(-50dvw + 50%);</span>
        <span>{"}"}</span>
      </code>
      <p>Example 2:</p>
      <h2 className={styles.calcH2}>Dynamically calculated font size</h2>
      <code>
        <span>font-size: calc(2dvw + 2rem);</span>
      </code>
      <p>
        The caveat here is that this isn't good to lean on for smaller font
        sizes as they will get to small on smaller screen sizes
      </p>
    </>
  );
}
