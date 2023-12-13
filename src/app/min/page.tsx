import styles from "../page.module.css";

export default function Min() {
  return (
    <>
      <p>Example 1:</p>
      <div className={styles.min}>
        <h2>Calculated min width</h2>
      </div>
      <br />
      <code>
        <span>width: min(400px, 50%);</span>
      </code>
      <p>
        This effectively means that it will be 50% of the viewport unless that
        calculated value is more than 400px. For instance, 50% of a viewport
        width of 700px is 350px. At this viewport width the browser will
        calculate this value to be 350px since that is the smaller of the two
        numbers. But at a viewport width of 900px the calculated value will be
        400px, and not 50% of 900 (450), since that is the smaller of the two
        numbers.
      </p>
    </>
  );
}
