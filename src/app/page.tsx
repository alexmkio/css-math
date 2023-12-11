export default function Home() {
  return (
    <>
      <section>
        <h2>Math functions</h2>
        <div>
          <p>
            The math functions allow CSS numeric values to be written as
            mathematical expressions.
          </p>
          <p>
            Each of the pages below contains detailed information about a math
            function's syntax, browser compatibility data, examples, and more.
            For a holistic introduction to CSS math functions, see{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions">
              Using CSS math functions
            </a>
            .
          </p>
        </div>
      </section>
      <section>
        <h3>Basic arithmetic</h3>
        <div>
          <dl>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc">
                <code>calc()</code>
              </a>
            </dt>
            <dd>
              <p>Performs basic arithmetic calculations on numerical values.</p>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h3>Comparison functions</h3>
        <div>
          <dl>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/min">
                <code>min()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the smallest of a list of values.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/max">
                <code>max()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the largest of a list of values.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp">
                <code>clamp()</code>
              </a>
            </dt>
            <dd>
              <p>
                Calculates the central of a minimum, central, and maximum
                values.
              </p>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h3>Stepped value functions</h3>
        <div>
          <dl>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/round">
                <code>round()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates a rounded number based on a rounding strategy.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/mod">
                <code>mod()</code>
              </a>
            </dt>
            <dd>
              <p>
                Calculates a modulus (with the same sign as the divisor) when
                dividing one number by another.
              </p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/rem">
                <code>rem()</code>
              </a>
            </dt>
            <dd>
              <p>
                Calculates a remainder (with the same sign as the dividend) when
                dividing one number by another.
              </p>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h3>Trigonometric functions</h3>
        <div>
          <dl>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/sin">
                <code>sin()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the trigonometric sine of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cos">
                <code>cos()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the trigonometric cosine of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/tan">
                <code>tan()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the trigonometric tangent of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/asin">
                <code>asin()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the trigonometric inverse sine of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/acos">
                <code>acos()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the trigonometric inverse cosine of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/atan">
                <code>atan()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the trigonometric inverse tangent of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/atan2">
                <code>atan2()</code>
              </a>
            </dt>
            <dd>
              <p>
                Calculates the trigonometric inverse tangent of two-numbers in a
                plane.
              </p>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h3>Exponential functions</h3>
        <div>
          <dl>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/pow">
                <code>pow()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the base raised to the power of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/sqrt">
                <code>sqrt()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the square root of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hypot">
                <code>hypot()</code>
              </a>
            </dt>
            <dd>
              <p>
                Calculates the square root of the sum of the squares of its
                arguments.
              </p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/log">
                <code>log()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the logarithm of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/exp">
                <code>exp()</code>
              </a>
            </dt>
            <dd>
              <p>
                Calculates <code>e</code> raised to the power of a number.
              </p>
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h3>Sign-related functions</h3>
        <div>
          <dl>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/abs">
                <code>abs()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the absolute value of a number.</p>
            </dd>
            <dt>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/sign">
                <code>sign()</code>
              </a>
            </dt>
            <dd>
              <p>Calculates the sign (positive or negative) of the number.</p>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
}
