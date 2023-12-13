import styles from "../page.module.css";

export default function Max() {
  return (
    <>
      <p>Example 1:</p>
      <div className={styles.max}>
        <h2>Calculated max width</h2>
      </div>
      <br />
      <code>
        <span>width: max(400px, 50%);</span>
      </code>
      <p>
        This effectively means that it will be 50% of the viewport unless that
        calculated value is less than 400px. For instance, 50% of a viewport
        width of 700px is 350px. At this viewport width the browser will
        calculate this value to be 400px since that is the larger of the two
        numbers. But at a viewport width of 900px the calculated value will be
        450px since that is the larger of the two numbers.
      </p>
    </>
  );
}
